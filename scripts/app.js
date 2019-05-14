//=========================================Adding events here=================================================//

// Listening for the submit button here

document.querySelector('#loadForm').addEventListener('submit', (e) => {
    // to prevent the default behaviour here
    e.preventDefault();

    // hide res
    document.getElementById('results').style.display = 'none';

    // show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calRESULT,2500)

})

const calRESULT = () => {


    // getting the form values here
    const amount = document.querySelector('#amount').value;
    const interest = document.querySelector('#interest').value;
    const years = document.querySelector('#years').value;
    const monthly = document.querySelector('#monthly');
    const totalPay = document.querySelector('#total-pay');
    const totalInt = document.querySelector('#total-int');


    // getting values here
    const value = parseFloat(amount);
    const calInt = parseFloat(interest) / 100 / 12;
    const calPay = parseFloat(years) * 12;

    // calculating monthly value here
    const x = Math.pow(1 + calInt, calPay);
    const month = (value * x * calInt) / (x - 1);

    if (isFinite(month)) {

        monthly.value = month.toFixed(2);
        totalPay.value = (month * calPay).toFixed(2);
        totalInt.value = ((month * calPay) - value).toFixed(2);
    
        // show res
    document.getElementById('results').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';




    }
    else {
        showError('ERROR! Please Enter Again!');
    }


    console.log('calculating...');

}

// show error here
const showError = (error) => {

    // creating div here
    const errDiv = document.createElement('div');

    // adding class here
    errDiv.className = 'alert alert-danger';

    // adding text here
    errDiv.textContent = error;

    // getting the element to insert the div
    const card = document.querySelector('.card');
    const head = document.querySelector('.heading');

    card.insertBefore(errDiv, head);

    // claring the error after seconds

    setTimeout(clearDiv, 3500);

}


const clearDiv = () => {
    document.querySelector('.alert').remove();
}