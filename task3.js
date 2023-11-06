let reqUrl = "https://jsonplaceholder.typicode.com/photos?_limit=";

function useRequest() {
  let val = document.querySelector('input').value;
  // console.log(val)
  let value = Number(val);
  console.log(value)
  
  var xhr = new XMLHttpRequest();
  
   if ((value<=10) && (value>=1)){
     reqUrl+=val;
     console.log(reqUrl);
       xhr.open('GET', reqUrl, true);
       xhr.send();
       xhr.onload = function() {
         console.log('Статус ответа: ', xhr.status);
         console.log('Результат: ', xhr.response);
       };
   } else{
     console.log("Вне диапазона")
   };
};

const btnAsync = document.querySelector('.j-btn-async-request');

btnAsync.addEventListener('click',  useRequest);
