
let 틱택토 = [0,0,0,0,0,0,0,0,0];


for(let i = 0; i<=6; i+=3 ) {
	

	if(i==i+1 && i+1 == i+2) {
	alert(' 플레이어 승리입니다.')
	}
	 else if (틱택토.indexOf(``) === -1) { alert('무승부입니다')
	 } else {alert('패배')}
}

for(let i = 0; i<=2; i++ ) {
	

	if(i==i+3 && i+3 == i+6) {
	alert(' 플레이어 승리입니다.')
	}
	 else if (틱택토.indexOf(``) === -1) { alert('무승부입니다')
	 } else {alert('패배')}
}

