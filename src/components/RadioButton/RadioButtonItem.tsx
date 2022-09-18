import './RadioButtonItem.scss';

type Props = {
  name: string
}

export const RadioButtonItem:React.FC<Props> = ({ name }) => {
  return (

<section className='RadioButtonItem'> 
    <input 
      type="radio" 
      name="styles" 
      id="box-shadow" 
      className="custom-radio RadioButtonItem__input" 
    />
    <label>
      {name}
    </label>
</section>
  )
}

    {/* <p className='RadioButton'>
      <input 
        type="radio" 
        name='position'
        className='RadioButton__input'
      />
      
      <label> 
        {name}
      </label>
    </p> */}