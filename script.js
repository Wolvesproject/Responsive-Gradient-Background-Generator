var color1 = document.querySelector(".input1");
var color2 = document.querySelector(".input2");
var grad = document.getElementById("gradiant");
var css = document.querySelector("h3");
var random = document.getElementById("random");

        function cssContent() {
        css.textContent = grad.style.background + ";";
}       
        
        function gradiantBackground() {
            grad.style.background = 
             "linear-gradient(to right, "
                 + color1.value 
                 + "," 
                 + color2.value 
                 + ")";
                cssContent();
        }

        function randomColor() {
            const letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += 
                letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        

        function setRandomColors() {
            color1.value = randomColor();
            color2.value = randomColor();
            gradiantBackground();
        }

    window.addEventListener("load", gradiantBackground);

    color1.addEventListener("input", gradiantBackground);
    
    color2.addEventListener("input", gradiantBackground);

    random.addEventListener("click", setRandomColors);
