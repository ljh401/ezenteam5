<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>중미산천문대</title>
	<link href="Team_program.css" rel="stylesheet">
	
	<!-- 제이쿼리 입력 폼 -->
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" /> 
	
</head>
<body>

	
 <%@include file="../Header/Header.jsp" %> 헤더 링크 
<%@include file="../Header_bar/Header_bar.jsp" %> 헤더 바 링크


<div>헤더 영역</div>
<div>헤더바</div>
	 
	<form>
	 <div class="wrap"><!-- 전체페이지 시작 -->
	 	
	 	<div class="sideMenu"> <!-- 사이드메뉴 시작 -->
	 		<p>사이드메뉴</p>
	 	
	 	
	 	
	 	</div> <!-- 사이드메뉴 종료 -->
	 	<div class="main_content"> <!-- 메인컨텐츠 시작 -->
	 		<div class="main_content_1">
	 			<h2>참가신청</h2>
	 			<div><span><img src="../img/ico_home.png"> HOME > 단체프로그램</span></div>
	 		
	 		</div>
	 		<div class="main_content_2">
		 		<p class="c_text1">프로그램 <span class="s_text1">참가신청</span></p>
		 		<p class="p_text1">중미산천문대 <span class="s_text2">단체프로그램</span> 신청페이지입니다,
		 		개인은 신청불가하며 20인 이하 단체는 유선으로 문의주세요.</p>
		 		<p class="p_text1">(천문대장 : 010-8520-0818)</p>	
		 		
	 		</div>
	 		
	 		<div class="head_text">
	 			<p>선택사항</p>
	 		</div>
	 		
	 		<div class="main_content_3">
	 			
	 			<div><span class="typeText">참가구분</span><span>
	 				<span class="checkButton1"><input type="radio" name="student"> 유치원</span>
	 				<span class="checkButton1"><input type="radio" name="student"> 초등학생</span>
	 				<span class="checkButton1"><input type="radio" name="student"> 중/고등학생</span>
	 				<span class="checkButton1"><input type="radio" name="student"> 학교외 단체</span>
	 			</span></div>
	 			
	 			
	 			<div><span class="typeText">프로그램 선택</span><span>
	 				<span class="checkButton1"><input type="radio" name="slot"> 낮</span>
	 				<span class="checkButton1"><input type="radio" name="slot"> 밤</span>
	 				<span class="checkButton1"><input type="radio" name="slot"> 종일</span>
	 				<span class="checkButton1"><input type="radio" name="slot"> 1박2일</span>
	 			</span></div>
	 			
	 		
	 			<div><span class="typeText">날짜입력</span><span>
	 				<input id="inputDate" type="text">
	 			</span></div>
	 			
	 		
	 		</div>
	 		
	 		<div class="head_text">
	 			<p>단체정보</p>
	 		</div>
	 		
	 		<div class="main_content_4">
	 			<div><span class="typeText">신청인 성명 *</span><span>
	 				<input id="inputBox1" type="text">
	 			</span></div>
	 			
	 			<div><span class="typeText">비밀번호 *</span><span>
	 				<input id="inputBox2" type="password"></span>
	 				<div id="m_div4"><span class="typeText2"></span>
	 					<span>* 참가신청확인시 사용할 비밀번호 4자리를 입력해주세요.</span>
		 			</div>
	 			</div>
	 			
	 			<div><span class="typeText">연락처 *</span><span>
	 				<input id="inputBox2" type="text"> - 
	 				<input id="inputBox2" type="text"> - 
	 				<input id="inputBox2" type="text"></span>
	 				<div id="m_div4"><span class="typeText2"></span>
	 					<span>* 프로그램 관련 실무담당자 연락처를 정확하게 기입해 주세요.</span>
		 			</div>
	 			</div>
	 			
	 			<div class="m_div2"><span class="typeText">단체(학교)명 *</span><span>
	 				<input id="inputBox3" type="text">
	 			</span></div>
	 			
	 			<div class="m_div2"><span class="typeText">단체유형 *</span><span>
	 				<input id="inputBox3" type="text">
	 			</span></div>
	 			
	 			<div class="m_div2"><span class="typeText">이메일 *</span><span>
	 				<input id="inputBox3" type="text">
	 			</span></div>
	 			
	 			<div class="m_div2"><span class="typeText">참가인원 *</span><span>
	 				<input id="inputBox2" type="text">
	 			</span></div>
	 			
	 			<div><span class="typeText">참가인원 상세 *</span><span>
	 				<span class="s_div2">교사: <input id="inputBox4" type="text"> 명</span>
		 			<span class="s_div2">남학생: <input id="inputBox4" type="text"> 명</span>
		 			<span class="s_div2">여학생 <input id="inputBox4" type="text"> 명</span></span>
		 			<div id="m_div4"><span class="typeText2"></span>
		 				<span>* 대략적인 인원을 작성해 주시고, 인원 변동이 생길 경우 사전에 연락 주시기 바랍니다.</span>
		 			</div>
	 			</div>
	 		</div>
	 		
	 		<div class="sub_div">
	 			<button class="simbit" type="button">작성완료</button>
	 		</div>
	 	
	 	</div> <!-- 메인컨텐츠 종료 -->


	</div> <!-- 전체페이지 종료 -->
	</form> 
		
 <%@include file="../Footer/Footer.jsp" %> 푸터링크
<div>푸터 영역</div>
	
	<!-- 제이쿼리 입력폼 스크립트 호출 -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 
	<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
	
	<!-- 내부 js파일 호출 -->
	<script src="Team_program.js" type="text/javascript"></script>
</body>
</html>