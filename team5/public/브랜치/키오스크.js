
// 매장이용인지 포장주문인지 선택.
let userInput = parseInt(prompt('1. 매장이용  2. 포장  번호로 입력해주세요.'));
processUserChoice(userInput);
function processUserChoice(choice) {
  if (choice === 1) {
    console.log('매장이용을 선택하셨습니다.');
    // 매장에서 먹는 경우에 대한 코드를 여기에 작성합니다.
  } else if (choice === 2) { let singleuseitems = parseInt(prompt('일회용기 필요 유무 1.O   2.X'));
   console.log('일회용품 필요 유무 값 = ' + singleuseitems + ' (* 필요 선택시 1번, 필요하지 않을시 2번 출력) ')
    // 포장하는 경우에 대한 코드를 여기에 작성합니다.
  } else {
    console.log('잘못된 입력입니다. 다시 입력해주세요.');
  }
}



let menuList = [
  { name: '김밥', price: 3000 },
  { name: '라면', price: 3500 },
  { name: '떡볶이', price: 4000 },
  { name: '오뎅', price: 2500 },
  { name: '주먹밥', price: 4000 },
  { name: '김치찌개', price: 6000 },
  { name: '콩국수', price: 4500 },
  { name: '육개장', price: 5500 },
  // 추가적인 메뉴를 여기에 추가합니다.
];

// 메뉴 출력
console.log('==== 키오스크 메뉴 ====');
for (let i = 0; i < menuList.length; i++) {
  let menu = menuList[i];
  console.log((i + 1) + '. ' + menu.name + ' - ' + menu.price + '원');// 인덱스는 0번부터 출력하므로 +1값을 추가 해서 1번부터 출력되도록 합니다.
  alert((i + 1) + '. ' + menu.name + ' - ' + menu.price + '원');  
}




// 주문 받기

	let userInputchoice = parseInt(prompt('주문할 메뉴의 번호를 입력하세요.' ));
	processOrder(userInputchoice);
function processOrder(menuNumber) {
  if (menuNumber >= 1 && menuNumber <= menuList.length) {
    let selectedMenu = menuList[menuNumber - 1];
    console.log(selectedMenu.name + '을(를) 주문합니다. 가격: ' + selectedMenu.price + '원');
    // 주문 처리에 대한 코드를 여기에 작성합니다.
  } else {
    // 잘못된 입력에 대한 처리
    console.log('잘못된 입력입니다. 다시 입력해주세요.');
  }
}

//결제방법

let input = Number(prompt('결제방법을 선택해주세요. 카드=1, 페이=2:'));
let 결제방법 = input

console.log('결제방법 = ' + 결제방법 + '(* 카드선택시 1번 , 페이선택시 2번)');

if (input === 1 || input === 2) {
  if (input === 1) {
    alert('카드를 투입해주세요.');
    output = '카드를 투입해주세요.';
  } else {
    alert('페이창을 켜서 투입구에 대주세요.');
    output = '페이창을 켜서 투입구에 대주세요.';
  }
  console.log(output);
} else {
  alert('유효하지 않은 입력입니다. 메인화면으로 돌아갑니다.');
  output = '유효하지 않은 입력입니다. 메인화면으로 돌아갑니다.';
  console.log(output);
}

console.log('영수증');
let input1 = Number(prompt('영수증 발행(yes=1, no=2):'));
let output1 = '';

if (input1 === 1 || input1 === 2) {
  if (input1 === 1) {
    alert('영수증을 출력합니다.');
    output1 = '영수증을 출력합니다.';
  } else {
    alert('메인화면으로 돌아갑니다.');
    output1 = '메인화면으로 돌아갑니다.';
  }
  console.log(output1);
} else {
  alert('유효하지 않은 입력입니다. 메인화면으로 돌아갑니다.');
  output1 = '유효하지 않은 입력입니다. 메인화면으로 돌아갑니다.';
  console.log(output1);
}


