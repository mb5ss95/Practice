JSX 주의사항
- class -> className로 사용
- for -> htmlFor로 사용

- 소문자가 아닌 카멜케이스로 작성
onClick={activatelasers} (x)
onClick={activateLasers} (o)

- 문자열이아닌 함수로 전달
onClick="함수이름()" (x) 
onClick={함수이름} (o)

shift + a /**/
ctrl + k + c //
ctrl + / //

참고
https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault

모티브
https://byfuls.com/programming/getpage/javascript

컴포넌트
https://ko.reactjs.org/docs/react-dom.html

생명주기
https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955

이벤트 처리
https://dev-pengun.tistory.com/entry/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88-%EB%B0%B0%EC%9A%B0%EA%B8%B0-5-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0

이벤트 종류
http://www.ktword.co.kr/test/view/view.php?m_temp1=2744

nodejs
npm = package manager (관리)
npx = package runner (실행)

js

const temp = [1, 2, 3, 4, 5]
[6, temp] //(2) [6, Array(5)]
[6, ...temp] //(6) [6, 1, 2, 3, 4, 5]

useState = set, get value 
useEffect = catch change, once run