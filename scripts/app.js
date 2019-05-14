//=========================================Adding events here=================================================//

// Listening for the submit button here

document.querySelector('#loadForm').addEventListener('submit',(e) => {

    // to prevent the default behaviour here
    e.preventDefault();

    // getting the form values here
    const amount = document.querySelector('#amount').value;
    const interest = document.querySelector('#interest').value;
    const years = document.querySelector('#years').value;
    const monthly = document.querySelector('#monthly');
    const totalPay = document.querySelector('#total-pay');
    const totalInt = document.querySelector('#total-int');

    const value =parseFloat(amount);
    const calInt = parseFloat(interest) / 100 / 12;
    const calPay = parseFloat(years) * 12;
    
    

    

    console.log('amount.value');
})