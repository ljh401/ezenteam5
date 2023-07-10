<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<link href = "Location.css" rel = "stylesheet">


<title>Insert title here</title>
</head>
<body>
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xadtduthyv&callback=initMap"></script>
<%-- <%@include file="../Header/Header.jsp" %> --%>
<div id = "wrap">
    <div class="sub_lnbwrap">
						<h3>찾아오시는길</h3>
						<div class="m_menu">
							
							<a href="#none"> 찾아오시는길 </a> <span></span>
						</div>
						<ul class="sub_lnb">
						</ul>
						<div class="minbanner">
							<a href="https://talk.naver.com/ct/wc3wsn" target="_blank">
								<h2>중미산천문대</h2> <span>네이버톡톡 문의하기</span>
							</a>
						</div>
					</div>
    <div class = "location">
    	<div class = "title">
    		<h1>찾아오시는길</h1>
    		<img src = "../img/ico_home.png">
    		<p>HOME > 찾아오시는길</p>
    	</div>
        <div id="map" style="width: 500px; height: 400px;">
	        <script type="text/javascript">
	            function initMap() {
	                var mapOptions = {
	                    center: new naver.maps.LatLng(37.5818, 127.4594), // 중미산천문대의 좌표
	                    zoom: 16
	                };
	
	                var map = new naver.maps.Map('map', mapOptions);
	
	                var markerOptions = {
	                    position: new naver.maps.LatLng(37.5818, 127.4594), // 중미산천문대의 좌표
	                    map: map
	                };
	
	                var marker = new naver.maps.Marker(markerOptions);
	            }
	        </script>
        </div>
        <div>
        	<span>중미산 천문대</span>
        	<p>경기도 양평군 옥천면 중미산로 1268</p>
        	<div class ="btnarea">
        	<a href = "http://naver.me/GRSBwzHn" target="_blank" title= "새창열기" class = "map_btn">지도에서 보기</a>
        	</div>
        </div>
			<dl>
				<dt><span>이용시간</span></dt>
				<dd>
					<p>매일<br/>
					자세한 이용시간은 예약페이지를 참고해주세요</p>
				</dd>
			</dl>
			<dl>
				<dt><span>전화번호</span></dt>
				<dd>
					<p>0507-1319-0306</p>
				</dd>
			</dl>
			<dl>
				<dt><span>이용안내</span></dt>
				<dd>
					<ul>
						<li class = "ico01">예약</li>
						<li class = "ico02">단체석</li>
						<li class = "ico03">주차</li>
						<li class = "ico04">무선인터넷</li>
						<li class = "ico05">남/녀 화장실 구분</li>
					</ul>
				</dd>
			</dl>
			<dl>
				<dt><span>사업자정보</span></dt>
				<dd>
					 <p>상호명 : 중미산천문대<br/>
						대표자 : 고경옥<br/>
						사업자번호 : 132-90-64791<br/>
						이메일 : jungmiastro@naver.com<p>
				</dd>
			</dl>

		</div>
</div>
<%-- <%@include file="../Footer/Footer.jsp" %> --%>

</body>
</html>