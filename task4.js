const btn = document.querySelector('.j-btn');

function useRequest() {
  let val1 = document.querySelector('#search1').value;
  let val2 = document.querySelector('#search2').value;
  // console.log(val)
  let a = Number(val1);
  let b = Number(val2);
  
  if ((a<=300) && (a>=100) && (b>=100) && (b<=300)){
    return fetch('https://dummyimage.com/' + val1 + 'x' + val2 + "/");
  } else{
    console.log("Вне диапазона")
  };
};
btn.addEventListener('click', () => {
  const requestResult = useRequest();
  console.log('requestResult', requestResult);
});