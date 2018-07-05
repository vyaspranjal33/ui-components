import classNames from './classnames';

describe('classNames', () => {
  it('keeps object keys with truthy values', () => {
    expect(
      classNames({
        a: true,
        b: false,
        c: 0,
        d: null,
        e: undefined,
        f: 1,
      })
    ).toBe('a f');
  });

  it('joins arrays of class names and ignore falsy values', () => {
    expect(classNames('a', 0, null, undefined, true, 1, 'b')).toBe('1 a b');
  });

  it('disregards duplicate class names', () => {
    expect(classNames('a', 0, null, 'a', 'c', 1, 'b')).toBe('1 a c b');
  });

  it('supports heterogenous arguments', () => {
    expect(classNames({ a: true }, 'b', 0)).toBe('a b');
  });

  it('should be trimmed', () => {
    expect(classNames('', 'b', {}, '')).toBe('b');
  });

  it('returns an empty string for an empty configuration', () => {
    expect(classNames({})).toBe('');
  });

  it('supports an array of class names', () => {
    expect(classNames(['a', 'b'])).toBe('a b');
  });

  it('joins array arguments with string arguments', () => {
    expect(classNames(['a', 'b'], 'c')).toBe('a b c');
    expect(classNames('c', ['a', 'b'])).toBe('c a b');
  });

  it('handles multiple array arguments', () => {
    expect(classNames(['a', 'b'], ['c', 'd'])).toBe('a b c d');
  });

  it('handles arrays that include falsy and true values', () => {
    expect(classNames(['a', 0, null, undefined, false, true, 'b'])).toBe('a b');
  });

  it('handles arrays that include arrays', () => {
    expect(classNames(['a', ['b', 'c']])).toBe('a b c');
  });

  it('handles arrays that include objects', () => {
    expect(classNames(['a', { b: true, c: false }])).toBe('a b');
  });

  it('handles deep array recursion', () => {
    expect(classNames(['a', ['b', ['c', { d: true }]]])).toBe('a b c d');
  });

  it('handles arrays that are empty', () => {
    expect(classNames('a', [])).toBe('a');
  });

  it('handles nested arrays that have empty nested arrays', () => {
    expect(classNames('a', [[]])).toBe('a');
  });

  it('handles all types of truthy and falsy property values as expected', () => {
    expect(
      classNames({
        emptyList: [],
        emptyObject: {},
        emptyString: '',
        false: false,
        function: Object.prototype.toString,
        greaterZero: 1,
        negativeZero: -0,
        noNumber: NaN,
        nonEmptyList: [1, 2, 3],
        nonEmptyObject: { a: 1, b: 2 },
        nonEmptyString: 'foobar',
        null: null,
        undefined,
        whitespace: ' ',
        zero: 0,
      })
    ).toBe(
      'emptyList emptyObject function greaterZero nonEmptyList nonEmptyObject nonEmptyString whitespace'
    );
  });
});
