// console.log('Added Utilities..')

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;

}

function showModal(title, message) {
    // Set the modal content
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal-message').innerText = message;
    document.getElementById('confirmation-btn').innerText = message;

    document.getElementById('my_modal_1').showModal(); // Ensure the modal is displayed
}




// Footer section

// function handelDonation(
//     const transactionDiv = document.createElement('div');


// )


//             const transactionDiv = document.createElement('div');
//             transactionDiv.classList.add(
//                 'border-2',
//                 'rounded-lg',
//                 'w-4/6',
//                 'mx-auto',
//                 'p-5',
//                 'space-y-5'
//             );

//             // Get the current date and time
//             const currentDate = new Date().toLocaleString();

//             // Add innerHTML for transaction details
//             transactionDiv.innerHTML = `
//                 <p class="text-lg font-bold">${donateMoney.toFixed(2)} Taka is Donated. ${donationName}</p>
//                 <p class="font-extralight">Date: ${currentDate} (Bangladesh Standard Time)</p>
//             `;

//             // Append the transaction to the transaction container
//             document.getElementById('transaction-container').appendChild(transactionDiv);

//             // Check if input field exists before clearing its value
//             const inputField = document.getElementById(donateInputFieldId);
//             if (inputField) {
//                 inputField.value = ''; // Clear the input field
//             } else {
//                 console.error('Input field with ID "' + donateInputFieldId + '" not found.');
//             }

//             // Show an alert for successful donation
//             alert('Donation successfully added!');
//         }

//         // Example call to the function (replace with actual values)
//         // addTransactionToHistory(500, 'For Charity', 'donateInputFieldId');
//     });
// })();


// const historyEntry = document.createElement('div');
//     historyEntry.classList.add('history-item', 'my-2', 'p-2', 'border', 'rounded', 'shadow');
//     historyEntry.innerHTML = `
//        <p><strong>Donation:</strong> ${donationAmount} BDT</p>
//         <p><strong>New Total:</strong> ${newAmount} BDT</p>
//         <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
//        `;
        
//         // Append the new transaction to the transaction container
//     document.getElementById('transaction-container').appendChild(historyEntry);