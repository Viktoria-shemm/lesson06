// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  const result = arr.reduce((sum, check) => {
    return sum + check;
  }, 0);
  return Math.floor(result / arr.length);
};

console.log(getAverageValue(allCashbox));
