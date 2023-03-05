const resp = fetch('https://recenttrack-mizlan.vercel.app/api/handler').then((res) => res.json())

window.onload = () => {
  const bongo = document.querySelector('.bongo')
  setInterval(() => {
    bongo.style.transform = 'scale(1.07)'
    setTimeout(() => {
      bongo.style.removeProperty('transform');
    }, 300)
  }, 5000)

  const track = document.querySelector('#track p')
  resp.then((json) => {
    const name = `<span class="info">${json['name']}</span>`
    const artist = `<span class="info">${json['artist']['#text']}</span>`
    if (json['@attr']?.['nowplaying'] == 'true') {
      track.innerHTML = `<span class="music-line">Michael is currently listening to</span> <span class="music-line">${name} by ${artist}</span>`
    } else {
      track.innerHTML = `<span class="music-line">Michael most recently listened to</span> <span class="music-line">${name} by ${artist}</span>`
    }
  })
}
