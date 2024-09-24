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

function showSectionById(id){
    document.getElementById('main-donate').classList.add('hidden');
    document.getElementById('foot-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}




