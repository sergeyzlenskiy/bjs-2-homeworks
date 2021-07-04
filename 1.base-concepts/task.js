"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let D = b ** 2 - 4 * a * c;
  if (D === 0) {
    arr[0] = -b/(2*a);
  } else if (D > 0) {
    arr[0] = (-b + Math.sqrt(D))/(2*a);
    arr[1] = (-b - Math.sqrt(D))/(2*a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  let indicator,  //Переменная, указывающая на то, какой параметр введен неверно
      parameterValue;
  if (typeof percent === 'string') {
    percent = +percent;
    parameterValue = percent;
    indicator = 'Процентная ставка';
  } else if (typeof contribution === "string") {
    contribution = +contribution;
    parameterValue = contribution;
    indicator = 'Начальный взнос';
  } else if (typeof amount === 'string'){
    amount = +amount;
    parameterValue = amount;
    indicator = 'Общая стоимость';
  }
  if ((typeof arguments !== 'number') && (typeof arguments !== 'string')) {
    console.log(`Параметр ${indicator} содержит неправильное значение ${parameterValue}`);
  }
  let currentDate = new Date();
  let countOfMonth = ((date.getMonth() - currentDate.getMonth())+(12*(date.getFullYear()-currentDate.getFullYear())));
  //console.log(currentDate, date, countOfMonth);
  let percentRate = percent / 100; 
  let monthPercentRate = percentRate / 12;
  let loanBody = amount - contribution;
  let amountPerMonth = loanBody * (monthPercentRate + (monthPercentRate / (((1 + monthPercentRate) ** countOfMonth) - 1)));
  totalAmount = amountPerMonth * countOfMonth;
  totalAmount = Math.round(totalAmount * 100) / 100;
  console.log(totalAmount);
  return totalAmount;
}
