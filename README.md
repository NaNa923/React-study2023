# 시간/날짜 관리 라이브러리

## moment라이브러리

npm install moment
npm install moment-timezone

https://momentjs.com/

단점 : 2011넌부터 명실상부 Date 라이브러리 선두였으나, 새로운 자바스크립트 흐름에 맞지 않아 더이상 업데이트를 안하기로 선언.
큰 이슈 : bundle-size 큼, mutable하다.

따라서 다른 라이브러리를 추천함.

## dayjs라이브러리

npm install dayjs

https://day.js.org/docs/

장점: 사이즈가 작다, immutable하다.

## data-fns라이브러리

npm install data-fns
npm install data-fns-tz

https://date-fns.org/

장점 : 가장포괄적임,immutable, 사이즈작음. tree shaking, 함수형기반
