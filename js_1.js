const quotes = [
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "The best way to predict your future is to create it. – Abraham Lincoln",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Don’t cry because it’s over, smile because it happened. – Dr. Seuss",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "Act as if what you do makes a difference. It does. – William James",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy"
  ];
  
 function generateQuote() {
    const text = document.getElementById("line");
    const index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
 }
 setInterval(generateQuote,5000);

 // change background after every 5 sec
 const color = document.getElementById("body");

function changeBackgroundColor() {
  const a = Math.floor(Math.random() * 256); // Random value for Red
  const b = Math.floor(Math.random() * 256); // Random value for Green
  const c = Math.floor(Math.random() * 256); // Random value for Blue

  color.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

// Change the background color every 5 seconds
setInterval(changeBackgroundColor, 5000);   