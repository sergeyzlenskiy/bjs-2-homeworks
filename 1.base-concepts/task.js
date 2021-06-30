"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr = -b/(2*a);
  } else {
    arr[0] = (-b + Math.sqrt(D))/(2*a);
    arr[1] = (-b - Math.sqrt(D))/(2*a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  // let period;
  // let realTime = new Date().toLocaleDateString();
  // realTime = +realTime;
  // let monthToPay = date.getMonth();
  // let yearToPay = date.getYear();
  // console.log(monthToPay, yearToPay, period, realTime);
  // let percentRate = percent / 100; 
  // let monthPercentRate = percentRate / 12;
  // let loanBody = amount - contribution;
  // let amountPerMonth = loanBody * (monthPercentRate + (monthPercentRate / (((1 + monthPercentRate) ** period) - 1)));
  // totalAmount = amountPerMonth * date;
  // console.log(percentRate, monthPercentRate,date,  loanBody, amountPerMonth,totalAmount, date);
  return totalAmount;
}
