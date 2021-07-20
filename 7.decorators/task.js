 function cachingDecoratorNew(func) {
   // Ваш код
   // let cache = [];
   // let cache1 = [];
   // return function wrapper(...args) {
   //   let hash = '';
   //   let joinedArgs = args.join('');
   //   //console.log(joinedArgs);
   //   for (let item of args) {
   //     hash += item;
   //   }
   //   let idx = cache1.findIndex((item) => item.join('') === joinedArgs);
   //   //console.log(cache, args, idx);
   //   if (idx !== -1) {
   //     console.log('Из кэша: ' + cache[idx]);
   //     //console.log(cache);
   //     return "Из кэша: " + cache[idx];
   //   } else {
   //     let result = func.call(this, ...args);
   //     cache1.push(args);
   //     cache.push(result);
   //     if (cache.length > 5) {
   //       cache.shift();
   //       cache1.shift();
   //     }
   //     console.log(cache);
   //     console.log('Вычисляем: ' + result);
   //     return "Вычисляем: " + result;
   //   }
   // };
 }


 // function debounceDecoratorNew(func, ms) {
 //   // Ваш код
 //   let timeout;

 //   return function (...args) {

 //     timeout = setTimeout(() => {
 //       console.time("time");
 //       func.apply(this, args);
 //       clearTimeout(timeout);
 //       console.timeEnd("time");
 //     }, ms);

 //   };
 // }


 // ZADACHA 2



 function debounceDecoratorNew(func, ms) {
   let timeout;
   let immediate = true;
   return function (...args) {
     clearTimeout(timeout);
     if (immediate) {
       func.apply(this, args);
     }
     immediate = false;
     timeout = setTimeout(() => {
       func.apply(this, args);
     }, ms);
   };
 }

 //ZADACHA 3


 function debounceDecorator2(func) {
   // Ваш код
   function wrapper(...args) {
     wrapper.count++;
     return func.apply(this, args);
  }
 wrapper.count = 0;

 return wrapper;
 }


 const sendSignal = () => console.log("Сигнал отправлен");
 const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
 const x = debounceDecorator2(debounceDecoratorNew);
 setTimeout(upgradedSendSignal); // Сигнал отправлен
 setTimeout(upgradedSendSignal, 300);
 setTimeout(upgradedSendSignal, 900);
 setTimeout(upgradedSendSignal, 2200); // Сигнал отправлен
 setTimeout(upgradedSendSignal, 5300); // Сигнал отправлен
 setTimeout(upgradedSendSignal, 7400);
 console.log(x.count);