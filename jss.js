

function valid() {
    var fnameInput = document.getElementById('fname');
    var lnameInput = document.getElementById('lname');
    var cinInput = document.getElementById('cin');
    var addInput = document.getElementById('add');
    var emailInput = document.getElementById('email');

   
    if (!fnameInput || !lnameInput || !cinInput || !addInput || !emailInput) {
        console.error('One or more form elements could not be located..');
        return false;
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(fnameInput.value)) {
        alert('The first name should consist only of characters and be at least 3 characters long');
        fnameInput.focus();
        return false;
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(lnameInput.value)) {
        alert('The last name should consist only of characters and be at least 3 characters long');
        lnameInput.focus();
        return false;
    }

    if (!/^\d{8}$/.test(cinInput.value)) {
        alert('THE CIN should be a numerical value comprising precisely 8 digits..');
        cinInput.focus();
        return false;
    }

    return true;
}
