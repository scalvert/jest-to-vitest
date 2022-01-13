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
