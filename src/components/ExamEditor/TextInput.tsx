import { TextInputProps } from '@/types/Interfaces/interfaces';
import React from 'react';



const TextInput: React.FC<TextInputProps> = ({ label, placeholder, register, required, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        {...register}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-zinc-50"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextInput;
