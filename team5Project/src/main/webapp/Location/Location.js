
/* 

	최초 30분 무료
	이후 10분당 1천원
	
	하루 최대 2만원 [ 하루 ]

*/
let year = new Date().getFullYear(); 
let month = new Date().getMonth()+1; 
let hour = new Date().getHours();  
let minute = new Date().getMinutes(); 
let carList = true;

let parkTime = [
  { 차량번호: '09러3333', 입차시간 : '2023-07-10 17:58', 상태 : 입차 },
  { 차량번호: '12루4444', 입차시간 : '2023-07-12 12:58', 상태 : 출차 },
  { 차량번호: '67차5555', 입차시간 : '2023-07-12 12:58', 상태 : 입차 },
];

function calculate() {
  let useTime = document.querySelector('.printBox').innerHTML = `(${ year }년 ${ month }월 ${hour}시 ${minute}분) - ${입차시간[i]}`;
  let park = document.querySelector('.parking').value;
  let print = document.querySelector('.printBox');
  let html = '';

  for (let i = 0; i < parkTime.length; i++) {
    if (차량번호 === park && parkTime[i] === i) {
      html += `
        <div>
          <div class="number"> ${parkTime[i].차량번호} </div>
          <div class="park"> ${parkTime[i].주차시간}분 </div>
          <div class="price"> ${parkTime[i].price.toLocaleString()}원 </div>
        </div>
      `;
      
      carList = false;
      break;
    }
  }

  if (html === '') {
    alert('입력하신 차량번호는 없는 차량번호입니다. 다시 입력해주세요.');
  }

  print.innerHTML = html;
}