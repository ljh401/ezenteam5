// 출력 ---------------------------------------------------------------------------------
let board = [ `` , `` , ``,
          	  `` , `` , ``,
           	  `` , `` , ``]

ttButton()

function ttButton(){
	console.log('함수 시작')
	let ttTable = document.querySelector('.ttTable')
	let ttHTML = ``;
	for(let i=1; i<=board.length; i++){
		ttHTML += `<td><button 
		style="border:none; background-color: #ffe9d0;
		width:100px; height:100px;"
		type="button" onclick="inputNumber(${i})" ></button></td>`
				
		if(i%3==0){ ttHTML += `</tr>`}
		
	}
	ttTable.innerHTML = ttHTML
}


//---------------------------------입력-------------------------------------------------




<<<<<<< HEAD
=======
//처음 9개 버튼설정
for(let i=1; i<=9; i++){
	document.querySelector('#ttGame').innerHTML +=
	`<button class = "input" onclick="inputNumber(${i})"></button>`
	if(i%3==0){
		document.querySelector('#ttGame').innerHTML += '<br/>'
	}
}
>>>>>>> branch '차정훈' of https://github.com/ljh401/ezenteam5.git

//클릭시 클릭값 등록
function inputNumber(num){
	board.indexOf(num) != -1 ? alert('중복입니다.'):
	
	board.splice(num-1,1,'O')
	
	/*win()*/
	
	board.indexOf(num) != -1 ? alert('중복입니다.'):
	board.splice(parseInt(Math.random()*10),1,'X')
	
	/*win()*/
	
	if(board.length==6){
		board.splice(0)
		alert('초기화합니다.')
		
	}
	ttButton()
	console.log(board)
}


// 승리-------------------------------------------------------------------------------
/*
function win(wnum) {


if(board[0]==wnum){
	if(board[1]==wnum && board[2]==wnum)
		{if(wnum=='x'){alert('컴퓨터가 승리입니다.');return;}
		if(wnum=='o'){alert('당신이 승리했습니다.');return;}}
	if(board[3]==wnum && board[6]==wnum){alert('승리입니다.')}
	if(board[4]==wnum && board[8]==wnum){alert('승리입니다.')}
	
}

if(board[1]==wnum){
	if(board[4]==wnum && board[7]==wnum){alert('승리입니다.')}
	
}

if(board[2]==wnum){
	if(board[5]==wnum && board[8]==wnum){alert('승리입니다.')}
	if(board[4]==wnum && board[6]==wnum){alert('승리입니다.')}
	
}

if(board[3]==wnum){
	if(board[4]==wnum && board[5]==wnum){alert('승리입니다.')}
	
}

if(board[6]==wnum){
	if(board[7]==wnum && board[8]==wnum){alert('승리입니다.')}
	
}
*/

/*function winFpn(){
for(let i = 0; i<=6; i+=3 ) {

	if(i==i+1 && i+1 == i+2) {
	alert(' 플레이어 승리입니다.')
	}
	 else if (board.indexOf(``) === -1) { alert('무승부입니다')
	 } else {alert('패배')}
}

for(let i = 0; i<=2; i++ ) {
	

	if(i==i+3 && i+3 == i+6) {
	alert(' 플레이어 승리입니다.')
	}
	 else if (board.indexOf(``) === -1) { alert('무승부입니다')
	 } else {alert('패배')}
}
}
*/

// 초기화 함수----------------------------------------------------------------------------------------------------------------
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "o";
  clearBoard();
}

// 보드 초기화 함수
function clearBoard() {
  let buttons = document.getElementsByClassName(""); //  출력함수에서 button.classList.add("");기능에 해당하는 ""에 들어가는 값 
  Array.from(buttons).forEach(button => {
    button.textContent = "";
  });
}
/*
// 초기화 및 게임 시작
<<<<<<< HEAD
resetGame();
createButtons();*/

=======
/*   resetGame();
createButtons();
*/
>>>>>>> branch '차정훈' of https://github.com/ljh401/ezenteam5.git
