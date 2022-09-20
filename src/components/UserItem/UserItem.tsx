import './UserItem.scss';
import { IUser } from "../../types/IUser";

type Props = {
  user: IUser;
};

export const UserItem:React.FC<Props> = ({ user }) => {
  const {name, email, phone, position, photo} = user;

  const displayedName = name.length > 35
  ? name.slice(0,32) + '...'
  : name

  const displayedEmail = email.length > 35
  ? email.slice(0,25) + '...' + email.slice(-10)
  : email

  return (
    <article className='UserItem'>
      <img 
        src={typeof photo === 'string'
          ? photo
          : ''
        } 
        alt={displayedName}
        className="UserItem__photo"
      />

      <p className='UserItem__name'>
        {displayedName}
      </p>

      <p>{position}</p>
      <p>{displayedEmail}</p>
      <p>{phone}</p>
    </article>
  )
}