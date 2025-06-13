import crypto from 'crypto'

export function generateState() {
  return crypto.randomBytes(Math.ceil(16 / 2)).toString('hex').slice(0, 16);
}
