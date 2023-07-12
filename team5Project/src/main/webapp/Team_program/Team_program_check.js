teamIfo = JSON.parse(localStorage.getItem('submitInfo'))
console.log(teamIfo)


function submitCheck(){
	if(teamIfo==null){
		alert('예약 정보를 찾을 수 없습니다.')
		return;
	}
	
	let nameCheck = document.querySelector('.nameCheck').value
	let passCheck = document.querySelector('.passCheck').value
	let html = document.querySelector('.main_content_5')
	/*if (teamIfo==null){alert('예약 정보가 없습니다.'); return;}*/
	
	if( nameCheck=='' || passCheck=='' ){
		alert('예약 정보를 모두 입력해 주세요.')
		return;
	}
	
	for(let i=0; i<teamIfo.length; i++){
	if(teamIfo[i].name != nameCheck ||
		teamIfo[i].password != passCheck){
			alert('예약 정보를 찾을 수 없습니다.')
			return;
		}
	}
	
	html.className = 'main_content_5 checkArea';
	for(let i=0; i<teamIfo.length; i++){
		if(teamIfo[i].name == nameCheck &&
		teamIfo[i].password == passCheck){
			html.innerHTML = `	<div class="main_content_2">
								<p class="p_text1" style="margin-right: 130px;"
								>예약 취소 문의 (천문대장 : 010-8520-0818) </p>
								</div>
								<div><span class="typeText">참가구분</span><span>
	 							<span class="checkValue">${teamIfo[i].student}</span>
	 							</span></div>
	 							<div><span class="typeText">신청 프로그램</span>
	 							<span class="checkValue">${teamIfo[i].program}</span>
	 							</div>
	 							<div><span class="typeText">예약날짜</span>
	 							<span class="checkValue">${teamIfo[i].timeCategory}</span>
	 							</div>
	 							<div><span class="typeText">신청인 성명</span>
	 							<span class="checkValue">${teamIfo[i].name}</span>
	 							</div>
	 							<div><span class="typeText">연락처</span>
	 							<span class="checkValue">${teamIfo[i].tel}</span>
	 							</div>
	 							<div><span class="typeText">단체명</span><span>
	 							<span class="checkValue">${teamIfo[i].school}</span>
	 							</span></div>
	 							<div><span class="typeText">단체 유형</span>
	 							<span class="checkValue">${teamIfo[i].category}</span>
	 							</div>
	 							<div><span class="typeText">신청자 이메일</span>
	 							<span class="checkValue">${teamIfo[i].email}</span>
	 							</div>
	 							<div><span class="typeText">참가인원</span>
	 							<span class="checkValue">${teamIfo[i].personnel}</span>
	 							</div>
	 							<div><span class="typeText">참가인원 상세</span><span>
	 							<span class="checkValue2">교사 : ${teamIfo[i].teacherNum} 명</span>
	 							<span class="checkValue2">남학생 : ${teamIfo[i].maleNum} 명</span>
	 							<span class="checkValue2">여학생 :  ${teamIfo[i].femaleNum} 명</span>
	 							</span></div>
	 							<div class="sub_div">	
	 							<a href="Team_program_check.jsp"><button class="sumbit1" type="button"
	 							style="margin-right:80px;">확인 완료</button></a>
	 			</div>
	 		</div>
	 							
			`
		return;
		}
		
	}
	console.log('예약 확인 불가')
	
}