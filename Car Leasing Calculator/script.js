const carType = document.getElementById("carType");
const carValue = document.getElementById("carValue");
const carValueRange = document.getElementById("carValueRange");
const leasePeriod = document.getElementById("leasePeriod");
const downPayment = document.getElementById("downPayment");
const downPaymentRange = document.getElementById("downPaymentRange");
const leasingCost = document.getElementById("leasingCost");
const downPaymentAmount = document.getElementById("downPaymentAmount");
const monthlyInstallment = document.getElementById("monthlyInstallment");
const interestRate = document.getElementById("interestRate");

const calculateLease = () => {
  //Retrieve user input
  const value = parseFloat(carValue.value);
  const period = parseInt(leasePeriod.value);
  const downPaymentPercentValue = parseInt(downPayment.value);
  // Calculate down payment amount based on selected percentage
  // Down payment formula
  const downPaymentAmountValue = value * (downPaymentPercentValue / 100);

  const isBrandNew = carType.value === "new";
  const annualInterestRate = isBrandNew ? 2.99 : 3.7;
  const monthlyInterestRate = annualInterestRate / 12 / 100;

  const loanAmount = value - downPaymentAmountValue;

  //monthlyInstallmentValue is determined using the annuity formula
  const monthlyInstallmentValue =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -period));

  const totalLeaseCost = monthlyInstallmentValue * period;

  //Update the output display
  leasingCost.textContent = `€${totalLeaseCost.toFixed(2)}`;
  downPaymentAmount.textContent = `€${downPaymentAmountValue.toFixed(2)}`;
  monthlyInstallment.textContent = `€${monthlyInstallmentValue.toFixed(2)}`;
  interestRate.textContent = `${annualInterestRate.toFixed(2)}%`;
};

carValue.addEventListener("input", (e) => {
  carValueRange.value = e.target.value;
  calculateLease();
});

carValueRange.addEventListener("input", (e) => {
  carValue.value = e.target.value;
  calculateLease();
});

leasePeriod.addEventListener("input", (e) => {
  leasePeriod.value = e.target.value;
  calculateLease();
});

downPayment.addEventListener("input", (e) => {
  downPaymentRange.textContent = `${e.target.value}%`;
  calculateLease();
});

downPaymentRange.addEventListener("input", (e) => {
  downPayment.value = e.target.value;
  calculateLease();
});

carType.addEventListener("change", calculateLease);

calculateLease();
