let current_theme = 0
let is_first_typing = true
let n = []
let result = 0.0
let last_operation = null
let can_add_comma = true
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
            if(last_operation != '+' && last_operation != null){
                screen.innerText = screen.innerText.replaceAll(last_operation, '+')
            }
            n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('+')+1,)))
            screen.innerText += '+'
            last_operation = '+'
            can_add_comma = true
            break;
        case '-':
            if(last_operation != '-' && last_operation != null){
                screen.innerText = screen.innerText.replaceAll(last_operation, '-')
            }
            n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('-')+1,)))
            screen.innerText += '-'
            last_operation = '-'
            can_add_comma = true
            break;
        case '*': 
            if(last_operation != 'X' && last_operation != null){
                screen.innerText = screen.innerText.replaceAll(last_operation, 'X')
            }
            n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('X')+1,)))
            screen.innerText += 'X'
            last_operation = 'X'
            can_add_comma = true
            break;
        case '/':
            if(last_operation != '/' && last_operation != null){
                screen.innerText = screen.innerText.replaceAll(last_operation, '/')
            }
            n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('/')+1,)))
            screen.innerText += '/'
            last_operation = '/'
            can_add_comma = true
            break;
        case ',':
            if(can_add_comma){
                screen.innerText += '.'
                can_add_comma = false
            }
        break;
        
    
        case '=':
            console.log('equal')
            switch(last_operation){
                case '+':
                    result = 0.0
                    n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('+')+1,)))
                    n.forEach(element => {
                        result += element
                    });
                    is_first_typing = true
                    screen.innerText = result
                break
                case '-':
                    result = 0.0
                    n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('-')+1,)))
                    n.forEach(element => {
                        if(result === 0){
                            result = element
                        }
                        else{
                            result = result - element
                        }
                    });
                    is_first_typing = true
                    screen.innerText = result
                break
                case 'X':
                    result = 0.0
                    n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('X')+1,)))
                    n.forEach(element => {
                        if(result === 0){
                            result = element
                        }
                        else{
                            result = result * element
                        }
                    });
                    is_first_typing = true
                    screen.innerText = result
                break
                case '/':
                console.log('division')
                    result = 0.0
                    n.push(parseFloat(screen.innerText.slice(screen.innerText.lastIndexOf('/')+1,)))
                    n.forEach(element => {
                        if(result === 0){
                            result = element
                        }
                        else{
                            result = result / element
                        }
                    });
                    is_first_typing = true
                    screen.innerText = result
                break
                default:
                    reset()
                break
            }
            break;
    }
}

function remove(){
    if(screen.innerText.length == 0){
        reset()
    }
    screen.innerText = screen.innerText.substring(0, screen.innerText.length-1)

}

function reset(){
    screen.innerText = ''
    n = []
}