const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

require('jquery');
require('select2')(); // invoke to make sure to add select2 to jQuery.fn
