// check.js — 브라우저 없이 규칙 확인하기. P6 에서 채우고 P7 에서 한 번 더 늘립니다.
//
// 상황: 규칙이 맞는지 매번 브라우저를 열고 표를 눈으로 대 보기는 번거롭고, 빠뜨리기 쉽습니다.
// 할 일: 손으로 만든 daily 로 logic.js 의 함수를 불러 console.log 합니다.
//       console.log 줄마다 오른쪽에 예상 결과를 주석으로 "실행하기 전에" 적습니다.
// 실행: 터미널에서 node check.js
// 확인: 출력이 주석의 예상과 전부 같습니다.
// 커밋 메시지: p6: check (P7 에서 늘린 것은 p7: reasons 에 같이)
import { toDays, isGoodDay, summarize, reasons } from "./logic.js";

// test input, written by hand
const daily = { 
    time: ["01-05", "11-06", "08-07", "08-19"],
    temperature_2m_max: [-10.2, 20.3, 34.5, 40.1],
    precipitation_probability_max: [27.5, 30, 99.8, 27],
    wind_speed_10m_max: [78, 10, 9, 1]
};

const days = toDays(daily);

console.log(days[0]); //{ date: '01-05', max: -10.2, wind: 78, rain: 27.5 }

for(let i=0;i<4;i++)
    console.log(isGoodDay(days[i], { rain: 27, wind: 9 })); //false false false true

console.log(summarize(days, { rain: 27, wind: 9 })); //good for a run on 1 of 4 days

console.log(summarize([], { rain: 30,wind: 10 })); //good for a run on 0 of 0 days

console.log(reasons(days[0], { rain: 30, wind: 10 })); // [ 'wind' ]
console.log(reasons(days[1], { rain: 0, wind: 0 })); // [ 'rain', 'wind' ]
console.log(reasons(days[2], { rain: 100, wind: 100 })); // []