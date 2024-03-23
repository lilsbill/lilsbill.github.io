const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array)
{
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ":insertx: couldn't sleep so he decided to go for a walk. When they got to :inserty:, he decided to go in. If he couldn't sleep then might as well go somewhere. As he was wandering around he heard a scary noise. He turned and suddenly his burger :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let insertY = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    let name = '';
    if (customName.value !== '') {
        name = customName.value;
    }

    let weight = 300; 
    let temperature = 94; 
    if (document.getElementById("uk").checked) {
        weight = Math.round(300 / 14); 
        temperature = Math.round((94 - 32) * 5 / 9); 
    }

    let newStory = "It was " + temperature + " centigrade outside, so ";
    newStory += name !== '' ? name : "Bob";
    newStory += " went for a walk. When they got to " + randomValueFromArray(insertY) + ", they stared in horror for a few moments, then ";
    newStory += randomValueFromArray(insertZ) + ". ";
    newStory += name !== '' ? name + " saw the whole thing, but was not surprised" : "Bob saw the whole thing, but was not surprised";
    newStory += " — " + (name !== '' ? name : "Bob") + " weighs " + weight + " stone, and it was a hot day.";

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

