import React from 'react';
import {  ExamListItemProps } from '../../types/Interfaces/interfaces';
import ActionButton from './ActionButton';
import Link from 'next/link';



const ExamListItem: React.FC<ExamListItemProps> = ({ exam, index, onDelete }) => {
  return (
    <li className="border rounded p-4 border-emerald-400 mt-14">
      <h2 className="text-xl font-semibold">{exam.title}</h2>
      <p className="mt-3">{exam.description}</p>
      <div className="flex gap-5 mt-5">
        <Link href={`/exam-editor?index=${index}`}>
          <ActionButton
            label="Edit Exam"
            className="bg-sky-900 hover:bg-blue-700"
          />
        </Link>
        <ActionButton
          label="Delete Exam"
          onClick={() => onDelete(index)}
          className="bg-red-500 hover:bg-red-700"
        />
      </div>
    </li>
  );
};

export default ExamListItem;
