let parent = document.getElementById("parent");
let child = document.getElementById("child");
let div = document.querySelector(".box");

div.onmouseover = (evt) => {
    console.log("I'm Box");
    console.log(evt)
}

parent.onclick = () => {
    console.log("Parent Clicked");
};

child.addEventListener("click", function() {
    console.log("Button Clicked");

});