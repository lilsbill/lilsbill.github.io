const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

//const answerBtn = document.querySelector("#js-tweet");
//answerBtn.addEventListener('click', getAnswer);

const totalTimeInSeconds = 10;

let remainingTimeInSeconds = totalTimeInSeconds;

const timerInterval = setInterval(updateTimer, 1000);

const newBtn = document.querySelector("#answer-btn");
newBtn.addEventListener('click', typeAnswer);

const endpoint = 'https://officeapi.akashrajpurohit.com/quote/random';

const answerText = document.querySelector('#js-answer-text')

let answer = '';
let image = '';

let volume = 0;

let imageUrl = '';

//image.src=jsonData[0]["url"]

async function getQuote()
{
    try
    {
        remainingTimeInSeconds = totalTimeInSeconds;

        const response = await fetch(endpoint);
        if (!response.ok)
        {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json['quote']);
        displayQuote(json['quote']);
        answer = json['character']
        imageUrl = json['character_avatar_url']
        answerText.textContent = 'Name the character';
        
    } 
    catch (err)
    {
        console.log(err);
        alert('FAILED to fetch new quote');
    }
}

function getAnswer()
{
    answerText.textContent = answer;
    displayAnswer(answer, imageUrl);
}


function displayQuote(quote)
{
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function displayAnswer(answer, imageUrl)
{
    const quoteAnswer = document.querySelector("#js-answer-text");
    quoteAnswer.textContent = answer;

    const characterImage = document.querySelector("#character-image");

    //imageUrl = "https://i.gyazo.com/dd60242b96d427eecb431e0668a2ca82.jpg"
    characterImage.src = imageUrl;
    //image.src=jsonData[0]["https://i.gyazo.com/5a3113ead3f3541731bf721d317116df.jpg"]
}

function typeAnswer()
{
    const word = prompt("WRITE SOMETHING");
    //newBtn.textContent = word;
    const newText = document.querySelector("#update");

    if (word == answer)
    {
        //newBtn.textContent = "correct";
        volume += 10;
        newText.textContent = volume;
    }
    else
    {
        newBtn.textContent = "wrong";
        answerText.textContent = answer;
        if (volume != 0)
        {
            volume -= 10;
        }
        
        //newText.textContent = "wrong?"
        newText.textContent = volume;
    }
}




function updateTimer() 
{
    // Check if the countdown has reached zero
    if (remainingTimeInSeconds <= 0) 
    {
        clearInterval(timerInterval); // Stop the timer
        document.getElementById('timer').textContent = 'Timer expired';
        return;
    }

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(remainingTimeInSeconds / 3600);
    const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
    const seconds = remainingTimeInSeconds % 60;

    // Format the time display
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Update the timer display
    document.getElementById('timer').textContent = formattedTime;

    // Decrease remaining time by 1 second
    remainingTimeInSeconds--;
}

function padZero(num) 
{
    return (num < 10 ? '0' : '') + num;
}