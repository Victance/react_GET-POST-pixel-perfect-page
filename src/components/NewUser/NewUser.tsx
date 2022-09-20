import { useState } from 'react';
import { addUser } from '../../api/users';
import { Button } from '../Button/Button';
import { RadioButtons } from '../RadioButtons/RadioButtons';
import { Upload } from '../Upload/Upload';
import './NewUser.scss';

type Props = {
};

export const NewUser:React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position_id, setPositionId] = useState<number | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  
  const isDisabled = !name || !email || !phone || !position_id || !photo;
  
  const newUser = {
    email,
    name,
    phone, 
    position_id, 
    photo,
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log(newUser);

    // var formData = new FormData();

    // formData.append('name', 'John');
    // formData.append('email', 'Jhon@gmail.com');
    
    await addUser(newUser);

    // setName('');
    // setEmail('');
    // setPhone('');
    // setPositionId(null);
    // setPhoto(null);
  };

  return (
    <section className='NewUser'>
      <h2 className="subtitle UserList__subtitle" >
        Working with POST request
      </h2>

      <form 
        className='NewUser__form'
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          className='NewUser__field'
          placeholder='Your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input 
          type="email" 
          className='NewUser__field'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="tel" 
          className='NewUser__field'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <RadioButtons 
          position_id={position_id}
          handleChange={setPositionId}
        />
        
        <div className="UploadContainer">
          <Upload 
            photo={photo}
            handleChange={setPhoto}
          />
        </div>


        <Button 
          isDisabled={isDisabled} 
        >
          Sign up
        </Button>
      </form>
    </section>
  )
}