
import { INewUser } from "../types/INewUser";
import { IPositionResponse } from "../types/IPositionResponse";
import { IToken } from "../types/IToken";
import { IUser } from "../types/IUser";
import { IUsersPagination } from "../types/IUsersPagination";

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsersPagination = (count: number): Promise<IUsersPagination> => {
  return fetch(`${BASE_URL}/users?count=${count}`)
    .then(response => response.json());
};

export const getToken = (): Promise<IToken> => {
  return fetch(`${BASE_URL}/token`)
    .then(response => response.json());
};

export const addUser = async (newUser: INewUser) => {
  const token = await getToken().then(data => data.token);
  
  return fetch(`${BASE_URL}/users`, { 
    method: 'POST', 
    headers: { 'Token': token },
    body: JSON.stringify(newUser), 
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // console.log(result);
  
  // return result;
}


export const getPositions = (): Promise<IPositionResponse> => {
  return fetch(`${BASE_URL}/positions`)
    .then(response => response.json());
};

// export const getUsersPagination = (count: number): Promise<UsersPagination> => {
//   getData()
//     .then(data => data.users.sort();
// };

// export const getUsers = (count: number): Promise<UsersPagination> => {
//   return fetch(`${BASE_URL}/users?count=${count}`)
//     .then(response => response.json());
// };