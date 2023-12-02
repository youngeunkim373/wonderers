import jwt from 'jsonwebtoken';

// Generate an access token
export function generateAccessToken(userId: string, expiresIn: string): string {
  const randomUserId = new Date().getTime().toString();
  const token = jwt.sign({ userId }, randomUserId, { expiresIn: expiresIn });

  return token;
}

const secretKey = 'your_secret_key';

// Generate a refresh token
export function generateRefreshToken(userId: string, expiresIn: string): string {
  const refreshToken = jwt.sign({ userId }, secretKey, { expiresIn });

  return refreshToken;
}

// Verify a refresh token
export function verifyRefreshToken(refreshToken: string) {
  const decoded = jwt.verify(refreshToken, secretKey);

  return decoded as { userId: string; exp: number };
}
