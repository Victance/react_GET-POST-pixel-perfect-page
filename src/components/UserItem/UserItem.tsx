import './UserItem.scss';
import { IUser } from "../../types/IUser";
import dummyPhoto from "../../images/dummy.jpg"

type Props = {
  user: IUser;
};

export const UserItem:React.FC<Props> = ({ user }) => {
  const {name, email, phone, position, photo} = user;

  const displayedName = name.length > 25
    ? name.slice(0,22) + '...'
    : name

  const displayedEmail = email.length > 25
    ? email.slice(0,15) + '...' + email.slice(-10)
    : email

  return (
    <article className='UserItem'>
      <img 
        src={typeof photo === 'string'
          ? photo
          : dummyPhoto
        } 
        alt={displayedName}
        className="UserItem__photo"
        loading="lazy"
      />

      <p className='UserItem__name' title={name}>
        {displayedName}
      </p>

      <p>{position}</p>
      <a 
        href={`mailto:${email}`} 
        className='UserItem__email'
        data-title={email}
      > 
        {displayedEmail} 
      </a>
      <p>{phone}</p>
    </article>
  )
}