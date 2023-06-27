<<<<<<< HEAD
/**
 * 
 */
















// 초기화 함수
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
=======
let board1 = [ `` , `` , ``,
          	  `` , `` , ``,
           	  `` , `` , ``]

ttButton()

function ttButton(){
	console.log('함수 시작')
	let ttTable = document.querySelector('.ttTable')
	let ttHTML = ``;
	for(let i=1; i<=board1.length; i++){
		ttHTML += `<td><button 
		style="border:none; background-color: #ffe9d0;"
		type="button">${i-1}</button></td>`
				
		if(i%3==0){ ttHTML += `</tr>`}
		
	}
	ttTable.innerHTML = ttHTML
}
>>>>>>> branch '정용상' of https://github.com/ljh401/ezenteam5.git
