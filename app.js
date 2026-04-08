const switcher = document.querySelector('.btn');

switcher.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
    document.body.classlist.toggle("light-theme");
}) 

console.log("current class name: ");