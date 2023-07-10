let teamIfo = [ ];


/*제이쿼리 날짜입력폼 실행문*/
$(function() {
    $( "#inputDate" ).datepicker({
    dateFormat: 'yy-mm-dd'});
    //날짜 형식 변경
});
//실행문 종료


function teamSubmit(){
	let student = document.querySelector('input[name=student]:checked').value
	let program = document.querySelector('input[name=slot]:checked').value
	let timeCategory = document.querySelector('#inputDate').value
	let name = document.querySelector('.uid').value
	let password = document.querySelector('.pass').value
	let tel = document.querySelector('.tel1').value+'-'+
			document.querySelector('.tel1').value+'-'+
			document.querySelector('.tel1').value;
	let school = document.querySelector('.school').value
	let category = document.querySelector('.category').value
	let email = document.querySelector('.email').value
	let personnel = document.querySelector('.personnel').value
	let teacherNum = document.querySelector('.teacherNum').value
	let maleNum = document.querySelector('.maleNum').value
	let femaleNum = document.querySelector('.femaleNum').value
	
	let personnelInfo = { student : student,
							program : program,
							timeCategory : timeCategory,
							name : name,
							password : password,
							tel : tel,
							school : school,
							category : category,
							email : email,
							personnel : personnel,
							teacherNum : teacherNum,
							maleNum : maleNum,
							femaleNum : femaleNum
							}
		teamIfo.push(personnelInfo)
		
	sessionStorage.setItem('submitInfo',JSON.stringify(teamIfo))
}
