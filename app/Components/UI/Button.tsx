import { ButtonProps } from '@/@types';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props?.onClick}
      className={`${props.className} px-3 py-2 rounded-lg hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700`}
      type={props?.type}
      title={props.title}
      disabled={props?.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
