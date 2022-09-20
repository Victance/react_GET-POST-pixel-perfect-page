export interface INewUser {
  name: string,
  email: string,
  phone: string,
  position_id: number | null,
  photo: File | null,
}