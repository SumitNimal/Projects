const ob = {
    expr: '',
}
let errorActive = 0;
function help(num) {
    paraElement = document.querySelector('.screen');
    if (errorActive === 1) {
        errorActive = 0;
        ob.expr = '';
    }
    ob.expr += num;
    paraElement.innerHTML = `<p class="evaluate">${ob.expr}</p>`;
}
function solve() {
    try {
        ob.expr = eval(ob.expr);
    } catch (error) {
        ob.expr = 'ERROR';
        errorActive = 1;
    }
    paraElement = document.querySelector('.screen');
    paraElement.innerHTML = `<p class="evaluate">${ob.expr}</p>`;
}