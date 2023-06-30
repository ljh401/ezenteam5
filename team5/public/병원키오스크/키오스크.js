 
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
 let 환자정보 = [];
 let 수납환자 =[]; 
 // 0번 내과 , 1번 외과 , 2번 정형외과
 let 진료과 = [ { 약 : [ '휴대폰약정','초코파이정' ,'코카인'] , 진료비: '13000원' }  , { 약 : [ '걱정','코요태순정' ,'닭강정'] , 진료비: '14000원' } , { 약 : [ '임창정','노인정' ,'김세정'] , 진료비: '15000원' }]
 
  
 //정용상 js 파트 시작
 
function 등록(){
	let name = document.querySelector('.Clname').value
	let securityNum = document.querySelector('.ClsecurityNum1').value
	let sex = document.querySelector('input[name=sex]:checked').value
	let hopePart = document.querySelector('input[name=hopePart]:checked').value
	let securityNumFull = 
		document.querySelector('.ClsecurityNum1').value
		+document.querySelector('.ClsecurityNum2').value
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
 						주민번호 : securityNumFull
 						}
 	환자정보.push(patientInfo)
 	alert('접수가 완료되었습니다.')
 	document.querySelector('.Clname').value = '';
 	document.querySelector('.ClsecurityNum1').value = '';
 	document.querySelector('.ClsecurityNum2').value = '';
 	document.querySelector('input[name=sex]:checked').checked = false;
 	document.querySelector('input[name=hopePart]:checked').checked = false;
 	
}
 
 //정용상 js 파트 종료