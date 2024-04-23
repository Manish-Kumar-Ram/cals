
const getcolor=()=>{
    const randomnumber=Math.floor(Math.random()*16777215);
    const random='#'+randomnumber.toString(16);
    document.body.style.backgroundColor=random;
    document.getElementById('color-code').innerText=random;
    const colorCode = document.getElementById('color-code').innerText;
    navigator.clipboard.writeText(colorCode)
  
    }
    
    document.getElementById('btn').addEventListener('click',getcolor)
    getcolor();


// this is 2nd method

// const colorArrays = [
//     ['#ff7f50', '#87cefa', '#da70d6'],
//     ['#32cd32', '#6495ed', '#ff69b4'],
//     ['#ba55d3', '#cd5c5c', '#ffa500'],
//     ['#40e0d0', '#ff7f50', '#87cefa']
// ];

// function getRandomColorFromArray(colorArray) {
//     return colorArray[Math.floor(Math.random() * colorArray.length)];
// }

// const getcolor = () => {
//     const randomColorArray = getRandomColorFromArray(colorArrays);
//     const randomColor = getRandomColorFromArray(randomColorArray);
//     document.body.style.backgroundColor = randomColor;
//     document.getElementById('color-code').innerText = randomColor;
// }

// // Event listener for clicking the "Generate Colors" button
// document.getElementById('btn').addEventListener('click', getcolor);

// // Event listener for clicking the "Copy Color Code" button
// document.getElementById('color-codes').addEventListener('click', () => {
//     const colorCode = document.getElementById('color-code').innerText;
//     navigator.clipboard.writeText(colorCode)
//         .then(() => alert("Color code copied to clipboard"))
//         .catch(err => console.error('Failed to copy color code: ', err));
// });

// // Initial generation of color code when the page loads
// getcolor();
