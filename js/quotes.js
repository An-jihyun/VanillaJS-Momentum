const quotes = [
  {
    quote: "노력은 배신할 수 있지만, 포기는 배신하지 않는다.",
    author: "노력충",
  },
  {
    quote: "빠른 포기로 시간을 절약하라.",
    author: "빠른 포기맨",
  },
  {
    quote: "마라탕은 언제 먹어도 맛있다.",
    author: "안지현",
  },
  {
    quote: "Chick Chick Pork Pork",
    author: "세상에서 제일 행복한 기차",
  },
  {
    quote: "개발 쉬워, 헤볼래?",
    author: "준재.Kim",
  },
  {
    quote: "개발 쉬워, 헤볼래?",
    author: "준재.Kim",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
