
/* 이름 = 변수명 let name , HTML class명 Clname

 생년월일 = 변수명 let securityNum	ClsecurityNum1
 주민번호 = 변수명 let securityNumFull HTML class명 ClsecurityNum1 + ClsecurityNum2
 성별 = 변수명 let sex , HTML class명 Clsex
 희망진료과 = 변수명 let hopePart , HTML class명 ClhopePart
 환자정보 = {};

 미리 선언 해둘거! 
 let 내과 = { 약 : ~ , 진료비: ~} 
 let 외과 = { 약 : ~ , 진료비: ~} 
 let 정형외과 = { 약 : ~ , 진료비: ~} 
 진료과 = [ 내과 , 외과 , 정형외과]


 함수기능!
 fun 등록( 접수 화면에서 접수 버튼을 눌렀을 때 진료리스트로 값 전달)
 fun 출력( 진료리스트에 등록에서 받은 값을 화면에 출력)
 fun 진료완료( 출력된 화면 옆에 진료완료 버튼 누를시 수납으로 전달)
 fun 수납출력( 수납으로 전달된 값을 화면에 출력)
 fun 수납( 수납버튼을 누를시 납부할 금액 결제창 출력 및 결제)
 func 희망진료과(진료과 버튼누르면 그 값이 해당배열에 들어가게끔)
 
   */



let 수납환자 = [];
let 환자정보 = [];
let 진료과 = [
	{ 약: ['휴대폰약정', '초코파이정', '코카인'], 진료비: '13000' },
	{ 약: ['걱정', '코요태순정', '닭강정'], 진료비: '14000' },
	{ 약: ['임창정', '노인정', '김세정'], 진료비: '15000' }
];



 //정용상 js 파트 시작
 
function 등록(){
   if(document.querySelector('input[name=sex]:checked') == undefined || 
   document.querySelector('input[name=hopePart]:checked') == undefined)
   {alert('정보를 모두 기입해 주세요.');return;}
   let name = document.querySelector('.Clname').value
   let securityNum = document.querySelector('.ClsecurityNum1').value
   let sex = document.querySelector('input[name=sex]:checked').value
   let hopePart = document.querySelector('input[name=hopePart]:checked').value
   let securityNumFull = 
      document.querySelector('.ClsecurityNum1').value +'-'+
      document.querySelector('.ClsecurityNum2').value
   if(name=='' || securityNum == '' || securityNumFull == '')
   {alert('정보를 모두 기입해 주세요.');return;}
   if(document.querySelector('.ClsecurityNum1').value.length<6 ||
      document.querySelector('.ClsecurityNum2').value.length<7){
      alert('정보를 모두 기입해 주세요.');return;
      }
   if(환자정보.length != 0){for(i=0; i<=환자정보.length-1; i++){
      if(환자정보[i].이름==name && 환자정보[i].주민번호==securityNumFull){
         alert('같은 환자가 이미 등록되어 있습니다.');return;
         }
      }
   }
    let patientInfo = {이름 : name,
                   생년월일 : securityNum,
                   성별 : sex,
                   희망진료과 : hopePart,
                   주민번호 : securityNumFull,
                   수납상태 : false
                   }
    환자정보.push(patientInfo)
    alert('접수가 완료되었습니다.')
    document.querySelector('.Clname').value = '';
    document.querySelector('.ClsecurityNum1').value = '';
    document.querySelector('.ClsecurityNum2').value = '';
    document.querySelector('input[name=sex]:checked').checked = false;
    document.querySelector('input[name=hopePart]:checked').checked = false;
    
     출력();
}

function maxlength(x, maxlength){
   if( x.value.length > maxlength) {
      x.value
      = x.value.substr(0, maxlength)
   }
}





// 진료완료 버튼을 클릭할 때 호출되는 함수
function 진료완료(index) {

  // 해당 인덱스의 환자 정보를 수납환자 배열에 push

	// 해당 인덱스의 환자 정보를 수납환자 배열에 push
	수납환자.push(환자정보[index]);



  // 해당 인덱스의 환자 정보를 환자정보 배열에서 삭제
  환자정보[index].수납상태 = true;


  // 환자 정보를 다시 출력
  출력();
  수납출력(index);


}

// 환자 정보를 출력하는 함수
function 출력() {
  let html = `<tr> <th> 이름 </th> <th> 생년월일 </th> <th> 진료과 </th> <th> 비고 </th> </tr>`;

  for (let i = 0; i < 환자정보.length; i++) {
              if( 환자정보[i].수납상태 == false  ){
                 
                     html += `<tr>
                         <td>${환자정보[i].이름}</td>
                         <td>${환자정보[i].생년월일}</td>
                         <td>${환자정보[i].희망진료과}</td>
                         <td><button onclick="진료완료(${i})">진료완료</button></td>
                      </tr>`;
           }

        
     }

  // table에 HTML 넣어주기
  const outputTable = document.getElementById('outputTable');
  outputTable.innerHTML = html;
  
}


// 환자 정보 출력
출력();

let 알약 = '';
let 진료비 = '';








 function 수납출력(index) {
  let topTable = document.querySelector('#topTable');
  
  let html = `
    <tr>
      <th>이름</th>
      <th>성별</th>
      <th>주민번호</th>
      <th>진료과</th>
      <th>처방약</th>
    </tr>
  `;

 
    if (환자정보[index].희망진료과 == '내과') {
     알약 = 진료과[0].약.join(', ');
     진료비 = 진료과[0].진료비;
   } else if (환자정보[index].희망진료과 == '외과') {
     알약 = 진료과[1].약.join(', ');
     진료비 = 진료과[1].진료비;
   } else if (환자정보[index].희망진료과 == '정형외과') {
     알약 = 진료과[2].약.join(', ');
     진료비 = 진료과[2].진료비;
   }


    html += `
      <tr>
        <td>${환자정보[index].이름}</td>
        <td>${환자정보[index].성별}</td>
        <td>${환자정보[index].주민번호}</td>
        <td>${환자정보[index].희망진료과}</td>
        <td>${알약}</td>
        
      </tr>
    `;
    html += 
    `<h3> ${환자정보[index].이름}님 납부하실 금액</h3>` +
    `<p> 납부하실 금액은 ${진료비}원 입니다. </p>`

     topTable.innerHTML = html;

  

}



// 수납 함수 
function pay(index) {			//수납함수 start
	
	let input = prompt('ic카드를 넣어주세요');		//입력값 받기 
	
	for (let i = 0; i < 수납환자.length; i++) {		//진료비  찾기 for start
		if (수납환자[i].희망진료과 == '내과') {
			진료비 = 진료과[0].진료비;
		
			}
		 else if (수납환자[i].희망진료과 == '외과') {
			진료비 = 진료과[1].진료비;
			
		} else if (수납환자[i].희망진료과 == '정형외과') {
			진료비 = 진료과[2].진료비;
			
		}
		
		if (parseInt(input) >= parseInt(진료비)) {
			alert('결제가 완료 되었습니다.');
			alert('환자정보' + 수납환자[i]);
		}else{alert('결제 실패')}
		
	}					// f end
	
}							//수납함수 end

		
	

	
 

