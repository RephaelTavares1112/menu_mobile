var btnmobile = document.getElementById('btn-mobile')

btnmobile.addEventListener('click', Menu)
btnmobile.addEventListener('touchstart', Menu)
function Menu(event){
  if(event.type === 'touchstart') event.preventDefault()
  var nav = document.getElementById('nav')
  nav.classList.toggle('active')
  var active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
  if(active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  
  }
}