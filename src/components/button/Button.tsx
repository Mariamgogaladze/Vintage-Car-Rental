import './button.css'

interface ButtonProps {
  text: string;
  onButtonClick? : () => void;
  disabled?: boolean;
  }
function Button({text ,onButtonClick}: ButtonProps) {
  return (
    <button onClick={onButtonClick} className='button-com'>{text}</button>
  )
}

export default Button