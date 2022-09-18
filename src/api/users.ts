import { PositionResponse } from "../types/PositionResponse";
import { UsersPagination } from "../types/UsersPagination";

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsersPagination = (count: number): Promise<UsersPagination> => {
  return fetch(`${BASE_URL}/users?count=${count}`)
    .then(response => response.json());
};

export const getPositions = (): Promise<PositionResponse> => {
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