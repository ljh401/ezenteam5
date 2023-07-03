 
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

<<<<<<< HEAD
 함수기능
 function 등록( 접수 화면에서 접수 버튼을 눌렀을 때 진료리스트로 값 전달)
 function 출력( 진료리스트에 등록에서 받은 값을 화면에 출력)
 function 진료완료( 출력된 화면 옆에 진료완료 버튼 누를시 수납으로 전달)
 function 수납출력( 수납으로 전달된 값을 화면에 출력)
 function 수납( 수납버튼을 누를시 납부할 금액 결제창 출력 및 결제)
 function 희망진료과(진료과 버튼누르면 그 값이 해당배열에 들어가게끔)
=======
 함수기능!
 fun 등록( 접수 화면에서 접수 버튼을 눌렀을 때 진료리스트로 값 전달)
 fun 출력( 진료리스트에 등록에서 받은 값을 화면에 출력)
 fun 진료완료( 출력된 화면 옆에 진료완료 버튼 누를시 수납으로 전달)
 fun 수납출력( 수납으로 전달된 값을 화면에 출력)
 fun 수납( 수납버튼을 누를시 납부할 금액 결제창 출력 및 결제)
 func 희망진료과(진료과 버튼누르면 그 값이 해당배열에 들어가게끔)
>>>>>>> branch 'main' of https://github.com/ljh401/ezenteam5.git
 
   */
 let 환자정보 = [];
 let 수납환자 =[]; 
 // 0번 내과 , 1번 외과 , 2번 정형외과
 let 진료과 = [ { 약 : [ '휴대폰약정','초코파이정' ,'코카인'] , 진료비: '13000원' }  , { 약 : [ '걱정','코요태순정' ,'닭강정'] , 진료비: '14000원' } , { 약 : [ '임창정','노인정' ,'김세정'] , 진료비: '15000원' }]
 수납출력();
 function 수납출력() {
  let topTable = document.querySelector('#topTable');
  console.log(topTable);

  let html = `
    <tr>
      <th>이름</th>
      <th>성별</th>
      <th>주민번호</th>
      <th>진료과</th>
    </tr>
  `;

  for (let i = 0; i < 수납환자.length; i++) {
    let 환자 = 수납환자[i];

    html += `
      <tr>
        <td>${환자.이름}</td>
        <td>${환자.성별}</td>
        <td>${환자.주민번호}</td>
        <td>${환자.진료과}</td>
      </tr>
    `;
  }

  topTable.innerHTML = html;

  let bottomTable = document.querySelector('#bottomTable');
  console.log(bottomTable);

  let html1 = `
    <tr>
      <th>제조약</th>
      <th>1.</th>
    </tr>
  `;

  for (let j = 0; j < 진료과.length; j++) {
    let 특정진료과 = 진료과[j];

    html1 += `
      <tr>
        <td>${특정진료과.약}</td>
      </tr>
    `;
  }

  bottomTable.innerHTML = html1;
}