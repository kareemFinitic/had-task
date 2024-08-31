import { TextAreaProps } from '@/types/Interfaces/interfaces';
import React from 'react';
const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, register, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <textarea
        {...register}
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-zinc-50 text-gray-700"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
