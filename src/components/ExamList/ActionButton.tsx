import { ActionButtonProps } from '@/types/Interfaces/interfaces';
import React from 'react';



const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, href, className = '' }) => {
  const baseClass =
    'font-bold py-2 px-4 rounded-lg inline-block mb-6 text-white';

  const combinedClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {label}
    </button>
  );
};

export default ActionButton;
