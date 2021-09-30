const actions = [...document.querySelectorAll('[data-action]')]

let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0;
let counterValue = document.querySelector(".counter-value")
counterValue.innerText = counter

actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;
        console.log(type);

        switch (type) {
            case 'increase':
                counter++;
                break;
            case 'decrease':
                if (counter > 0) counter--;
                break;
            case 'reset':
                counter = 0;
                break;
            case 'save':
                localStorage.setItem('counter', counter);
                break;
            case 'load':
                counter = localStorage.getItem('counter');
                break;
            case 'clear':
                localStorage.removeItem('counter');
                break;
        }

        counterValue.innerText = counter
    })
})