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
    const name = `<span class=".info">${json['name']}</span>`
    const artist = `<span class=".info">${json['artist']['#text']}</span>`
    if (json['@attr']?.['nowplaying'] == 'true') {
      track.innerHTML = `Michael is currently listening to ${name} by ${artist}`
    } else {
      track.innerHTML = `Michael most recently listened to ${name} by ${artist}`
    }
  })
}
