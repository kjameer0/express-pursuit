//check if all chars in a string are uppercase
//input type ==== string
//boolean
function checkIsUppercase(str) {
  if (/\s/.test(str)) {
    return false;
  }
  if (str.length === 0) {
    return false;
  }
  if (typeof str !== "string") {
    return false;
  }
  return /[A-Z]/g.test(str);
}

module.exports = checkIsUppercase;
