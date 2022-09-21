import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import { addUser } from '../../api/users';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Loader } from '../Loader/Loader';
import { RadioButtons } from '../RadioButtons/RadioButtons';
import { Upload } from '../Upload/Upload';
import './NewUser.scss';

type Props = {
  displayUsers: (value: number) => void;
};

const errorObj = {
  name: false,
  email: false,
  phone: false,
  photo: false,
};

const regexEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const regexPhone = /^[+]{0,1}380([0-9]{9})$/;

export const NewUser:React.FC<Props> = ({ displayUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position_id, setPositionId] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [errors, setErrors] = useState(errorObj);
  const [isLoaded, setLoaded] = useState(true);
  const [isUploadSuccessful, setUpload] = useState(false);

  const handleNameChange = (value: string) => {
		setName(value);

		setErrors({
			...errors,
			name: (value.length < 2 || value.length > 60) ? true : false,
		})
	};

	const handleEmailChange = (value: string) => {
		setEmail(value);

		setErrors({
			...errors,
			email: (!regexEmail.test(value)) ? true : false,
		})
	};

	const handlePhoneChange= (value: string) => {
		setPhone(value);

		setErrors({
			...errors,
			phone: (!regexPhone.test(value)) ? true : false,
		})
	};

  const handlePhotoChange = (photo: File) => {
		setPhoto(photo);

		setErrors({
			...errors,
			photo: photo.size > 5242880 ? true : false,
		})

		if (!photo.name.slice(-4).toLowerCase().includes('jpg')
		&& !photo.name.slice(-4).toLowerCase().includes('jpeg')) {
			setErrors({
				...errors,
				photo: true,
			})
		} else {
			setErrors({
				...errors,
				photo: false,
			})
		}
	};

  const areInputsEmpty = !name || !email || !phone || !position_id || !photo;

  const areInputsInvalid = errors.name || errors.email || errors.phone || errors.photo;

  const isDisabled = areInputsEmpty || areInputsInvalid;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoaded(false);

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', position_id);
    formData.append('photo', photo as Blob);

    await addUser(formData)
      .then(data => {
        setUpload(true)
      })
      .catch((error) => {
        alert(error)
      })
      .finally(() => {
        setLoaded(true);
      })

    setName('');
    setEmail('');
    setPhone('');
    setPositionId('');
    setPhoto(null);

    displayUsers(6);
  };

  return (
    <section className='NewUser' id='NewUser'>
      <h2 className="subtitle UserList__subtitle" >
        {isUploadSuccessful
          ? (
            'User successfully registered'
          ) : (
            'Working with POST request'
          )
        } 
      </h2>

      {isUploadSuccessful
        ? (
          <div className="successImage" />
        ) : (
          <form 
            className='NewUser__form'
            onSubmit={handleSubmit}
          >
          <Input 
            type='text'
            placeholder='Your name'
            value={name}
            handleChange={handleNameChange}
            errorMessage='Please enter a correct name'
            hasError={errors.name}
          />
  
          <Input 
            type='email'
            placeholder='Email'
            value={email}
            handleChange={handleEmailChange}
            errorMessage='Please enter a correct email'
            hasError={errors.email}
          />
  
          <Input 
            type="tel"
            placeholder='Phone'
            value={phone}
            handleChange={handlePhoneChange}
            errorMessage='Please enter a correct phone number'
            hasError={errors.phone}
          />
  
          <RadioButtons 
            position_id={position_id}
            handleChange={setPositionId}
          />
          
          <div className="UploadContainer">
            <Upload 
              photo={photo}
              handleChange={handlePhotoChange}
              hasError={errors.photo}
              errorMessage='Please upload a correct photo'
            />
          </div>
  
          {isLoaded
            ? (        
            <Button isDisabled={isDisabled} >
              Sign up
            </Button>
            ) : (
              <Loader />
            )
          }
          </form>
        )}

    </section>
  )
}