export type Answer = {
    title: string;
    isCorrect: boolean;
    description?: string;
  };
  
  export type Question = {
    title: string;
    answers: Answer[];
    description?: string;
  };
  
  export type Exam = {
    title: string;
    questions: Question[];
    description?: string;
  };
  

  export interface ActionButtonProps {
    label: string;
    onClick?: () => void;
    href?: string;
    className?: string;
  }

  export interface ExamListItemProps {
    exam: Exam;
    index: number;
    onDelete: (index: number) => void;
  }

 export interface TextInputProps {
    label: string;
    placeholder?: string;
    register: any; 
    required?: boolean;
    className?: string;
  }


export interface TextAreaProps {
    label: string;
    placeholder?: string;
    register: any; 
    className?: string;
  }


  export interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
  }
  

 export interface AnswerInputProps {
    questionIndex: number;
    answerIndex: number;
    onDelete: () => void;
  }


 export interface QuestionInputProps {
    questionIndex: number;
    onDelete: () => void;
  }

  export interface AnswerInputProps {
    questionIndex: number;
    answerIndex: number;
    onDelete: () => void;
  }