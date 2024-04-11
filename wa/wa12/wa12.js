const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', getAnswer);

const endpoint = 'https://officeapi.akashrajpurohit.com/quote/random';

const answerText = document.querySelector('#js-answer-text')

let answer = '';
let image = '';

let imageUrl = '';

//image.src=jsonData[0]["url"]

async function getQuote()
{
    try
    {
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
        answerText.textContent = '';
        
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
