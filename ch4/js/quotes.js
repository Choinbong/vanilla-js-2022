const quotes = [
    {
        quote: "Don't dream, Be it",
        author: "Tim Curry",
    },
    {
        quote: "No pain, No gain",
        author: "Benjamin Franklin",
    },
    {
        quote: "When they go low, we go high",
        author: "Michelle Obama",
    },
    {
        quote: "I was never less alone than when by myself",
        author: "Edward Gibbon",
    },
    {
        quote: "Seeing is believing",
        author: "Thomas Fuller",
    },
    {
        quote: "Only I can change my life, no one can do it for me",
        author: "Carol Burnett",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas A. Edison",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why",
        author: "Mark Twain",
    },
    {
        quote: "Never give in except to convictions of honor and good sense",
        author: "Winston Churchill",
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary",
        author: "Jim Rohn",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;