import { useEffect, useState } from "react"
import { getUsersPagination } from "../../api/users";
import { User } from "../../types/User";
import { Button } from "../Button/Button"
import { UserItem } from "../UserItem/UserItem";
import './UserList.scss'

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [count, setCount] = useState(6);
  const [total_users, setTotalUsers] = useState(0);

  useEffect(() => {
    getUsersPagination(count).then(data => 
      {
        setTotalUsers(data.total_users)
        
        setUsers(data.users.sort((user1, user2) => (
        user1.registration_timestamp - user2.registration_timestamp
        )))
      }
    )
  }, [count])

  const increaseCount = () => {
    setCount(count => count + 6)
  };

  return (
    <section className="UserList">
      <h2 className="subtitle UserList__subtitle" >
        Working with GET request
      </h2>

      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}

      {total_users > count && (
        <Button
          isWider={true}
          clickHandler={increaseCount}
        >
          Show more
        </Button>
      )}
    </section>
  )
}