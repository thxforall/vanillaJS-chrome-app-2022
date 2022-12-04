const quotes = [
  {
    quote:
      "풍파는 언제나 전진하는 자의 벗이다. 풍파 없는 항해는 얼마나 단조로운가. 고난이 심할수록 나의가슴은 고동친다",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "중요한건 꺾이지 않는 마음",
    author: "Deft",
  },
  {
    quote: "그럼에도 불구하고",
    author: "BKY",
  },
  {
    quote: "가장 중요한 것은 눈에 보이지 않아",
    author: "어린왕자",
  },
  {
    quote: "오히려 좋아",
    author: "미상",
  },
  {
    quote: "Thx for all",
    author: "BKY",
  },
  {
    quote:
      "The only Thing I do know is that we have to be kind. Please. be kind",
    author: "Everything Everywhere All At Once",
  },
  {
    quote: "I'm gonna live every minute of it",
    author: "Soul",
  },
  {
    quote: "I am Iron man",
    author: "Ironman",
  },
  {
    quote: "I thougt my life was a tragedy, but it was a fucking comedy",
    author: "Joker",
  },
];

const quote = document.querySelector(".quote-box h1:first-child");
const author = document.querySelector(".quote-box h1:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const quoteBox = document.querySelector(".quote-box");

function onClickQuote() {
  let todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

quoteBox.addEventListener("click", onClickQuote);
