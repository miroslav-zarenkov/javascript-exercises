const ftoc = function(fahr) {
  let cels = parseFloat(((fahr - 32) * 5/9).toFixed(1));
  return cels;
};

const ctof = function(cels) {
  let fahr = parseFloat(((cels * 9/5) + 32).toFixed(1));
  return fahr;
};

module.exports = {
  ftoc,
  ctof
};
