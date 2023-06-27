//---------------------------------입력-------------------------------------------------

//배열선언
let board1 = []

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
	board1.indexOf(num) != -1 ? alert('중복입니다.'):board1.push(num)
	
	console.log(board1)
	
	if(board1.length==6){
		board1.splice(0)
		alert('초기화합니다.')
	}
}


 