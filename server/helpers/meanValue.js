const meanValue = (values) =>
  values.reduce((accumulator, currentValue) => accumulator + currentValue) /
  values.length;

module.exports = meanValue;
