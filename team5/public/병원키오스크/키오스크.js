 
/* 이름 = 변수명 let name , HTML class명 Clname
 주민번호 = 변수명 let securityNum HTML class명 ClsecurityNum
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
 let 환자정보 = [];
 let 수납환자 =[]; 
 // 0번 내과 , 1번 외과 , 2번 정형외과
 let 진료과 = [ { 약 : [ '휴대폰약정','초코파이정' ,'코카인'] , 진료비: '13000원' }  , { 약 : [ '걱정','코요태순정' ,'닭강정'] , 진료비: '14000원' } , { 약 : [ '임창정','노인정' ,'김세정'] , 진료비: '15000원' }]
 
  /*  if(환자정보[index].희망진료과 == '내과'){ html += 진료과[0].약
                             html += 진료과[0].진료비
                             return;}
   if(환자정보[index].희망진료과 == '외과'){ html += 진료과[1].약
                             html += 진료과[1].진료비
                             return;}
   if(환자정보[index].희망진료과 == '정형'){ html += 진료과[2].약
                             html += 진료과[2].진료비
                             return;}  
   

  
*/

// 수납 함수 
function pay(index){
	let inputPay=document.querySelector('.수납금액').value;
	let Html=inputPay
	//인덱스
	Html=`<tr>
					<td>내과</td><td>휴대폰약정</td><td>13,000원</td>
				</tr>`
	Html+=`<tr>
					<td>${수납환자[index]}</td><td>${수납환자[index]}</td><td>${수납환자[index]}</td>
					
				</tr>`
				
	inputPay.innerHtml=Html	
			
	let input=Number(prompt('ic카드를 넣어주세요')) 
	if(input==진료과[0]){
		alert('결제가 완료되었습니다.')
	
	}else{'잔액부족.'}
}