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
		style="border:none; background-color: #ffe9d0;"
		type="button">${i-1}</button></td>`
				
		if(i%3==0){ ttHTML += `</tr>`}
		
	}
	ttTable.innerHTML = ttHTML
}


//---------------------------------입력-------------------------------------------------




//처음 9개 버튼설정
for(let i=1; i<=9; i++){
	document.querySelector('#inputBox').innerHTML +=
	`<button class = "input" onclick="inputNumber(${i})"></button>`
	if(i%3==0){
		document.querySelector('#inputBox').innerHTML += '<br/>'
	}
}

//클릭시 클릭값 등록
function inputNumber(num){
	board.indexOf(num) != -1 ? alert('중복입니다.'):board.push(num)
	
	console.log(board)
	
	if(board.length==6){
		board.splice(0)
		alert('초기화합니다.')
	}
}


// 승리-------------------------------------------------------------------------------

function win() {

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

// 초기화 및 게임 시작
resetGame();
createButtons();

