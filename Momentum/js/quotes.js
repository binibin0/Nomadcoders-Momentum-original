const quotes = [{
        quotes: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
        author: "Walt Disney",
    },
    {
        quotes: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        author: "Winston Churchill",
    },
    {
        quotes: "Don’t Let Yesterday Take Up Too Much Of Today.",
        author: "Will Rogers",
    },
    {
        quotes: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
        author: "Unknown",
    },
    {
        quotes: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
        author: "Vince Lombardi",
    },
    {
        quotes: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        author: "Steve Jobs",
    },
    {
        quotes: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
        author: "Rob Siltanen",
    },
    {
        quotes: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
        author: "Og Mandino",
    },
    {
        quotes: "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
        author: "Mohnish Pabrai",
    },
    {
        quotes: "We May Encounter Many Defeats But We Must Not Be Defeated.",
        author: "Maya Angelou",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const newQuote = randomQuote.quotes;
const newAuthor = randomQuote.author;

quote.innerText = newQuote;
author.innerText = newAuthor;