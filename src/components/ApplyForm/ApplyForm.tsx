import { useState } from 'react';
import { Button } from '../Button/Button';
import { RadioButtons } from '../RadioButtons/RadioButtons';
import { Upload } from '../Upload/Upload';
import './ApplyForm.scss';
import { useForm } from "react-hook-form";

type Props = {
};

export const ApplyForm:React.FC<Props> = () => {
  const [isDisabled] = useState(true);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);
  
  return (
    <section className='ApplyForm'>
      <h2 className="subtitle UserList__subtitle" >
        Working with POST request
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          className='ApplyForm__field'
          placeholder='Your name'
          {...register("firstName", { required: true })}
        />
        {errors.firstName?.type === 'required' && (
          <div>Hey</div>
        )}
        
        <input 
          type="email" 
          className='ApplyForm__field'
          placeholder='Email'
        />
        <input 
          type="tel" 
          className='ApplyForm__field'
          placeholder='Phone'
        />

        <RadioButtons />
        
        <Upload />

        <Button 
          isDisabled={isDisabled} 
        >
          Sign up
        </Button>
      </form>
    </section>
  )
}