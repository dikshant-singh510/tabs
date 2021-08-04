let btn = document.querySelectorAll('.btn')
let tabs = document.querySelectorAll('.tab')
let nav = document.querySelector('#nav')

nav.addEventListener('click', (e) => {
  let id = e.target.dataset.id

  if (id) {
    btn.forEach((btn) => {
      btn.classList.remove('active')
      e.target.classList.add('active')
    })
  }

  tabs.forEach((tabs) => {
    tabs.classList.remove('visible')
  })
  document.getElementById(id).classList.add('visible')

})