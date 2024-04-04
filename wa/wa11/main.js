const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ['./images/pic1.jpeg','./images/pic2.jpeg','./images/pic3.jpeg','./images/pic4.jpeg','./images/pic5.jpeg'];
/* Declaring the alternative text for each image file */
const alts = ["Dog", "My Dog", "My dog being cute", "Adorable Doggo", "My dog is so cute"]
/* Looping through images */
for (let i = 0; i < 5; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", ()=>{
        displayedImage.setAttribute('src', pics[i]);
        displayedImage.setAttribute('alt', alts[i]);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=>{
    const button = btn.getAttribute("class");
    if (button == "dark")
    {
        
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else
    {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
