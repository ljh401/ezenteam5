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
