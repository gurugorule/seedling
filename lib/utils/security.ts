import { createHash, randomBytes } from 'crypto';

export function generateApiKey(): string {
  return `sk_${randomBytes(32).toString('hex')}`;
}

export function hashContent(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

export function generateTwoFactorSecret(): string {
  return randomBytes(20).toString('hex');
}

export function validateApiKey(apiKey: string): boolean {
  return /^sk_[a-f0-9]{64}$/.test(apiKey);
}