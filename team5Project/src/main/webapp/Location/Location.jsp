<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link href="../Header/style.css" rel="stylesheet">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xadtduthyv&callback=initMap"></script>

<title>Insert title here</title>
</head>
<body>

	 <%@include file="../Header/Header.jsp" %>
		<!-- SUB MENU -->
               <div class="sub_lnbwrap">
                  <h3>찾아오시는길</h3>
                  <div class="m_menu">
                     <h3 class="hide">하위메뉴보기</h3>
                     <a href="#none"> 찾아오시는길 </a>
                  </div>
                  <ul class="sub_lnb">
                  	<li>
                  		<a href ="#">찾아오시는길</a>
                  	</li>
                  </ul>
                  <div class="minbanner">
                     <a href="https://talk.naver.com/ct/wc3wsn" target="_blank">
                        <h2>중미산천문대</h2> <span>네이버톡톡 문의하기</span>
                     </a>
                  </div>
               </div>
               
               <div>
        <div id="map" style="width: 500px; height: 400px;"></div>
        <script type="text/javascript">
            function initMap() {
                var mapOptions = {
                    center: new naver.maps.LatLng(37.496216, 127.534856), // 중미산천문대의 좌표
                    zoom: 16
                };

                var map = new naver.maps.Map('map', mapOptions);

                var markerOptions = {
                    position: new naver.maps.LatLng(37.496216, 127.534856), // 중미산천문대의 좌표
                    map: map
                };

                var marker = new naver.maps.Marker(markerOptions);
            }
        </script>
    </div>


<%@include file="../Footer/Footer.jsp" %>

</body>
</html>
