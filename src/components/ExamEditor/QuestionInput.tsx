import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import TextInput from './TextInput';
import TextArea from './TextArea.tsx';
import Button from './Button';
import AnswerInput from './AnswerInput';
import { QuestionInputProps } from '@/types/Interfaces/interfaces';



const QuestionInput: React.FC<QuestionInputProps> = ({ questionIndex, onDelete }) => {
  const { control, register } = useFormContext();
  const { fields: answers, append: appendAnswer, remove: removeAnswer } = useFieldArray({
    control,
    name: `questions.${questionIndex}.answers`,
  });

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Question {questionIndex + 1}</h3>
      <TextInput
        label="Question Title"
        register={register(`questions.${questionIndex}.title`, { required: true })}
        className="mb-2"
      />
      <TextArea
        label="Question Description"
        register={register(`questions.${questionIndex}.description`)}
        className="mb-4"
      />

      {answers.map((_, aIndex) => (
        <AnswerInput
          key={aIndex}
          questionIndex={questionIndex}
          answerIndex={aIndex}
          onDelete={() => removeAnswer(aIndex)}
        />
      ))}

      <Button
        label="Add Answer"
        onClick={() => appendAnswer({ title: '', isCorrect: false, description: '' })}
        className="mb-4"
      />
      <Button
        label="Delete Question"
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-700 mt-2 mx-5"
      />
    </div>
  );
};

export default QuestionInput;
