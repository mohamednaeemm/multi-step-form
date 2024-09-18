let itemSelected = false; // Track if an item is selected


// Get elements
const toggleBody = document.getElementById('toggleBody');
const toggleCircle = document.getElementById('toggleCircle');

let firstPrice = document.querySelector('.firstPrice');
let secondPrice = document.querySelector('.secondPrice');
let thirdPrice = document.querySelector('.thirdPrice');

let servicePrice1 = document.getElementById('servicePrice1');
let servicePrice2 = document.getElementById('servicePrice2');
let servicePrice3 = document.getElementById('servicePrice3');

// step4 head
let monthOrYear = document.querySelector('.month-year-head');
let monthOrYearPrice = document.querySelector('.month-year-price');

const changePlan = document.getElementById('change-plan')


function calculateTotal() {
    let total = 0;

    // Get the base price from .month-year-price
    const basePriceText = document.querySelector('.month-year-price')?.innerText;
    const basePrice = parseFloat(basePriceText.replace(/[^0-9.]/g, "")); 
    total += basePrice;

    // Get additional prices from .option-choosed spans
    document.querySelectorAll('.option-choosed span').forEach(span => {
        const priceText = span.innerText.replace(/[^0-9.]/g, "");
        const price = parseFloat(priceText); 
        total += price; 
    });

    // Update the total in the .main-total span
    const totalElement = document.querySelector('.main-total span');

    if(monthOrYearPrice.innerHTML.includes('yr')) {
        totalElement.innerText = `$${total}/yr`; 
    } else {
        totalElement.innerText = `$${total}/mo`; 
    }
}




changePlan.addEventListener('click', () => {
    currentStep = 2;
    showStep(currentStep);
});

const chosenOptionsContainer = document.querySelector('.main-box');

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
        const checkbox = choice.querySelector('.choice-checkbox');
        const h3 = choice.querySelector('.choice-label h3').innerText;
        const span = choice.querySelector('.service-price').innerText;

        // Toggle active class and checkbox
        choice.classList.toggle('active');
        checkbox.checked = !checkbox.checked;

        // Get all existing chosen options to find matching one
        const existingOptions = Array.from(chosenOptionsContainer.children);
        let existingOption = existingOptions.find(option => {
            const optionH4 = option.querySelector('h4');
            return optionH4 && optionH4.innerText === h3; // Check if optionH4 exists before reading innerText
        });

        if (checkbox.checked) {
            // If checkbox is checked, add the option to chosenOptionsContainer
            if (!existingOption) {
                const chosenDiv = document.createElement('div');
                chosenDiv.classList.add('option-choosed');
                chosenDiv.innerHTML = `<h4>${h3}</h4><span>${span}</span>`;
                chosenOptionsContainer.appendChild(chosenDiv);
            }
        } else {
            // If checkbox is unchecked, remove the option from chosenOptionsContainer
            if (existingOption) {
                chosenOptionsContainer.removeChild(existingOption);
            }
        }
        calculateTotal();
    });

});

// Toggle functionality form2
toggleBody.addEventListener('click', () => {
    document.querySelectorAll('.step2-item').forEach(item => {
            item.classList.remove('item-clicked');
            itemSelected = false;
    });

    // Remove selected choices step 3
    document.querySelectorAll('.choice').forEach(choice => {
            const checkbox = choice.querySelector('.choice-checkbox');
    
            // Toggle the 'active' class on the choice div
            choice.classList.remove('active');
    
            // Toggle checkbox checked/unchecked state
            checkbox.checked = false;
        
    });

    document.querySelectorAll('.option-choosed').forEach(choosed => {
        choosed.remove();
    });
    
     // Toggle the 'active' class on the body to trigger styles
    toggleBody.classList.toggle('toggleON');

  // Add more functionality if needed when toggled
    if (toggleBody.classList.contains('toggleON')) {
        firstPrice.innerHTML = '$90/yr';
        secondPrice.innerHTML = '$120/yr';
        thirdPrice.innerHTML = '$150/yr';

        servicePrice1.innerHTML = '+$10/yr';
        servicePrice2.innerHTML = '+$20/yr';
        servicePrice3.innerHTML = '+$20/yr';

        document.querySelectorAll('.step2-item').forEach(item => {
            // Create a new span for each item
            const spanToggle = document.createElement('span');
            spanToggle.innerHTML = '2 months free';
            spanToggle.classList.add('spanToggle');
            item.appendChild(spanToggle);
        });

    } else {
        firstPrice.innerHTML = '$9/mo';
        secondPrice.innerHTML = '$12/mo';
        thirdPrice.innerHTML = '$15/mo';

        servicePrice1.innerHTML = '+$1/mo';
        servicePrice2.innerHTML = '+$2/mo';
        servicePrice3.innerHTML = '+$2/mo';
        
        document.querySelectorAll('.step2-item').forEach(item => {
            // Find the span element inside the item
            const spanToggle = item.querySelector('.spanToggle');
            if (spanToggle) {
            item.removeChild(spanToggle); // Remove it if it exists
            }
        });
        
    }
});


// step2-choices

document.querySelectorAll('.step2-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.step2-item').forEach(
            i => i.classList.remove('item-clicked')); 
            // Remove class from all
        item.classList.add('item-clicked'); // Add class to the clicked item
        let totalMonthYear = document.querySelector('.main-total h3');
        monthOrYearPrice.innerHTML = item.children[2].innerHTML;

        if(monthOrYearPrice.innerHTML.includes('yr')){
            monthOrYear.innerHTML = `${item.children[1].innerHTML}(Yearly)`;
            totalMonthYear.innerHTML = 'Total (per Year)';
        } else {
            monthOrYear.innerHTML = `${item.children[1].innerHTML}(Monthly)`;
            totalMonthYear.innerHTML = 'Total (per Month)';
        }

        itemSelected = true;
        calculateTotal();
    });
});







let currentStep = 1; // Track the current step

// Validation functions
function validateStep1() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.innerText = 'Name is required';
        isValid = false;
    } else {
        nameError.innerText = ''; // Clear the error message if valid
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!emailPattern.test(email)) {
        emailError.innerText = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.innerText = ''; // Clear the error message if valid
    }

    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\+?\d{1,3}?\s?\d{1,4}?\s?\d{1,9}$/; // Simple phone number pattern
    if (!phonePattern.test(phone)) {
        phoneError.innerText = 'Please enter a valid phone number';
        isValid = false;
    } else {
        phoneError.innerText = ''; // Clear the error message if valid
    }

    return isValid;
}

function validateStep2() {
    if(!itemSelected) {
        alert('Please Select A Plan');
    } else {
        return itemSelected; // Step 2 is valid if an item is selected
    }
}

function validateStep3() {
    return true;
}

// Show specific step
function showStep(stepNumber) {
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('display'));
    document.querySelector(`.form-step${stepNumber}`).classList.add('display');
    document.querySelectorAll('.circle').forEach(step => step.classList.remove('active'));
    if(currentStep <= 4) {
        document.querySelector(`.step${stepNumber}`).classList.add('active');
    }
}

// Next button logic
document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep === 1 && validateStep1()) {
            currentStep++;
            showStep(currentStep);
        } else if (currentStep === 2 && validateStep2()) {
            currentStep++;
            showStep(currentStep);
        } else if (currentStep === 3 && validateStep3()) {
            currentStep++;
            showStep(currentStep);
        } else if (currentStep === 4) {
            currentStep++
            showStep(currentStep);
        }
    });
});

// Back button logic
document.querySelectorAll('.back').forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });
});
