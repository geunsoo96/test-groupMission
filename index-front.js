// 배열의 갯수만큼 HTML 요소를 생성하고, 요소의 textContent에 배열의 값을 넣어주는 함수 (매개변수는 해당하는 배열, HTML요소의 타입이다)
export default function front(arr, type) {
  arr.forEach((value) => {
    let newElement = document.createElement(type);
    newElement.textContent = value;
    document.body.appendChild(newElement);
  });
}

// arr.map <- 실행문 내용에 따른 결과를 반환시켜준다 [반환O]

// arr.forEach <- 실행문 내용을 실행시킨다 [반환X]

// 함수 front를 호출 -> digimon 정보가 들어있는 배열을 li태그를 가진 html 요소로 만들고 digimon 정보를 순서대로 넣을거야 -> arr[digimon].map((value=> {}}))
