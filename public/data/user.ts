const USER_DATA = 'USER';

export type CountryType = 'ko' | 'en';

interface User {
  id: string;
  pw: string;
  name: string;
  country: CountryType;
  refreshToken: string | null;
}

export const dataUser: User[] = [
  {
    id: 'user1@gmail.com',
    pw: '1234',
    name: 'lee',
    country: 'ko',
    refreshToken: null,
  },
  {
    id: 'user2@gmail.com',
    pw: '1234',
    name: 'choi',
    country: 'ko',
    refreshToken: null,
  },
  {
    id: 'user3@gmail.com',
    pw: '1234',
    name: 'kim',
    country: 'ko',
    refreshToken: null,
  },
];
