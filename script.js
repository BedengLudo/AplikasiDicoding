document.addEventListener("DOMContentLoaded", function() {
    console.log("Website sekolah telah dimuat!");
});

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');

    // Toggle the 'open' class on both sidebar and main content
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('open');
}

// document.getElementById('rollDice').addEventListener('click', function() {
//     // Generate a random number between 1 and 6
//     const diceRoll = Math.floor(Math.random() * 6) + 1;
//     document.getElementById('diceResult').innerText = `Hasil Dadu: ${diceRoll}`;
// });

// // Example of moving a token
// function moveToken(tokenId, steps) {
//     // Assuming tokenId corresponds to a cell ID
//     let currentCell = document.getElementById(tokenId);
//     let nextCell = document.getElementById(`cell-${(parseInt(tokenId.split('-')[1]) + steps) % 100}`);
//     if (nextCell) {
//         // Move token (here we're just changing the background color for simplicity)
//         currentCell.style.backgroundColor = '#ddd';
//         nextCell.style.backgroundColor = '#ff0';
//     }
// }
