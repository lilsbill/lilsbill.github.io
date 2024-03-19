//const button = document.querySelector("button");
const header = document.querySelector("h1");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector("#button2")
//const button2 = document.getElementById("button2");
button1.addEventListener('click', changeText);
button2.addEventListener('click', changeText2);


console.log(button1)
console.log(button2)

//for (const b in button)
//{
//    b.addEventListener('click', changeText);
//}


function changeText()
{
    //alert('test successful');
    header.textContent = `change`;
    //alert('test');
}

function changeText2()
{
    //alert('test successful');
    header.textContent = `update`;
    //alert('test');
}