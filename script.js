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




        // toggle button.

document.addEventListener("DOMContentLoaded", function() {
        const toggleButton = document.getElementById("slider");
        const spanToggles = document.querySelectorAll(".spantoggle"); // Use querySelectorAll to get all elements with the class
        const selectItems = document.getElementsByClassName("select-item");
        const firstP = document.querySelector(".firstP");
        const secondP = document.querySelector(".secondP");
        const thirdP = document.querySelector(".thirdP");
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
                        } else {
                        firstP.textContent = "$9/mo";
                        secondP.textContent = "$12/mo";
                        thirdP.textContent = "$15/mo";
                        }
        
                }}})});
        


        
        
        
        
        