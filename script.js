document.addEventListener("DOMContentLoaded", function () {
        let firstCircle = document.getElementById("circle1")
        firstCircle.classList.add('active');
        
        let step1 = document.getElementById("step1");
        if(step1){
                step1.style.display = "flex";
        }
    });


document.getElementById('circle1').addEventListener('click', function() {
        var toHide1 = document.getElementById('step2');
        var toHide2 = document.getElementById('step4');
        var toHide3 = document.getElementById('step3');
        var toShow = document.getElementById('step1');

        toHide1.style.display = "none";
        toHide2.style.display = "none";
        toHide3.style.display = "none";
        toShow.style.display = "flex";


        circle1.classList.add('active');
        circle2.classList.remove('active');
        circle3.classList.remove('active');
        circle4.classList.remove('active');

        });

document.getElementById('circle2').addEventListener('click', function() {
        var toHide1 = document.getElementById('step1');
        var toHide2 = document.getElementById('step4');
        var toHide3 = document.getElementById('step3');
        var toShow = document.getElementById('step2');

        toHide1.style.display = "none";
        toHide2.style.display = "none";
        toHide3.style.display = "none";
        toShow.style.display = "flex";

        circle1.classList.remove('active');
        circle2.classList.add('active');
        circle3.classList.remove('active');
        circle4.classList.remove('active');
        });

document.getElementById('circle3').addEventListener('click', function() {
        var toHide1 = document.getElementById('step1');
        var toHide2 = document.getElementById('step4');
        var toHide3 = document.getElementById('step2');
        var toShow = document.getElementById('step3');

        toHide1.style.display = "none";
        toHide2.style.display = "none";
        toHide3.style.display = "none";
        toShow.style.display = "flex";

        circle1.classList.remove('active');
        circle2.classList.remove('active');
        circle3.classList.add('active');
        circle4.classList.remove('active');

        });

document.getElementById('circle4').addEventListener('click', function() {
        var toHide1 = document.getElementById('step1');
        var toHide2 = document.getElementById('step2');
        var toHide3 = document.getElementById('step3');
        var toShow = document.getElementById('step4');

        toHide1.style.display = "none";
        toHide2.style.display = "none";
        toHide3.style.display = "none";
        toShow.style.display = "flex";

        circle1.classList.remove('active');
        circle2.classList.remove('active');
        circle3.classList.remove('active');
        circle4.classList.add('active');

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
        const totalTime = document.getElementById("totaltime")
    
        selectItem.forEach(item => {
            item.addEventListener('click', function() {
                // Remove 'checkboxeffect' class from all items
                selectItem.forEach(otherItem => {
                    otherItem.classList.remove('checkboxeffect');
                });
    
                // Add 'checkboxeffect' class to the clicked item
                item.classList.add('checkboxeffect');
    
                // Update the content of the marked element
                const itemName = item.querySelector('h2').textContent;
                const itemPriceElement = item.querySelector('.firstP, .secondP, .thirdP');
                const itemPrice = itemPriceElement ? itemPriceElement.textContent : "";

                
                priceChoosed.textContent = itemPrice;
                if (itemPrice.toLowerCase().includes('yr')) {
                        // Do something specific if the itemName contains "arcade"
                        typeChoosed.textContent = itemName + "(Yearly)";
                        totalTime.textContent = "Total (per year)";
                    } else {
                        typeChoosed.textContent = itemName + "(Monthly)";
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




// checkbox click  step 3
// document.addEventListener("DOMContentLoaded", function() {
//         const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
//         const step4p1 = document.getElementById('step4p1');
//         const step4p2 = document.getElementById('step4p2');
//         const step4p3 = document.getElementById('step4p3');
//         const step4span1 = document.getElementById('step4span1');
//         const step4span2 = document.getElementById('step4span2');
//         const step4span3 = document.getElementById('step4span3');
//         const service1 = document.getElementById("service1");
//         const service2 = document.getElementById("service2");
//         const service3 = document.getElementById("service3");
//         const h2Selected1 = document.getElementById("h2Selected1");
//         const h2Selected2 = document.getElementById("h2Selected2");
//         const h2Selected3 = document.getElementById("h2Selected3");


//         serviceCheckboxes.forEach(checkbox => {
//                 checkbox.addEventListener('change', function() {
//                         if (checkbox.checked) {
//                                 checkbox.parentElement.classList.add('checkboxeffect');
//                                 if (step4p1.textContent == "" && step4span1.textContent == "") {
//                                         step4p1.textContent = h2Selected1.textContent;
//                                         step4span1.textContent = service1.textContent;
//                                 } else if (step4p2.textContent == "") {
//                                         step4p2.textContent = h2Selected1.textContent;
//                                         step4span2.textContent = service1.textContent;
//                                 } else {
//                                         step4p3.textContent = h2Selected1.textContent;
//                                         step4span3.textContent = service1.textContent;
//                                 }
//                                 if (step4p1.textContent == "" && step4span1.textContent == "") {
//                                         step4p1.textContent = h2Selected2.textContent;
//                                         step4span1.textContent = service2.textContent;
//                                 } else if (step4p2.textContent == "") {
//                                         step4p2.textContent = h2Selected2.textContent;
//                                         step4span2.textContent = service2.textContent;
//                                 } else {
//                                         step4p3.textContent = h2Selected2.textContent;
//                                         step4span3.textContent = service2.textContent;
//                                 }
//                                 if (step4p1.textContent == "" && step4span1.textContent == "") {
//                                         step4p1.textContent = h2Selected3.textContent;
//                                         step4span1.textContent = service3.textContent;
//                                 } else if (step4p2.textContent == "") {
//                                         step4p2.textContent = h2Selected3.textContent;
//                                         step4span2.textContent = service3.textContent;
//                                 } else {
//                                         step4p3.textContent = h2Selected3.textContent;
//                                         step4span3.textContent = service3.textContent;
//                                 }
                                
//                         } else {
//                                 checkbox.parentElement.classList.remove('checkboxeffect');
//                                 step4p1.textContent = "";
//                                 step4p2.textContent = "";
//                                 step4p3.textContent = "";
//                                 step4span1.textContent = "";
//                                 step4span2.textContent = "";
//                                 step4span3.textContent = "";
//                         }
//                   });
//          });
// });

// document.addEventListener("DOMContentLoaded", function() {
//         const toggleButton = document.getElementById("slider");
//         const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
//         const step4Elements = [
//             { p: document.getElementById('step4p1'), span: document.getElementById('step4span1') },
//             { p: document.getElementById('step4p2'), span: document.getElementById('step4span2') },
//             { p: document.getElementById('step4p3'), span: document.getElementById('step4span3') }
//         ];
//         const serviceHeaders = [
//             document.getElementById("h2Selected1"),
//             document.getElementById("h2Selected2"),
//             document.getElementById("h2Selected3")
//         ];
//         const services = [
//             document.getElementById("service1"),
//             document.getElementById("service2"),
//             document.getElementById("service3")
//         ];
    
//         serviceCheckboxes.forEach((checkbox, index) => {
//             checkbox.addEventListener('change', function() {
//                 const step4Element = step4Elements[index];
//                 const serviceHeader = serviceHeaders[index];
//                 const service = services[index];
    
//                 if (checkbox.checked) {
//                     checkbox.parentElement.classList.add('checkboxeffect');
//                     if (step4Element.p.textContent === "") {
//                         step4Element.p.textContent = serviceHeader.textContent;
//                         step4Element.span.textContent = service.textContent;
//                     }
//                 } else {
//                     checkbox.parentElement.classList.remove('checkboxeffect');
//                     step4Element.p.textContent = "";
//                     step4Element.span.textContent = "";
//                 }
//                 toggleButton.addEventListener('click', function() {
//                         if (checkbox.checked) {
//                                 checkbox.parentElement.classList.remove('checkboxeffect');
//                                 myCheckbox.click();
//                         }});
//                 })});
//             });
        

                


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
      
        
        
   
    

    document.addEventListener("DOMContentLoaded", function () {
        const priceChoosed = document.getElementById('priceChoosed');
        const step4span1 = document.getElementById('step4span1');
        const step4span2 = document.getElementById('step4span2');
        const step4span3 = document.getElementById('step4span3');
        const totalmoney = document.getElementById("totalmoney");
    
        // Function to extract and concatenate numbers from a string
        function extractAndConcatNumbers(text) {
            const numbers = text.match(/\d+/g); // Extract all numbers from the string
            if (numbers) {
                return numbers.map(Number).reduce((sum, num) => sum + num, 0);
            }
            return 0; // Return 0 if no numbers found
        }
    
        // Function to calculate the total
        function calculateTotal() {
            const value1 = extractAndConcatNumbers(priceChoosed.textContent);
            const value2 = extractAndConcatNumbers(step4span1.textContent);
            const value3 = extractAndConcatNumbers(step4span2.textContent);
            const value4 = extractAndConcatNumbers(step4span3.textContent);
    
            const total = value1 + value2 + value3 + value4;
            const formattedTotal = "$" + total;
            totalmoney.textContent = formattedTotal;
        }
    
        // Calculate the initial total
        calculateTotal();
    
        // Add event listeners to update the total when content changes
        priceChoosed.addEventListener('input', calculateTotal);
        step4span1.addEventListener('input', calculateTotal);
        step4span2.addEventListener('input', calculateTotal);
        step4span3.addEventListener('input', calculateTotal);
    });
    