

require('raf/polyfill');
const ReactDOM = require('react-dom');
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
    return element
  })
})

afterEach(() => {
  ReactDOM.createPortal.mockClear()
})
