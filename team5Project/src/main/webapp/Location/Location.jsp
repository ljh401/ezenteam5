<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xadtduthyv&callback=initMap"></script>

<title>Insert title here</title>
</head>
<body>

<%@include file="../Header/Header.jsp" %>
<div>
    <div>
        <h3>찾아오시는 길</h3>
        <div></div>
        <div></div>
    </div>
    <div>
        <div id="map" style="width: 500px; height: 400px;"></div>
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
</div>
<%@include file="../Footer/Footer.jsp" %>

</body>
</html>
