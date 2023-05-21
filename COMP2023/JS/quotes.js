const quotes = [
    {quote : "No one can earn a million dollars honestly.",
        author : "William Jennings Bryan"},
    {quote : "Eighty percent of success is showing up.",
        author : "Woody Allen"},
    {quote : "The greatest mistake is trying to be more agreeable than you can be.",
        author : "Walter Bagehot" },
    {quote : "Improvements are invented only by those who can feel that something is not good.",
        author : "Friedrich Nietzsche" },
    {quote : "Life wouldn't be worth living if I worried over the future as well as the present.",
        author : "William Somerset Maugham"},
    {quote : "If you judge people, you have no time to love them.",
        author : "Mother Teresa"},
    {quote : "Life is a long lesson in humility.",
        author : "James M. Barrie"},
    {quote : "Life is like playing a violin in public and learning the instrument as one goes on.",
        author : "Samuel Butler"},
    {quote : "A man's character is his fate.",
        author : "Heraclitus"},
    {quote : "A man has to have a code, a way of life to live by.",
        author : "John Wayne"},
]

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;