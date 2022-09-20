import './RadioButtonItem.scss';

type Props = {
  position_id: number | null;
  name: string;
  value: number;
  handleChange: (value: number) => void;
}

export const RadioButtonItem:React.FC<Props> = ({ position_id, name, value, handleChange }) => {
  return (

<section className='RadioButtonItem'> 
    <input 
      type="radio" 
      name="position"
      value={value}
      checked={position_id !== null && position_id === value}
      className="RadioButtonItem__input"
      onChange={() => handleChange(value)}
    />
    <label>
      {name}
    </label>
</section>
  )
}
