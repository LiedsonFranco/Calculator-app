let current_theme = 0
let is_first_typing = true
let n = []
let soma = 0
let last_operation = null
let screen = document.querySelector('#screen')

document.getElementById('theme').onchange = function(e) {
    current_theme = e.target.value
    if(current_theme == 1){
        document.body.classList.add('theme_2')
    }
    else if(current_theme == 2){
        document.body.classList.add('theme_3')
    }
    else if(current_theme == 0){
        document.body.classList.remove('theme_3')
        document.body.classList.remove('theme_2')
    }
}
document.querySelectorAll('.number').forEach(element => {
        element.addEventListener('click', () => {
            if(is_first_typing){
                is_first_typing = false
                return screen.innerText = element.innerText
            }
            return screen.innerText += element.innerText
        })
});
function make_operation(operation){
    switch (operation) {
        case '+':
            console.log('soma')
            
            n.push((element.innerText))
            screen.innerText += '+'
            last_operation = '+'
            break;
    
        case '=':
            console.log('igual')
            switch(last_operation){
                case '+':
                    soma = 0.0

                    for(var i = 0; i <= n.length; i++){
                        soma += n[i]
                        console.log(n[i]+typeof(n[i]))
                    }
                    screen.innerText = soma
                break
            }
            break;
    }
}

function reset(){
    screen.innerText = ''
    n = []
}