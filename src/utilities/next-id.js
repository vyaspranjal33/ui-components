// @flow

let id = 1;

const nextId = (): number => id++;

const resetId = (): void => {
  id = 1;
};

export default nextId;
export { resetId };
