const quotes =[
    {
      'author':'Mahatma Gandhi',
      'quote' :'Do or Die'
    },
    {
        'author':'Albert Einstein',
        'quote' :'Time is stubborn illusion'
      },
      {
        'author':'Abraham lincoln',
        'quote' :'whatever you are be a good one'
      },
      {
        'author':'Iron Man', 
        'quote' :'I am Iron Man'
      },
      {
        'author':'JK Rowling',
        'quote' :'What is life without a little Risk'
      },

];

function getquote(){
    const random = Number.parseInt(Math.random()*quotes.length +1);
    document.querySelector('#quote').textContent=`\"${quotes[random].quote}\"`;
    document.querySelector('#author').textContent=`--${quotes[random].author}`;

}