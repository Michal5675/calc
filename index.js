
var btns = document.getElementsByClassName("btn-block")[0];
var buttonBlock = document.getElementsByClassName("buttons")[0];
var switcher = document.getElementsByClassName("toggle-circle")[0];
var toggleBar = document.getElementsByClassName("toggle-bar")[0];
var boxCalc = document.getElementsByClassName("input-box")[0];


var btnArr = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="];
var buttons = [];
for(let i = 0; i < btnArr.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = btnArr[i];
    btn.classList.add("btn-grey");
    btns.appendChild(btn);
    switch (btn.innerHTML) {
        case "DEL":
            btn.classList.add("btn-del", "btn-del-font");
            break;
        case "RESET":
             btn.classList.add("btn-reset");
             break;
        case "=":
            btn.classList.add("btn-enter", "btn-enter-first");
            break;
        default:
            break;
    }

   buttons.push(btn);
}


var currentPos = switcher.getBoundingClientRect();
var pos1 = 4.8 + "px";
var pos2 = 27.2 + "px";
var pos3 = 48.2 + "px";
const secMode = window.matchMedia("(prefers-color-scheme: dark)");

toggleBar.addEventListener("click", (e) =>  {
    switcher.style.left =  (e.clientX - currentPos.left) + "px";
    switcher.classList.add("animation");
    if(switcher.style.left < 4.8 + "px") {
        switcher.style.left = pos1;
    
    }
    else if(switcher.style.left > 4.8 + "px" && switcher.style.left <= 5.2 + "px") {
        switcher.style.left = pos2;
       
    }
    
    else {
        switcher.style.left = pos3;
        
    }
    switch (switcher.style.left) {
        case pos1:
            document.body.classList.add("first-theme");
            document.body.classList.remove("second-theme", "third-theme");
            boxCalc.classList.add("first-theme");
            boxCalc.classList.remove("second-theme", "third-theme");
            buttonBlock.classList.add("first-theme");
            buttonBlock.classList.remove("second-theme", "third-theme");
            toggleBar.classList.add("first-theme");
            toggleBar.classList.remove("second-theme", "third-theme");
            switcher.classList.add("first-theme");
            switcher.classList.remove("second-theme", "third-theme");
            for(let i in buttons) {
                buttons[i].classList.add("first-theme");
                buttons[i].classList.remove("second-theme", "third-theme");
                if(buttons[i].innerHTML === "DEL" || buttons[i].innerHTML === "RESET") {
                buttons[i].classList.add("btn-del");
                buttons[i].classList.remove("btn-del-second", "btn-del-third","second-theme", "third-theme", "first-theme" );
                }
                else if(buttons[i].innerHTML === "=") {
                    buttons[i].classList.add("btn-enter-first");
                    buttons[i].classList.remove("btn-enter-second", "btn-enter-third","first-theme", "third-theme", "second-theme" );
                }
                    
            }
            break;
        case pos2:
            document.body.classList.add("second-theme");
            document.body.classList.remove("first-theme","third-theme");
            boxCalc.classList.add("second-theme");
            boxCalc.classList.remove("first-theme", "third-theme");
            buttonBlock.classList.add("second-theme");
            buttonBlock.classList.remove("first-theme", "third-theme");
            toggleBar.classList.add("second-theme");
            toggleBar.classList.remove("first-theme", "third-theme");
            switcher.classList.add("second-theme");
            switcher.classList.remove("first-theme", "third-theme");
            for(let i in buttons) {
                buttons[i].classList.add("second-theme");
                buttons[i].classList.remove("first-theme", "third-theme");
                if(buttons[i].innerHTML === "DEL" || buttons[i].innerHTML === "RESET") {
                    buttons[i].classList.add("btn-del-second");
                    buttons[i].classList.remove("btn-del", "btn-del-third","first-theme", "third-theme", "second-theme" );
                    }
                else if(buttons[i].innerHTML === "=") {
                    buttons[i].classList.add("btn-enter-second");
                    buttons[i].classList.remove("btn-enter-first", "btn-enter-third","first-theme", "third-theme", "second-theme" );
                }
            }
            break;
        case pos3:
            document.body.classList.add("third-theme");
            document.body.classList.remove("first-theme", "second-theme");
            boxCalc.classList.add("third-theme");
            boxCalc.classList.remove("second-theme", "first-theme");
            buttonBlock.classList.add("third-theme");
            buttonBlock.classList.remove("second-theme", "first-theme");
            toggleBar.classList.add("third-theme");
            toggleBar.classList.remove("second-theme", "first-theme");
            switcher.classList.add("third-theme");
            switcher.classList.remove("second-theme", "first-theme");
            for(let i in buttons) {
                buttons[i].classList.add("third-theme");
                buttons[i].classList.remove("second-theme", "first-theme");
                if(buttons[i].innerHTML === "DEL" || buttons[i].innerHTML === "RESET") {
                    buttons[i].classList.add("btn-del-third");
                    buttons[i].classList.remove("btn-del-second", "btn-del", "second-theme", "first-theme", "third-theme");
                    }
                else if(buttons[i].innerHTML === "=") {
                        buttons[i].classList.add("btn-enter-third");
                        buttons[i].classList.remove("btn-enter-first", "btn-enter-second","first-theme", "third-theme", "second-theme" );
                    }    
            }
            break;    
        default:
            break;
    }
 });



arrSigns = ["+", "-", "/", "x"];
var sign = 0;
boxCalc.innerHTML = "0";



for(let i in buttons) {
    buttons[i].addEventListener("click", () => {
    var calcSplit = boxCalc.innerHTML.split("");
    var calcLen = calcSplit.length;
    var newCalc = calcSplit.slice(0,calcLen-1).join("");
    var count = 0;
    var newSign = "";
     var blank = "";
     var btnNum = parseFloat(buttons[i].innerHTML);
    
    if(buttons[i].innerHTML === ".") {
        boxCalc.innerHTML += ",";
    }
    else {
       
        for(let i in arrSigns) {
            if(boxCalc.innerHTML.indexOf(arrSigns[i]) != -1) {
                sign = boxCalc.innerHTML.indexOf(arrSigns[i]);
                newSign = arrSigns[i];
                count++;
                 
            }
            
          }

          if(boxCalc.innerHTML === "0"  && isNaN(btnNum)) {
               boxCalc.innerHTML = "0";
              
          }
          else if(boxCalc.innerHTML === "0" ) {
            boxCalc.innerHTML = buttons[i].innerHTML;
          }
         else if(isNaN(btnNum) && count > 0 && buttons[i].innerHTML !== "=")    {
            boxCalc.innerHTML += blank;
         }
        
         else {
            boxCalc.innerHTML += buttons[i].innerHTML;
         }
        
         
        

       switch (buttons[i].innerHTML) {
           case "RESET":
            boxCalc.innerHTML = "0";
               break;
            case "DEL":
                if(newCalc.length < 1) {
                    boxCalc.innerHTML = "0";
                }
                 else boxCalc.innerHTML = newCalc;
            case "=":
                var plus = boxCalc.innerHTML.indexOf("+");
                var minus = boxCalc.innerHTML.indexOf("-");
                var multiply = boxCalc.innerHTML.indexOf("x");
                var division = boxCalc.innerHTML.indexOf("/");
            
                     var a =  boxCalc.innerHTML.slice(0,sign).replace(",", ".");
                     
                     var num1 = Number(a);
                     
                    var b = boxCalc.innerHTML.slice(sign+1, boxCalc.innerHTML.length- 1).replace(",",".");
                    var num2 = Number(b);
                    var solution = 0;
                    var fixedSolution = 0;
                    if(minus != -1) {
                        solution = num1 - num2;
                        fixedSolution = solution.toFixed(3).toString().replace(".", ",");
                        if(fixedSolution.length >=18) {
                            boxCalc.innerHTML = fixedSolution.toExponential(7);
                        }
                        else 
                        boxCalc.innerHTML = fixedSolution;
                    }
                     else if(plus != -1) {
                        solution = num1 + num2;
                        fixedSolution = solution.toFixed(3).toString().replace(".", ",");
                        if(fixedSolution.length >=18) {
                            boxCalc.innerHTML = fixedSolution.toExponential(7);
                        }
                        else 
                        boxCalc.innerHTML = fixedSolution;
                     } 
                     else if(multiply != -1) {
                         solution = num1 * num2;
                         fixedSolution = solution.toFixed(3).toString().replace(".", ",");
                         if(fixedSolution.length >=18) {
                            boxCalc.innerHTML = fixedSolution.toExponential(7);
                        }
                        else 
                        boxCalc.innerHTML = fixedSolution;
                        
                     }   
                     else if(division != -1) {
                         solution = num1 / num2;
                         fixedSolution = solution.toFixed(3).toString().replace(".", ",");
                         if(fixedSolution.length >=18) {
                            boxCalc.innerHTML = fixedSolution.toExponential(7);
                        }
                        else 
                        boxCalc.innerHTML = fixedSolution;
                     }       
                     
                 
                    
                
                  
                
               break;   
           default:
            
               break;
       }
     
          
           
       
    }
    
   
    });
    
}

