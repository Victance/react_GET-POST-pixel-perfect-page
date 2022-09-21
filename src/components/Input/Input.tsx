import classNames from 'classnames';
import './Input.scss';

type Props = {
  type: string;
  value: string;
  placeholder: string;
  handleChange: (value: string) => void;
  errorMessage: string;
  hasError: boolean;
};

export const Input:React.FC<Props> = ({ 
  type, value, placeholder, handleChange, errorMessage, hasError
}) => {

  return (
    <>
      <input 
        type={type} 
        className={classNames('Input', {
          'Input--hasError' : hasError,
        })}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}

      />

      <div className="Error">
        {hasError && (
          <p className='Error__Message'>
            {errorMessage}
          </p>
        )}
      </div>
    </>
  )
}

// onChange={(e) => setUserData(e.target.value)}
// onBlur={() => {
//   if(userData.match(pattern)) {
//     handleChange(userData);
//     setError(false);
//   } else {
//     setError(true)
//   }
// }}