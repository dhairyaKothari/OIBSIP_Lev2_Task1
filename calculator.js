let output = document.getElementById('output');
buttons = document.querySelectorAll('button')
let screenValue = '';
for(item of buttons){
    item.addEventListener('click' , (e) => {
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText)
        if(buttonText == 'X'){
            buttonText = '*'
            screenValue += buttonText
            output.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = " ";
            output.value = screenValue;
        }
        else if(buttonText == '='){
            output.value = eval(screenValue)
        }
        else{
            screenValue += buttonText
            output.value = screenValue;   
        }
    })  
}