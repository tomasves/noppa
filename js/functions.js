document.getElementById('dice').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.querySelector('#dice img');
    diceImage.src = './images/dice' + randomNumber + '.png?'
});
