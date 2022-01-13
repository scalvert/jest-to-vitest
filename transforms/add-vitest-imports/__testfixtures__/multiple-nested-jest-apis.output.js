import { beforeEach, afterEach, it, expect, describe } from 'vitest';
describe('foo', () => {
  beforeEach(() => {
    initializeCityDatabase();
  });

  afterEach(() => {
    disposeCityDatabase();
  });

  it('can describe a test', () => {
    expect(isCity('San Francisco')).toBeTruthy();
  });
});
