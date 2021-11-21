const quotes = [
  {
    quote: "Life is a journey",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Don't dream, Be it",
    author: "Tim curry",
  },
  {
    quote: "No pain, No gain",
    author: "Benjamin Franklin",
  },
  {
    quote: "The die is cast",
    author: "Julius Caesar",
  },
  {
    quote: "When they go low, we go high",
    author: "Michelle Obama",
  },
  {
    quote: "Seeing is believing",
    author: "Thomas Fuller",
  },
  {
    quote: "The will of man is his happiness",
    author: "Friedrich von schiller",
  },
  {
    quote: "Only I can change my life, no one can do it for me",
    author: "Carol Burnett",
  },
  {
    quote: "This too shall pass away",
    author: "Abraham Lincoln",
  },
  {
    quote: "I find the harder I work, the more luck I have",
    author: "Thomas Jefferson",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;