function getCurrentYear() {
  return new Date().getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = getCurrentYear();

  return {
    [`income-${year}`]: income,
    [`gdp-${year}`]: gdp,
    [`capita-${year}`]: capita,
  };
}

