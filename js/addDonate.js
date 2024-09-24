function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showModal(title, message) {
    // Set the modal content
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = message;
    document.getElementById('confirmation-btn').innerText = "Close Confirmation"; // Updated to correct text

    document.getElementById('my_modal_1').showModal(); // Ensure the modal is displayed
}

// Updated function to add a transaction history entry
function addTransactionToHistory(donationAmount, destination) {
    const historyEntry = document.createElement('div');
    historyEntry.classList.add('history-item', 'my-2', 'p-2', 'border-2', 'rounded', 'shadow' ,'px-5') , 'mx-auto';
    historyEntry.innerHTML = `
        <p>${donationAmount} BDT - ${destination}</p>
        <p>Date: ${new Date().toLocaleString()} (Bangladesh Standard Time)</p>
    `;
    // Append the new transaction to the transaction container
    document.getElementById('transaction-container').appendChild(historyEntry);
}

// For Noakhali card
document.getElementById('btn-donate-money').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-donate-money');

    if (!isNaN(donateMoney) && donateMoney >= 0 && /^\d+(\.\d+)?$/.test(donateMoney)) {
        const balance = getTextFieldValueById('donation-balance');
        const newDonateMoney = balance + donateMoney;

        const myAccountBalance = getTextFieldValueById('account-balance');
        const updateAccountBalance = myAccountBalance - donateMoney;

        document.getElementById('donation-balance').innerText = newDonateMoney;
        document.getElementById('account-balance').innerText = updateAccountBalance;

        // Show success modal
        showModal('Success!', `You have successfully donated ${donateMoney.toFixed(2)}!`);

        // Add transaction history with destination
        addTransactionToHistory(donateMoney, "Donate for Flood at Noakhali, Bangladesh ");

    } else {
        alert("Invalid");
    }
});

document.getElementById('confirmation-btn').addEventListener('click', function () {
    document.getElementById('my_modal_1').close();
    console.log("Confirmation modal closed");
});

// For Feni Card
document.getElementById('btn-donate-money-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoneyFeni = getInputFieldValueById('input-donate-money-feni');

    if (!isNaN(donateMoneyFeni) && donateMoneyFeni >= 0 && /^\d+(\.\d+)?$/.test(donateMoneyFeni)) {
        const balanceFeni = getTextFieldValueById('donation-balance-feni');
        const newDonateMoneyf = balanceFeni + donateMoneyFeni;

        const myAccountBalance = getTextFieldValueById('account-balance');
        const updateAccountBalancef = myAccountBalance - donateMoneyFeni;

        document.getElementById('donation-balance-feni').innerText = newDonateMoneyf;
        document.getElementById('account-balance').innerText = updateAccountBalancef;

        // Show success modal
        showModal('Success!', `You have successfully donated ${donateMoneyFeni.toFixed(2)}!`);

        // Add transaction history with destination
        addTransactionToHistory(donateMoneyFeni, "Donate for Flood at Feni Bangladesh");

    } else {
        alert("Invalid");
    }
});

// For Student Section
document.getElementById('btn-donate-money-student').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoneyStudent = getInputFieldValueById('input-donate-money-student');

    if (!isNaN(donateMoneyStudent) && donateMoneyStudent >= 0 && /^\d+(\.\d+)?$/.test(donateMoneyStudent)) {
        const balanceStudent = getTextFieldValueById('donation-balance-student');
        const newDonateMoneyS = balanceStudent + donateMoneyStudent;

        const myAccountBalance = getTextFieldValueById('account-balance');
        const updateAccountBalanceS = myAccountBalance - donateMoneyStudent;

        document.getElementById('donation-balance-student').innerText = newDonateMoneyS;
        document.getElementById('account-balance').innerText = updateAccountBalanceS;

        // Show success modal
        showModal('Success!', `You have successfully donated ${donateMoneyStudent.toFixed(2)}!`);

        // Add transaction history with destination
        addTransactionToHistory(donateMoneyStudent, "Donate for Flood at Quata Movment, Bangladesh");

    } else {
        alert("Invalid");
    }
});

// Blog button
document.getElementById('btn-blog').addEventListener("click", function() {
    window.location.href = "./blog.html";
});


// show 

document.getElementById('btn-donate')
    .addEventListener('click', function(){
        showSectionById('main-donate');
        
        document.getElementById('btn-donate').classList.add('bg-[#B4F461]');
        document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    })
document.getElementById('btn-history')
    .addEventListener('click', function(){
        showSectionById('foot-history');
        
        document.getElementById('btn-history').classList.add('bg-[#B4F461]');
        document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
        

    })



