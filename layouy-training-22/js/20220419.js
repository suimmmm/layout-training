const boxHight = document.getElementById('box');
const cardBox = document.querySelector('cardBox');
let i = 500;
let j=0;

document.addEventListener('wheel', event=>{
  // 휠 올릴때
  if(event.deltaY>0){
    j += 1;
    // console.log(j);
    // console.log(event.deltaY);
    
    // 휠 변수 크기 조정
    if(j>5){
      boxHight.style.height = '0px';
    }
    else if(j<0){
      boxHight.style.height = i;
    }
    else{
      boxHight.style.height = i - event.deltaY * j + "px";
    }
  }
  // 휠 내릴때
  else if(event.deltaY<0){
    j -= 1;
    // console.log(j);
    // console.log(event.deltaY);
    
    // 휠 변수 크기 조정
    if(j>5){
      boxHight.style.height = '0px';
    }
    else if(j<0){
      boxHight.style.height = i;
    }
    else{
      boxHight.style.height = i + event.deltaY * j + "px";
    }
  }
});
/* 마우스 휠의 조건을 줘서 이벤트를 주었다. j가 5 이상만들고 내려오려면 5까지 내려와야지 인식이 된다 내릴때 그냥 내릴려면 어찌 해야하는가 어찌해야하는지 */