export interface IUser {
  id: string,
  name: string,
  email: string,
  phone: string,
  position: string | number | null,
  registration_timestamp: number,
  photo: string | File | null,
}