const playPicts = document.querySelectorAll('.play__pict');

playPicts.forEach(playPict => {
    playPict.addEventListener('click', () => {
        playPict.classList.toggle('play__pict_reverse')
    })
})