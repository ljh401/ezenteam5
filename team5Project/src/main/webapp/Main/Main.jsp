<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

   <%@include file="../Header/Header.jsp" %>
      
   <div class = "main">
      <div class = "mainContent1">
         <h3>별이 보고싶을땐</h3>
         <strong>중미산 천문대</strong>
         <p> 해발 420M에 위치한 중미산천문대는<br/>
         수도권에서 가장 많은 별을 볼 수 있는 곳입니다.</p>
         <strong>(서울에서 1시간 거리)</strong>
         <a href = "#">천문대소개 -></a>
         <a href = "#">찾아오시는길 -></a>
      </div>
      <div class ="mainContent2">
         <ul>
            <li class="quick1"><a href="#">
                  <h2>일일프로그램 신청</h2> <span>바로가기<span class="icon">예약제</span>
               </span>
            </a></li>
            <li class="quick2"><a href="#">
                  <h2>단체프로그램 신청</h2> <span>바로가기
               </span>
            </a></li>
            <li class="quick3"><a href="#">
                  <h2>관측대상</h2> <span>바로가기
               </span>
            </a></li>
            <li class="quick4"><a href="#">
                  <h2>관측대상</h2> <span>바로가기
               </span>
            </a></li>
            <li class = "quick5"></li>
            <li class = "quick6"></li>
         </ul>
      </div>
      <div class = "mainImg">
         <div>
            <img class ="mainimg" src = "../img/main.jpg">
         </div>
         <div>
            <img class="jimg" src= "../img/right1.jpg" />
         </div>
      </div>
   </div>
   <%@include file="../Footer/Footer.jsp" %>

   <script src = "Main.js"type="text/javascript"></script>
   
</body>
</html>