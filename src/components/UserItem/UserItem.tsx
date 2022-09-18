import './UserItem.scss';
import { User } from "../../types/User";

type Props = {
  user: User;
};

export const UserItem:React.FC<Props> = ({ user }) => {
  const {name, email, phone, position, photo} = user;

  const displayedName = name.length > 35
  ? name.slice(0,32) + '...'
  : name

  return (
    <article className='UserItem'>
      <img 
        src={photo} 
        alt={displayedName}
        className="UserItem__photo"
      />

      <p className='UserItem__name'>
        {displayedName}
      </p>

      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </article>
  )
}