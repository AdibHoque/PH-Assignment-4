// Help The Zoo Manager
function calculateMoney(ticketSale) {
  if (!(typeof ticketSale == "number") || ticketSale <= 0) return "Invalid Input, ticket sales needs to be greater than 0.";
  const revenue = ticketSale * 120;
  const expenses = 500 + (50 * 8);
  return revenue - expenses;
}

// Good Name , Bad Name
function checkName(name) {
  if (!(typeof name == "string")) return "Invalid Name";
  const goodEndings = ["a", "y", "i", "e", "o", "u", "w"];
  if (goodEndings.includes(name.toLowerCase().slice(-1))) return "Good Name";
  else return "Bad Name";
}

// Virus in my Array
function deleteInvalids(array) {
  if (!(Array.isArray(array))) return "Invalid Input, the input must be an Array";
  let virusFreeArr = [];
  array.forEach(arr => {
    if (typeof arr == "number" && !isNaN(arr)) virusFreeArr.push(arr);
  });
  return virusFreeArr;
}

// Make A Great Password
function password(obj) {
  if (!(typeof obj == "object") || !obj.name || !obj.siteName || !obj.birthYear || !(typeof obj.birthYear == "number") || !(obj.birthYear.toString().length == "4")) return "invalid";
  else return obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;
}

//Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {
  if (!(Array.isArray(arr)) || !(typeof livingCost == "number")) return "invalid input";
  let totalIncome = 0;
  arr.forEach(a => {
    if (!(typeof a == "number")) return "invalid input";
    if (a >= 3000) totalIncome += a * 0.8;
    else totalIncome += a;
  }
  )
  const savings = totalIncome - livingCost >= 0 ? totalIncome - livingCost : "earn more";
  return savings;
}