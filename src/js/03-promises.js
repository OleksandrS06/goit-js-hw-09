import { Notify } from 'notiflix/build/notiflix-notify-aio';
 
const formEl = document.querySelector(".form");
const submitBntEl = formEl.querySelector("button")
console.log(submitBntEl);
console.dir(formEl.elements);


const onCreatePromisesBtnClick = event => {
  event.preventDefault();
  firstDelay = Number(formEl.elements.delay.value);
  step = Number(formEl.elements.step.value)
  amount = Number(formEl.elements.amount.value);
  // console.log(delay, amount, step);
  
  for (let i = 1; i <= amount; i += 1){
    createPromise( i, firstDelay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    firstDelay += step;
  }
  
}
submitBntEl.addEventListener("click", onCreatePromisesBtnClick)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }
  


  )
}
