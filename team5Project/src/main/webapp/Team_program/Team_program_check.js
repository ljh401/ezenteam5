teamIfo = JSON.parse(sessionStorage.getItem('submitInfo'))
console.log(teamIfo)


function submitCheck(){
	let nameCheck = document.querySelector('.nameCheck').value
	let passCheck = document.querySelector('.passCheck').value
	let html = document.querySelector('.main_content_5')
	/*if (teamIfo==null){alert('예약 정보가 없습니다.'); return;}*/
	
	for(let i=0; i<teamIfo.length; i++){
		if(teamIfo[i].name == nameCheck &&
		teamIfo[i].password == passCheck){
			html.innerHTML = `신청자 이름 : ${teamIfo[i].name}
								신청 날짜 : ${teamIfo[i].timeCategory}
								신청 시간대 ${teamIfo[i].program}
			`
		return;
		}
		
	}
	console.log('예약 확인 불가')
	
}