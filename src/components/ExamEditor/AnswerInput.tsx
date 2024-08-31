import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from './Button';
import { AnswerInputProps } from '@/types/Interfaces/interfaces';



const AnswerInput: React.FC<AnswerInputProps> = ({ questionIndex, answerIndex, onDelete }) => {
  const { register } = useFormContext();

  return (
    <div className="mb-2 flex items-center space-x-4">
      <input
        {...register(`questions.${questionIndex}.answers.${answerIndex}.title`, { required: true })}
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full bg-zinc-50"
        placeholder="Answer Title"
      />
      <input
        type="checkbox"
        {...register(`questions.${questionIndex}.answers.${answerIndex}.isCorrect`)}
        className="form-checkbox"
      />
      <input
        {...register(`questions.${questionIndex}.answers.${answerIndex}.description`)}
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full bg-zinc-50"
        placeholder="Answer Description"
      />
      <Button
        label="Delete"
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-700"
      />
    </div>
  );
};

export default AnswerInput;
