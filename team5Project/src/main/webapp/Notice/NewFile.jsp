<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,target-densitydpi=medium-dpi">
<meta name="keywords" content="" />
<meta name="title" content="">
<meta name="description" content="">
<meta property="og:type" content="website">
<meta property="og:title" content="">
<meta property="og:description" content="">
<meta property="og:image" content="">
<meta property="og:url" content="">
<link rel="stylesheet" href="http://www.astrocafe.co.kr/css/default.css?ver=171222">
<title>중미산천문대</title>
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&amp;subset=korean" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="http://www.astrocafe.co.kr/skin/board/basic/style.css?ver=171222">
<link rel="stylesheet" href="/js/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="/common/css/slick.css">
<link rel="stylesheet" href="/common/css/style.css">
<link rel="canonical" href="">


<script type="text/javascript" src="/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/js/common.js?ver=181222"></script>
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=64j1zgkjuk"></script>
<script type="text/javascript" src="/common/js/slick.min.js"></script>
<script type="text/javascript" src="/common/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/common/js/common.js"></script>

<script src="http://www.astrocafe.co.kr/js/jquery.menu.js?ver=171222"></script>
<script src="http://www.astrocafe.co.kr/js/common.js?ver=171222"></script>
<script src="http://www.astrocafe.co.kr/js/wrest.js?ver=171222"></script>
<script src="http://www.astrocafe.co.kr/js/placeholders.min.js"></script>

<!--[if lte IE 8]>
<script src="http://www.astrocafe.co.kr/js/html5.js"></script>
<![endif]-->

<script>
// 자바스크립트에서 사용하는 전역변수 선언
var g5_url       = "http://www.astrocafe.co.kr";
var g5_bbs_url   = "http://www.astrocafe.co.kr/bbs";
var g5_is_member = "";
var g5_is_admin  = "";
var g5_is_mobile = "";
var g5_bo_table  = "notice";
var g5_sca       = "";
var g5_editor    = "smarteditor2";
var g5_cookie_domain = "";
</script>


</head>
<body>

<div id="wrap">
    <a href="#skipcon" class="skip">본문 바로가기</a>

    <!-- HEADER -->
    <div id="header">
        <div class="utilmenu">
            <div class="maxinner clearfix">
                <ul>					
                    <li><a href="/main/main.php" class="bl_n"> HOME &nbsp;&nbsp;</a></li>
                    <li><a href="/contents/location.php">&nbsp;&nbsp; 찾아오시는길</a></li>
										<li span style="display:none;"><a href="/bbs/login.php" class="mr0">로그인&nbsp;&nbsp;</a></li>
					
                </ul>
            </div>
        </div>
        <div class="lnbwrap">
            <div class="maxinner clearfix">
                <h1><a href="/main/main.php"><img src="/img/common/logo.png" alt="하늘아래 첫 언덕, 중미산천문대"></a></h1>
                <div class="lnb">
                    <h2 class="hide"><img src="/img/common/logo.png" alt="하늘아래 첫 언덕, 중미산천문대"> <span class="hide">메인메뉴</span></h2>
                    <ul class="clearfix">
                        <li>
                            <a href="/contents/greeting.php" class="ml0">천문대소개</a>
                            <ul class="depth">
                                <li><a href="/contents/greeting.php">인사말</a></li>
                                <li>
                                    <a href="/contents/equipment.php">시설소개</a>
                                    <ul class="sub_depth">
                                        <li><a href="/contents/equipment.php">장비안내</a></li>
                                        <li><a href="/contents/facility.php">숙소소개</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="https://booking.naver.com/booking/12/bizes/233651/items/3056171" target="_blank" title="새창열기">일일프로그램</a></li>
                        <li>
                            <a href="/contents/onetwo.php">단체프로그램</a>
                            <ul class="depth">
                                <li>
                                    <a href="/contents/onetwo.php">학교 및 기타단체</a>
                                    <ul class="sub_depth">
                                        <li><a href="/contents/onetwo.php">1박2일 프로그램</a></li>
                                        <li><a href="/contents/night.php">밤 프로그램</a></li>
                                        <li><a href="/contents/daytime.php">낮 프로그램</a></li>
                                    </ul>
                                </li>
                                <!--<li><a href="/contents/group.php">신청 및 확인</a></li>-->
                                <li><a href="/contents/registration.php">참가신청</a></li>
                                <li><a href="/contents/registration_number.php">참가신청확인</a></li>
                            </ul>
                        </li>

                       <li><a href="/contents/again.php" >재관측안내</a></li>
                        <li>
                            <a href="/bbs/board.php?bo_table=notice">공지사항</a>
                            <ul class="depth">
                                <li><a href="/bbs/board.php?bo_table=notice">공지사항</a></li>
                                <li><a href="/bbs/board.php?bo_table=ob01">관측대상/일정</a></li>
                                <li><a href="/bbs/board.php?bo_table=event">이벤트</a></li>
                            </ul>
                        </li>
                        <li><a href="/contents/location.php" class="mr0">찾아오시는길</a></li>
 
                    </ul>
                </div>
            </div>
        </div>
        <div class="nav_toggle">
            <h2 class="hide">모바일 메뉴열기</h2>
            <div class="navbar-toggle">
                <span class="icon-bar i-bar01"></span>
                <span class="icon-bar i-bar02"></span>
                <span class="icon-bar i-bar03"></span>
            </div>
        </div>
    </div>

	<div id="sub">

		<!-- SUB VISUAL -->
		<div id="sub_visual">
			<div class="txtwrap">
				<h2>
					<p>별이 보고 싶을 땐</p>
					<div class="clearfix">
						<strong>중미산천문대</strong>
						<span>수도권에서 1시간 거리에 위치한 중미산천문대는<br>수도권에서 가장 많은 별들을 볼 수 있는 곳입니다.</span>
					</div>
				</h2>
			</div>
			<div class="bg"></div>
		</div>

		<div id="skipcon">
			<div id="sub_contents">

				<!-- SUB MENU -->
				<div class="sub_lnbwrap">
					<h3>
						공지사항					</h3>
					<div class="m_menu">
						<h3 class="hide">하위메뉴보기</h3>
						<a href="#none">
															공지사항													</a>
						<span></span>
					</div>
					<ul class="sub_lnb">
							<li><a href="/bbs/board.php?bo_table=notice">공지사항</a></li>
	<li><a href="/bbs/board.php?bo_table=ob01">관측대상</a></li>
	<li><a href="/bbs/board.php?bo_table=event">이벤트</a></li>

					</ul>
					<div class="minbanner">
						<a href="https://talk.naver.com/ct/wc3wsn" target="_blank">
							<h2>중미산천문대</h2>
							<span>네이버톡톡 문의하기</span>
						</a>
					</div>
				</div>

				<!-- SUB CONTENTS AREA -->
				<div class="sub_conwrap">
					<div class="subtit">
						<h3>
															공지사항													</h3>

						<div class="breadcrumb">
							<img src="/img/ico/ico_home.png" alt=""><strong>HOME <span>&gt;</span> 공지사항</strong>
						</div>
					</div>

<!-- 게시판 목록 시작 { -->
<div id="bo_list" style="width:100%">


    <!-- 게시판 페이지 정보 및 버튼 시작 { -->
    <div id="bo_btn_top">
        <div id="bo_list_total">
            <span>Total 3건</span>
            1 페이지
        </div>

        <!--  -->
    </div>
    <!-- } 게시판 페이지 정보 및 버튼 끝 -->

    <!-- 게시판 카테고리 시작 { -->
        <!-- } 게시판 카테고리 끝 -->

    <form name="fboardlist" id="fboardlist" action="./board_list_update.php" onsubmit="return fboardlist_submit(this);" method="post">
    <input type="hidden" name="bo_table" value="notice">
    <input type="hidden" name="sfl" value="">
    <input type="hidden" name="stx" value="">
    <input type="hidden" name="spt" value="">
    <input type="hidden" name="sca" value="">
    <input type="hidden" name="sst" value="wr_num, wr_reply">
    <input type="hidden" name="sod" value="">
    <input type="hidden" name="page" value="1">
    <input type="hidden" name="sw" value="">

    
    <div class="tbl_head01 tbl_wrap">
        <table border="0" cellpadding="0" cellspacing="0">
        <caption>공지사항 목록</caption>
        <thead>
        <tr>
                        <th scope="col" class="th_num2">번호</th>
            <th scope="col" class="th_subject">제목</th>
            <th scope="col" class="th_name">글쓴이</th>
            <th scope="col" class="th_num"><a href="/bbs/board.php?bo_table=notice&amp;sop=and&amp;sst=wr_hit&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">조회 <i class="fa fa-sort" aria-hidden="true"></i></a></th>
                                    <th scope="col" class="th_datetime"><a href="/bbs/board.php?bo_table=notice&amp;sop=and&amp;sst=wr_datetime&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">날짜  <i class="fa fa-sort" aria-hidden="true"></i></a></th>
        </tr>
        </thead>
        <tbody>
                <tr class="bo_notice">
                        <td class="td_num2">
            <strong class="notice_icon"><i class="fa fa-bullhorn" aria-hidden="true"></i><span class="sound_only">공지</span></strong>            </td>

            <td class="td_subject" style="padding-left:0px">
                                <div class="bo_tit">

                    <a href="http://www.astrocafe.co.kr/bbs/board.php?bo_table=notice&amp;wr_id=74">
                                                                        일일프로그램 필독
                    </a>
                    <i class="fa fa-heart" aria-hidden="true"></i>                                    </div>

            </td>
            <td class="td_name sv_use"><span class="sv_member">관리자</span></td>
            <td class="td_num">27897</td>
                                    <td class="td_datetime">06-28</td>

        </tr>
                <tr class="bo_notice">
                        <td class="td_num2">
            <strong class="notice_icon"><i class="fa fa-bullhorn" aria-hidden="true"></i><span class="sound_only">공지</span></strong>            </td>

            <td class="td_subject" style="padding-left:0px">
                                <div class="bo_tit">

                    <a href="http://www.astrocafe.co.kr/bbs/board.php?bo_table=notice&amp;wr_id=57">
                                                                        일일프로그램 예약취소, 변경 안내
                    </a>
                    <i class="fa fa-heart" aria-hidden="true"></i>                                    </div>

            </td>
            <td class="td_name sv_use"><span class="sv_member">관리자</span></td>
            <td class="td_num">17751</td>
                                    <td class="td_datetime">06-21</td>

        </tr>
                <tr class="">
                        <td class="td_num2">
            1            </td>

            <td class="td_subject" style="padding-left:0px">
                                <div class="bo_tit">

                    <a href="http://www.astrocafe.co.kr/bbs/board.php?bo_table=notice&amp;wr_id=104">
                                                                        [중미산천문대 도로제설상황 안내]
                    </a>
                    <i class="fa fa-heart" aria-hidden="true"></i>                                    </div>

            </td>
            <td class="td_name sv_use"><span class="sv_member">관리자</span></td>
            <td class="td_num">1443</td>
                                    <td class="td_datetime">12-23</td>

        </tr>
                        </tbody>
        </table>
    </div>

    
    </form>

       <!-- 게시판 검색 시작 { -->
    <fieldset id="bo_sch">
        <legend>게시물 검색</legend>

        <form name="fsearch" method="get">
        <input type="hidden" name="bo_table" value="notice">
        <input type="hidden" name="sca" value="">
        <input type="hidden" name="sop" value="and">
        <label for="sfl" class="sound_only">검색대상</label>
        <select name="sfl" id="sfl">
            <option value="wr_subject">제목</option>
            <option value="wr_content">내용</option>
            <option value="wr_subject||wr_content">제목+내용</option>
            <option value="mb_id,1">회원아이디</option>
            <option value="mb_id,0">회원아이디(코)</option>
            <option value="wr_name,1">글쓴이</option>
            <option value="wr_name,0">글쓴이(코)</option>
        </select>
        <label for="stx" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
        <input type="text" name="stx" value="" required id="stx" class="sch_input" size="25" maxlength="20" placeholder="검색어를 입력해주세요">
        <button type="submit" value="검색" class="sch_btn"><i class="fa fa-search" aria-hidden="true"></i><span class="sound_only">검색</span></button>
        </form>
    </fieldset>
    <!-- } 게시판 검색 끝 -->
</div>




<!-- 페이지 -->


<!-- } 게시판 목록 끝 -->
</div> <!-- sub_conwrap -->
</div> <!-- sub_contents -->
</div> <!-- skipcon -->
</div> <!-- sub -->
   
</div> <!--Wrap-->

</body>
</html>


