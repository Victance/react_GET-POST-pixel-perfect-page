import classNames from 'classnames';
import { PropsWithChildren } from 'react'
import './Button.scss'

interface CustomProps {
  clickHandler?: () => void;
  isWider?: boolean;
  isDisabled?: boolean;
}

type Props = PropsWithChildren<CustomProps>

export const Button:React.FC<Props> = ({ isDisabled, isWider, clickHandler, children }) => {
  return (
      <button
        onClick={clickHandler} 
        className={classNames('Button', {
          'Button--wider' : isWider,
          'Button--disabled' : isDisabled,
        })} 
      >
          {children}
      </button>
  )
}