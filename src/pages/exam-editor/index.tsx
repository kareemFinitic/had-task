import React, { useEffect } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { Exam } from '../../types/Interfaces/interfaces';
import { useRouter } from 'next/router';
import TextInput from '../../components/ExamEditor/TextInput';
import TextArea from '../../components/ExamEditor/TextArea.tsx';
import QuestionInput from '../../components/ExamEditor/QuestionInput';
import Button from '../../components/ExamEditor/Button';

const ExamEditor = () => {
  const methods = useForm<Exam>({
    defaultValues: {
      title: '',
      description: '',
      questions: [{ title: '', answers: [{ title: '', isCorrect: false }] }],
    },
  });

  const { control, handleSubmit, reset } = methods;

  const { fields: questions, append: appendQuestion, remove: removeQuestion } = useFieldArray({
    control,
    name: 'questions',
  });

  const router = useRouter();
  const { index } = router.query;

  useEffect(() => {
    if (index !== undefined) {
      const exams = JSON.parse(localStorage.getItem('exams') || '[]');
      const examToEdit = exams[Number(index)];
      if (examToEdit) {
        reset(examToEdit);
      }
    }
  }, [index, reset]);

  const onSubmit = (data: Exam) => {
    const exams = JSON.parse(localStorage.getItem('exams') || '[]');

    if (index !== undefined) {
      exams[Number(index)] = data; 
    } else {
      exams.push(data); 
    }

    localStorage.setItem('exams', JSON.stringify(exams));
    router.push('/list-exams');
  };

  return (
    <div className='bg-blue-20 h-full'>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">
          {index !== undefined ? 'Edit Exam' : 'Create New Exam'}
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Exam Title"
              register={methods.register('title', { required: true })}
            />
            <TextArea
              label="Description"
              register={methods.register('description')}
            />

            {questions.map((_, qIndex) => (
              <QuestionInput
                key={qIndex}
                questionIndex={qIndex}
                onDelete={() => removeQuestion(qIndex)}
              />
            ))}

            <Button
              label="Add Question"
              onClick={() => appendQuestion({ title: '', answers: [{ title: '', isCorrect: false }] })}
            />

            <div className="mt-6">
              <Button
                type="submit"
                label={index !== undefined ? 'Update Exam' : 'Save Exam'}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ExamEditor;
