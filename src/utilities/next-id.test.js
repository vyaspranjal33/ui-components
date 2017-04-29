import nextId, { resetId } from './next-id';

describe('nextId', () => {
  it('should return 1 the first time it is called', () => {
    expect(nextId()).toBe(1);
  });

  it('should return 2 the secone time it is called', () => {
    expect(nextId()).toBe(2);
  });
});

describe('resetId', () => {
  it('should reset nextId() to 1', () => {
    nextId();
    nextId();
    resetId();

    expect(nextId()).toBe(1);
  });
});
