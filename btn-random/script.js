// document.addEventListener('DOMContentLoaded', function() {
//     const colorCards = document.querySelectorAll('.color');
//     const refreshBtn = document.querySelector('.refresh');
//     const loadingIndicator = document.querySelector('.loading');

//     // Function to generate a random hex color
//     function generateRandomColor() {
//         return '#' + Math.floor(Math.random()*16777215).toString(16);
//     }

//     // Function to update card color and hex value
//     function updateColor(card) {
//         const box = card.querySelector('.box');
//         const hexValue = card.querySelector('.hex-value');

//         // Generate random color
//         const randomColor = generateRandomColor();

//         // Update card color
//         box.style.backgroundColor = randomColor;

//         // Update hex value text
//         hexValue.textContent = randomColor;
//     }

//     // Function to update button color
//     function updateButtonColor(button) {
//         button.style.backgroundColor = generateRandomColor();
//     }

//     // Add click event listener to the "Refresh" button
//     refreshBtn.addEventListener('click', function() {
//         // Show loading indicator
//         loadingIndicator.style.display = 'block';

//         // Update button color
//         updateButtonColor(refreshBtn);

//         // Simulate loading time
//         setTimeout(function() {
//             // Iterate through each card to update color
//             colorCards.forEach(function(card) {
//                 updateColor(card);
//             });

//             // Hide loading indicator
//             loadingIndicator.style.display = 'none';
//         }, 1500); // Adjust the delay time as needed (in milliseconds)
//     });

//     // Add click event listeners to each card's "generate" button
//     colorCards.forEach(function(card) {
//         const generateBtn = card.querySelector('.btn button:nth-child(1)');
//         generateBtn.addEventListener('click', function() {
//             updateColor(card);
//         });
//     });

//     // Function to copy hex value to clipboard
//     function copyToClipboard(text) {
//         const textField = document.createElement('textarea');
//         textField.innerText = text;
//         document.body.appendChild(textField);
//         textField.select();
//         document.execCommand('copy');
//         textField.remove();
//     }

//     // Add click event listener to each card's "copy-color" button
//     colorCards.forEach(function(card) {
//         const copyBtn = card.querySelector('.btn button:nth-child(2)');
//         copyBtn.addEventListener('click', function() {
//             const hexValue = card.querySelector('.hex-value').textContent;
//             copyToClipboard(hexValue);
//             // Change button text temporarily to indicate copying
//             copyBtn.textContent = 'Copied!';
//             setTimeout(function() {
//                 copyBtn.textContent = 'Copy Color';
//             }, 1000); // Reset button text after 1 second
//         });
//     });
// });



// const allowedcolor='0123456789abcdef'
// let color='#';
// const colorCards = document.querySelectorAll('.color');
// const btns=document.querySelector('.btn');

// btns.addEventListener('click',genrate);
// function genrate(){
//     color='#';
//     for(let i=0; i<6; i++){
//         color+=allowedcolor[Math.floor(Math.random()*allowedcolor.length)];

//     }
// }
   
//     document.btns.style.backgroundColor=color;


document.addEventListener('DOMContentLoaded', function() {
    const allowedColor = '0123456789abcdef';
    const colorCards = document.querySelectorAll('.color');

    // Function to generate a random hex color
    function generateRandomColor() {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += allowedColor[Math.floor(Math.random() * allowedColor.length)];
        }
        return color;
    }

    // Function to update card color and hex value
    function updateColor(card) {
        const box = card.querySelector('.box');
        const hexValue = card.querySelector('.hex-value');
        const generatedColor = generateRandomColor();

        // Update card color
        box.style.backgroundColor = generatedColor;

        // Update hex value text
        hexValue.textContent = generatedColor;

        // Set the color to the copy button's dataset
        const copyBtn = card.querySelector('.btn button:nth-child(2)');
        copyBtn.dataset.color = generatedColor;
    }

    // Function to copy hex value to clipboard
    function copyToClipboard(text) {
        const textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    }

    // Add click event listeners to each card's "generate" button
    colorCards.forEach(function(card) {
        const generateBtn = card.querySelector('.btn button:nth-child(1)');
        generateBtn.addEventListener('click', function() {
            updateColor(card);
        });
    });

    // Add click event listener to each card's "copy-color" button
    colorCards.forEach(function(card) {
        const copyBtn = card.querySelector('.btn button:nth-child(2)');
        copyBtn.addEventListener('click', function() {
            const colorToCopy = copyBtn.dataset.color;
            copyToClipboard(colorToCopy);
            // Change button text temporarily to indicate copying
            copyBtn.textContent = 'Copied!';
            setTimeout(function() {
                copyBtn.textContent = 'Copy Color';
            }, 1000); // Reset button text after 1 second
        });
    });

    // Function to handle "Refresh" button click
    const refreshBtn = document.querySelector('.refresh');
    refreshBtn.addEventListener('click', function() {
        colorCards.forEach(function(card) {
            updateColor(card);
        });
    });
});
