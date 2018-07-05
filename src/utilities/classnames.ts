export default function classNames(...args: Array<any>): string {
  // Create a hashmap of classnames so that they are not duplicated
  let result: {
    [key: string]: boolean;
  } = {};

  for (const arg of args) {
    if (!arg) {
      continue;
    }

    if (typeof arg === 'string' || typeof arg === 'number') {
      result[`${arg}`] = true;
      continue;
    }

    if (Array.isArray(arg)) {
      const deduped = {};
      classNames(...arg)
        .split(' ')
        .forEach(key => {
          deduped[key] = true;
        });
      result = { ...result, ...deduped };
      continue;
    }

    if (typeof arg === 'object') {
      const keys = Object.keys(arg);
      for (const key of keys) {
        if (arg[key]) {
          result[`${key}`] = true;
        }
      }
    }
  }

  return Object.keys(result).join(' ');
}
