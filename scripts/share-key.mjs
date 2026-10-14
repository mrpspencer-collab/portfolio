import { createHmac } from 'crypto';

// The share-link key for a locked page. It comes from the site password and
// the page's slug, so it stays the same across builds and is different for each
// page, without revealing the password.
export function shareKeyFor(password, slug) {
  return createHmac('sha256', password).update(`share:${slug}`).digest('base64url').slice(0, 22);
}

// Share keys are already random, so they need far fewer PBKDF2 rounds than a password.
export const PASSWORD_ITERATIONS = 200000;
export const SHARE_ITERATIONS = 1000;
