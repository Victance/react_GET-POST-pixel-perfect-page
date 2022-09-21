import { useEffect, useState } from "react"
import { getUsersPagination } from "../../api/users";
import { IUser } from "../../types/IUser";
import { Button } from "../Button/Button"
import { Loader } from '../Loader/Loader';
import { UserItem } from "../UserItem/UserItem";
import './UserList.scss'

type Props = {
  count: number;
  increaseCount: () => void;
  users: IUser[];
  total_users: number;
  isLoaded: boolean;
}

export const UserList:React.FC<Props> = ({ 
  count, increaseCount, users, total_users, isLoaded
}) => {
  return (
    <section className="UserList" id="UserList">
      <h2 className="subtitle UserList__subtitle" >
        Working with GET request
      </h2>

      {isLoaded
       ? (
        <>
          <div className="UserList__container">
            {users.map(user => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
          

          {total_users > count && (
            <Button
              isWider={true}
              clickHandler={increaseCount}
            >
              Show more
            </Button>
          )}
        </>
       ) : (
        <Loader />
       )}
    </section>
  )
}