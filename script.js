document.addEventListener("DOMContentLoaded", function () {
        let firstCircle = document.getElementById("circle1")
        firstCircle.classList.add('active');
        
        let step1 = document.getElementById("step1");
        if(step1){
                step1.style.display = "flex";
        }
    });




        // submit1

document.getElementById("submit1").addEventListener("click", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email"); 
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const phoneError = document.getElementById('phone-error');

        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';

        let isValid = true; // Initialize isValid

        if (nameInput.value.trim() === '') {
                nameError.textContent = 'This field is required.';
                isValid = false;
        }

        if (emailInput.value.trim() === '') {
                emailError.textContent = 'This field is required.';
                isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Enter a valid Email.';
                isValid = false;
        }

        if (phoneInput.value.trim() === '') {
                phoneError.textContent = 'This field is required.';
                isValid = false;
        } else if (!isValidPhone(phoneInput.value.trim())) {
                phoneError.textContent = '11 Numbers Required';
                isValid = false;
        }

        if (isValid) {
                step1.style.display = "none";
                step2.style.display = "flex";
                circle1.classList.remove('active');
                circle2.classList.add('active');
        } else {
                event.preventDefault();
        }
        });

        function isValidEmail(email) {
        const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
        return emailPattern.test(email);
        }
        function isValidPhone(phone) {
        const phonePattern = /[0-9]{11}/;
        return phonePattern.test(phone);
        }

        // Back Button

document.getElementById("back1").addEventListener("click", function () {
                step1.style.display = "flex";
                step2.style.display = "none";
                circle1.classList.add('active');
                circle2.classList.remove('active');
        });


document.getElementById("back2").addEventListener("click", function () {
        step2.style.display = "flex";
        step3.style.display = "none";
        circle2.classList.add('active');
        circle3.classList.remove('active');
});


document.getElementById("back3").addEventListener("click", function () {
        step3.style.display = "flex";
        step4.style.display = "none";
        circle3.classList.add('active');
        circle4.classList.remove('active');
});

document.getElementById("backTwice").addEventListener("click", function () {
        step2.style.display = "flex";
        step4.style.display = "none";
        circle2.classList.add('active');
        circle4.classList.remove('active');
});








document.addEventListener('DOMContentLoaded', function () {
        const clickable = document.querySelectorAll('.clickable');
        const submitButton2 = document.getElementById('button2');
        const step2 = document.getElementById('step2');
        const submitButton3 = document.getElementById("button3");
        const submitButton4 = document.getElementById("button4");
        const finalthank = document.getElementById("finalthank");
        const toggleButton = document.getElementById("slider");

      
        clickable.forEach(function (selectItem) {
          selectItem.addEventListener('click', function () {

            submitButton2.addEventListener('click', function () {
                        step3.style.display = "flex";
                        step2.style.display = "none";
                        circle3.classList.add('active');
                        circle2.classList.remove('active');
                        
                })});
        });
        toggleButton.addEventListener('click', function () {

                  submitButton2.addEventListener('click', function () {
                              step2.style.display = "flex";
                              step3.style.display = "none";
                              circle2.classList.add('active');
                              circle3.classList.remove('active');
                              
                      })});
        
        submitButton3.addEventListener('click', function () {
                step4.style.display = "flex";
                step3.style.display = "none";
                circle4.classList.add('active');
                circle3.classList.remove('active');
        });
        submitButton4.addEventListener('click', function () {
                finalthank.style.display = "flex";
                step4.style.display = "none";
                circle4.classList.remove('active');
        });
});
        




        // toggle button.

document.addEventListener("DOMContentLoaded", function() {
        const toggleButton = document.getElementById("slider");
        const spanToggles = document.querySelectorAll(".spantoggle"); // Use querySelectorAll to get all elements with the class
        const selectItems = document.getElementsByClassName("select-item");
        const firstP = document.querySelector(".firstP");
        const secondP = document.querySelector(".secondP");
        const thirdP = document.querySelector(".thirdP");
        const service1 = document.getElementById("service1");
        const service2 = document.getElementById("service2");
        const service3 = document.getElementById("service3");
        let clickCount = 0;
        
        toggleButton.addEventListener("click", function() {
                console.log("clicked");
                clickCount++;
        
                for (let i = 0; i < spanToggles.length; i++) {
                        const spanToggle = spanToggles[i];
        
                        if (clickCount % 2 !== 0) {
                                spanToggle.style.display = "inline";
                                } else {
                                spanToggle.style.display = "none";
                                }
                                
        
                for (let i = 0; i < selectItems.length; i++) {
                        if (clickCount % 2 !== 0) {
                        selectItems[i].style.height = "11rem";
                        } else {
                        selectItems[i].style.height = "10rem";
                        }
                        
                if (clickCount % 2 !== 0) {
                        firstP.textContent = "$90/yr";
                        secondP.textContent = "$120/yr";
                        thirdP.textContent = "$150/yr";
                        service1.textContent = "+$10/yr";
                        service2.textContent = "+$20/yr";
                        service3.textContent = "+$20/yr";
                        } else {
                        firstP.textContent = "$9/mo";
                        secondP.textContent = "$12/mo";
                        thirdP.textContent = "$15/mo";
                        service1.textContent = "+$1/mo";
                        service2.textContent = "+$2/mo";
                        service3.textContent = "+$2/mo";
                        }
        
                }}})});
        
// Step 2 
document.addEventListener("DOMContentLoaded", function() {
        const selectItem = document.querySelectorAll('.select-item');
        const typeChoosed = document.getElementById('typeChoosed');
        const priceChoosed = document.getElementById('priceChoosed');
        const toggleButton = document.getElementById("slider");
        const totalTime = document.getElementById("totaltime");
        const totalmoney = document.getElementById("totalmoney");
        const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
    
        selectItem.forEach(item => {
            item.addEventListener('click', function() {
                // Remove the effect first from all then add to the clicked one.
                selectItem.forEach(otherItem => {
                    otherItem.classList.remove('checkboxeffect');
                    totalmoney.textContent = "";
                });
                serviceCheckboxes.forEach((checkbox, index) => {
                        checkbox.checked = false; // Uncheck the checkbox
                        checkbox.parentElement.classList.remove('checkboxeffect');
                        document.getElementById('step4p1').textContent = "";
                        document.getElementById('step4p2').textContent = "";
                        document.getElementById('step4p3').textContent = "";
                        document.getElementById('step4span1').textContent = "";
                        document.getElementById('step4span2').textContent = "";
                        document.getElementById('step4span3').textContent = "";
                        
                });


                item.classList.add('checkboxeffect');
                const itemName = item.querySelector('h2').textContent;
                const itemPriceElement = item.querySelector('.firstP, .secondP, .thirdP');
                const itemPrice = itemPriceElement ? itemPriceElement.textContent : "";

                
                priceChoosed.textContent = itemPrice;
                if (itemPrice.toLowerCase().includes('yr')) {
                        typeChoosed.textContent = itemName + "(Yearly)";
                        totalTime.textContent = "Total (per year)";
                        totalmoney.textContent = `$ ${parseInt(item.textContent.match(/\d+/))}/yr`;
                    } else {
                        typeChoosed.textContent = itemName + "(Monthly)";
                        totalmoney.textContent = `$ ${parseInt(item.textContent.match(/\d+/))}/mo`;
                    }
                toggleButton.addEventListener("click", function() {
                        selectItem.forEach(otherItem => {
                                otherItem.classList.remove('checkboxeffect');
                                priceChoosed.textContent = "";
                                typeChoosed.textContent = "";
                                
                        });
                        
                        
                });
            });
        });
});

                        


document.addEventListener("DOMContentLoaded", function() {
        const toggleButton = document.getElementById("slider");
        const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
        const step4Elements = [
            { p: document.getElementById('step4p1'), span: document.getElementById('step4span1') },
            { p: document.getElementById('step4p2'), span: document.getElementById('step4span2') },
            { p: document.getElementById('step4p3'), span: document.getElementById('step4span3') }
        ];
        const serviceHeaders = [
            document.getElementById("h2Selected1"),
            document.getElementById("h2Selected2"),
            document.getElementById("h2Selected3")
        ];
        const services = [
            document.getElementById("service1"),
            document.getElementById("service2"),
            document.getElementById("service3")
        ];

        
    
        toggleButton.addEventListener('click', function() {
            serviceCheckboxes.forEach((checkbox, index) => {
                checkbox.checked = false; // Uncheck the checkbox
                checkbox.parentElement.classList.remove('checkboxeffect');
    
                const step4Element = step4Elements[index];
                step4Element.p.textContent = "";
                step4Element.span.textContent = "";
            });
        });
    
        serviceCheckboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('change', function() {
                const step4Element = step4Elements[index];
                const serviceHeader = serviceHeaders[index];
                const service = services[index];
    
                if (checkbox.checked) {
                    checkbox.parentElement.classList.add('checkboxeffect');
                    if (step4Element.p.textContent === "") {
                        step4Element.p.textContent = serviceHeader.textContent;
                        step4Element.span.textContent = service.textContent;
                    }
                } else {
                    checkbox.parentElement.classList.remove('checkboxeffect');
                    step4Element.p.textContent = "";
                    step4Element.span.textContent = "";
                }
            });
        });
    });
      
        
        

    
    
    function calculateTotal() {
        let totalSum = 0;
        const totalmoney = document.getElementById('totalmoney');
        const priceChoosed = document.getElementById("priceChoosed");
        
        totalmoney.textContent = '0';
        
        // event listeners to checkboxes
        const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
        
        serviceCheckboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('change', function() {
                // Initialize the total sum with the price from priceChoosed
                totalSum = parseInt(priceChoosed.textContent.match(/\d+/)) || 0;
        
                // Iterate over all checkboxes to calculate the total sum again
                serviceCheckboxes.forEach((cb, i) => {
                    const servicePriceText = document.getElementById(`service${i + 1}`).textContent;
                    const servicePriceMatch = servicePriceText.match(/\+\$(\d+)/);
        
                    if (cb.checked && servicePriceMatch) {
                        const servicePrice = parseInt(servicePriceMatch[1]);
                        totalSum += servicePrice;
                    }
                });
        
                // Concatenate the total sum and the price from priceChoosed as strings
                const concatenatedValue = totalSum.toString();
                if (priceChoosed.textContent.toLowerCase().includes('yr')) {
                        totalmoney.textContent = "$" + concatenatedValue + '/yr'; 
                }else {
                        totalmoney.textContent = "$" + concatenatedValue + '/mo'; 
                }
            });
        });
    }
    
    calculateTotal();
    

    


    