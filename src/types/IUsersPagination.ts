import { IUser } from "./IUser";

export interface IUsersPagination {
  total_users: number,
  users: IUser[],
}