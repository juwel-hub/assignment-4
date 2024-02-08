function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number";
  }
  const ticketPrice = 120;
  const daroanSslary = 500;
  const stafSalary = 50 * 8;
  const totalcost = daroanSslary + stafSalary;
  let profit = ticketSale * ticketPrice - totalcost;
  return profit;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const word = "a, y, i, e, o, u, w";
  let wordArr = word.split(", ");

  if (wordArr.includes(name[name.length - 1].toLowerCase())) {
    return "Good Name";
  }
  return "Bad Name";
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!isNaN(element) && typeof element === "number") {
      result.push(element);
    }
  }

  return result;
}

function password(obj) {
  if (obj.birthYear.toString().length < 4) {
    return "invalid";
  }
  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;

  const firstLetter = siteName.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = siteName.slice(1);
  const capitalizeWord = firstLetterCap + remainingLetters;

  const password = capitalizeWord + "#" + name + "@" + birthYear;

  return password;
}

function monthlySavings(incomes, livingCost) {
  console.log();
  if (
    (!incomes || !livingCost || !Array.isArray(incomes),
    typeof livingCost !== "number")
  ) {
    return "invalid input";
  }
  let totalIncome = 0;
  incomes.forEach((income) => {
    if (income >= 3000) {
      const tax = (income / 100) * 20;
      const afterTax = income - tax;
      totalIncome += afterTax;
    } else {
      totalIncome += income;
    }
  });
  const savings = totalIncome - livingCost;

  if (savings < 0) {
    return "earn more";
  } else {
    return savings;
  }
}
