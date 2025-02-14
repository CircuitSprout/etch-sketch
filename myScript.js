const squares = document.querySelectorAll('.container div');
squares.forEach(square => {
    addEventListener9('mouseover', () => {
        square.style.backgroundColor = 'lightskyblue';
    });
});