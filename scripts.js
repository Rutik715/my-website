function askLove() {
    document.querySelector('#loveQuestion').style.display = 'block';
}

function responseLove(answer) {
    let message = document.querySelector('.message');
    if (answer === 'yes') {
        message.textContent = "Awww, that's so sweet! I love you too!";
    } else {
        message.textContent = "Oh, that's okay! You're still special to me!";
    }
    document.querySelector('#cuteMessage').style.display = 'block';
    showFlowers();
}

function showFlowers() {
    // Flower shower animation (simple implementation)
    document.body.style.background = "url('flowers.gif') center/cover no-repeat";
}
