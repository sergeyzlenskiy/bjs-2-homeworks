 function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  return function wrapper(...args) {
    let hash = 0;
    //console.log(args);
    for (let item of args) {
      hash += item;
    }
    let idx = cache.findIndex((item) => item === hash);
    //console.log(hash, idx);
    if (idx !== -1) {
      console.log('Из кэша: ' + cache[idx]);
      //console.log(cache);
      return "Из кэша: " + cache[idx];
    } else {
      let result = func.call(this, ...args);
      cache.push(result);
      if (cache.length > 5) {
        cache.shift();
      }
      console.log(cache);
      console.log('Вычисляем: ' + result);
      return "Вычисляем: " + result;
    }
  };
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout;
  
  return function (...args) {
    clearTimeout(timeout);
    func.apply(this, args);
    timeout = setTimeout(() => {

    }, ms);
  
  };
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично


function debounceDecorator2(func) {
  // Ваш код
}
