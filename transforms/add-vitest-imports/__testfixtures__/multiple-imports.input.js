import { isCity } from './cities';

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});
