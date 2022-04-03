const btns = [
    {value: 0, id: 'btn0'},
    {value: 1, id: 'btn1'},
    {value: 'C', id: 'btnClr'},
    {value: '=', id: 'btnEql'},
    {value: '+', id: 'btnSum'},
    {value: '-', id: 'btnSub'},
    {value: '*', id: 'btnMul'},
    {value: '/', id: 'btnDiv'}
];

const btnsContainer = document.getElementById('btns');
btns.forEach(btn => {
    const button = document.createElement('button');
    button.innerHTML = btn.value;
    button.setAttribute('id', btn.id)
    btnsContainer.appendChild(button)
});


const res = document.getElementById('res');
const buttons = document.querySelectorAll('button');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const operands = [btn0, btn1];

operands.forEach(operand => {
    operand.addEventListener('click', () => {
        res.innerHTML += operand.innerHTML;
    });
});


// operators
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
const operators = [btnSum, btnSub, btnMul, btnDiv];
    operators.forEach(operator => {
            operator.addEventListener('click', () => {
                res.innerHTML += operator.innerHTML;
            })
    })

// specials
const btnClr = document.getElementById('btnClr');
btnClr.addEventListener('click', () => {
    res.innerHTML = '';
})

const btnEql = document.getElementById('btnEql');
btnEql.addEventListener('click', () => {
    let values = res.innerHTML;

    operators.forEach(operator => {
        if(values.includes(operator.innerHTML)){
        values = values.split(operator.innerHTML);
        if(values.length > 2){
            alert('Sorry, only two operands are allowed, The first two operands will be calculated')
        }
        values = (parseInt(values[0], 2) + parseInt(values[1], 2)).toString(2);
        res.innerHTML = values;
        }
        
    })
    
   
})