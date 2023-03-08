// const resp = fetch('https://recenttrack-mizlan.vercel.app/api/handler').then((res) => res.json())
const resp = fetch('https://recenttrack.vercel.app/api/handler').then((res) => res.json())

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
    console.log(json);
    if (Math.random() < 0.5) {
    // if (json.device == 'Michael\'s AirPods Pro') {
      document.querySelector('#airpods').style.display = 'block'
    } else {
      document.querySelector('#laptop').style.display = 'block'
    }
    const name = `<span class="info"><a href="${json.songUrl}">${json.title}</a></span>`
    const artist = `<span class="info">${json.artist}</span>`
    if (json.isPlaying) {
      // todo try adding span music line to "by artist"
      track.innerHTML = `<span class="music-line">Michael is currently listening to</span> <span class="music-line">${name} by ${artist}</span>`
    } else {
      track.innerHTML = `<span class="music-line">Michael most recently listened to</span> <span class="music-line">${name} by ${artist}</span>`
    }
  })
}
