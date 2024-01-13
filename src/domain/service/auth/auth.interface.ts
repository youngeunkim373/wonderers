export interface LoginBodyDTO {
  id: string;
  pw: string;
}

export interface ExtendSessionData {
  accessToken: string;
  refreshToken: string;
}
