import jwt from 'jsonwebtoken';
import { CustomError } from '../common/custonError';

const secretKey = 'your_secret_key';

// Generate an access token
export function generateAccessToken(userId: string, expiresIn: string): string {
  const randomUserId = new Date().getTime().toString();
  const token = jwt.sign({ userId }, randomUserId, { expiresIn: expiresIn });
  return token;
}

// Generate a refresh token
export function generateRefreshToken(userId: string, expiresIn: string): string {
  const refreshToken = jwt.sign({ userId }, secretKey, { expiresIn });
  return refreshToken;
}

type verifyRefreshTokenFunc = (refreshToken: string) => jwt.JwtPayload | undefined;

export const verifyRefreshToken: verifyRefreshTokenFunc = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, secretKey);
    return decoded as jwt.JwtPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      if (error.name === 'TokenExpiredError') {
        console.log('토큰이 만료되었습니다.');
        throw new CustomError(403, '토큰이 만료되었습니다.');
      } else {
        console.error('토큰 검증 중 오류 발생:', error.message);
        throw new CustomError(401, '인증되지 않았습니다.');
      }
    }
  }
};
