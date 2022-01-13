import { test, expect } from 'vitest';
test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});
