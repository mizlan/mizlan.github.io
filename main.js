window.onload = () => {
  const bongo = document.querySelector('.bongo')
  setInterval(() => {
    bongo.style.transform = 'scale(1.07)'
    setTimeout(() => {
      bongo.style.removeProperty('transform');
    }, 300)
  }, 5000)
}
