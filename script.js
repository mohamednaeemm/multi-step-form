const steps = document.querySelectorAll('.step');

steps.forEach(step => {
        step.addEventListener('click', () => {
        // Hide all step contents
        document.querySelectorAll('.step-content').forEach(content => {
                content.classList.remove('active-step');
        });

        // Show the clicked step's content
        const clickedStep = step.querySelector('.step-content');
        clickedStep.classList.add('active-step');
        });
});


// .step-content {
//         display: none;
//         margin-top: 10px;
//         font-size: 14px;
//     }

//     .active-step {
//         display: block;
//     }
// </style>
// </head>
// <body>
// <div class="steps">
//     <div class="step" data-step="1">
//         <div class="circle">1</div>
//         <div class="step-description">Step 1:</div>
//         <div class="step-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//         <div class="step-content">Additional content for Step 1.</div>
//     </div>