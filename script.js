const h2 = document.createElement("h2");
h2.textContent = "How to stop being cheugy";
document.querySelector("body").appendChild(h2);

const test = document.getElementById('pic');
test.addEventListener("mouseenter", function(event){
    alert("Don't click me!");
});

