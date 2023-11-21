document.getElementById('loancalc').addEventListener('submit',(f)=>{
    f.preventDefault();

    const amount = parseInt(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('interest').value);
    const term = parseInt(document.getElementById('tenure').value);
    const ch = document.getElementById('choices')

    const resultv = document.getElementById('result');

    let interest = (amount*rate*term)/100;

    let result = 'Total interest:'+ interest.toFixed(2)+'<br>'
    resultv.innerHTML= result
    
    console.log(ch)

})