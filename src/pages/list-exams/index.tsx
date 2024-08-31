import { useEffect, useState } from 'react';
import { Exam } from '../../types/Interfaces/interfaces';
import ExamListItem from '../../components/ExamList/ExamListItem';
import ActionButton from '../../components/ExamList/ActionButton';

const ListExams = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const storedExams = JSON.parse(localStorage.getItem('exams') || '[]');
    setExams(storedExams);
  }, []);

  const handleDeleteExam = (index: number) => {
    const updatedExams = exams.filter((_, i) => i !== index);
    setExams(updatedExams);
    localStorage.setItem('exams', JSON.stringify(updatedExams));
  };

  return (
    <div className="bg-blue-20 h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">List of Exams</h1>

        <ul className="space-y-4 mt-14">
          {exams.map((exam, index) => (
            <ExamListItem
              key={index}
              exam={exam}
              index={index}
              onDelete={handleDeleteExam}
            />
          ))}
        </ul>

        <ActionButton
          label="Create New Exam"
          href="/exam-editor"
          className="bg-blue-500 hover:bg-blue-700 mt-11"
        />
      </div>
    </div>
  );
};

export default ListExams;
