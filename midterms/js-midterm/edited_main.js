const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

//const answerBtn = document.querySelector("#js-tweet");
//answerBtn.addEventListener('click', getAnswer);

const totalTimeInSeconds = 10;

var links = 
[
    "https://youtu.be/dQw4w9WgXcQ?si=RxDP0Ij90vM2m6IM",
    "https://youtu.be/L_jWHffIx5E?si=3P1f5TdocLGtATcs",
    "https://youtu.be/0mYBSayCsH0?si=HYpqIQEUZ0cmtoym",
    "https://youtu.be/5tXh_MfrMe0?si=DpUOF8t6bUvRKc2B",
    "https://youtu.be/4fndeDfaWCg?si=g8iN99SH1eMILLut",
    // Add more URLs as needed
];

document.getElementById("myForm").addEventListener("submit", function(event) 
{
    event.preventDefault(); // Prevent the default form submission
  
    // Get form data
    var fname = document.getElementById("fname").value;
  
    typeAnswer(fname)

    // Now you can use fname and lname as variables
    console.log("Test?", fname);
});



let remainingTimeInSeconds = totalTimeInSeconds;

//const timerInterval = setInterval(updateTimer, 1000);

let timerInterval;

//const newBtn = document.querySelector("#answer-btn");
//newBtn.addEventListener('click', typeAnswer);

const doneBtn = document.querySelector("#done");
doneBtn.addEventListener('click', doneFun);

const endpoint = 'https://officeapi.akashrajpurohit.com/quote/random';

const answerText = document.querySelector('#js-answer-text')

const rightWrong = document.querySelector('#answer_yes')

var playCounter = 0;

let answer = '';
let image = '';

let volume = 0;

let imageUrl = '';

//image.src=jsonData[0]["url"]

function doneFun()
{
    playCounter += 1;
    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links[randomIndex];

    window.open(randomLink, '_blank');

    if (playCounter == 5)
    {
        btn.disabled = true;
        newBtn.disabled = true;
        doneBtn.disabled = true;

        document.body.innerHTML = '';
    }
}

async function getQuote()
{
    try
    {
        clearInterval(timerInterval);
        remainingTimeInSeconds = totalTimeInSeconds;

        const response = await fetch(endpoint);
        if (!response.ok)
        {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json['quote']);
        displayQuote(json['quote']);
        answer = json['character'];
        imageUrl = json['character_avatar_url'];
        answerText.textContent = 'Name the character';
        
        startTimer();

    } 
    catch (err)
    {
        console.log(err);
        alert('FAILED to fetch new quote');
    }
}

function startTimer() 
{
    timerInterval = setInterval(updateTimer, 1000);
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

function typeAnswer(word)
{
    //const word = prompt("WRITE SOMETHING");
    //newBtn.textContent = word;
    const newText = document.querySelector("#update");

    if (word == answer)
    {
        //newBtn.textContent = "correct";
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        volume += randomNumber;
        newText.textContent = volume;
        rightWrong.textContent = "Correct";
    }
    else
    {
        rightWrong.textContent = "INCORRECT";
        answerText.textContent = answer;
        if (volume != 0)
        {
            if (volume < 10)
            {
                volume = 0;
            }
            else
            {
                volume -= 10;
            }
            
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

        if (volume > 10)
        {
            volume -= 10;
            document.getElementById('update').textContent = volume;
        }

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