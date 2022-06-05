const topMenu = document.getElementById('top-menu')
const toogleTopMenuIcon = document.getElementById('toggle-top-menu-icon')


document.addEventListener('click' , (e) => {
  if(toogleTopMenuIcon.contains(e.target)){
    //Click toggle top menu icon
    topMenu.classList.toggle('top-menu-expanded')
    topMenu.classList.toggle('hidden')
  }
  else{
    //click outside top menu icon
    if(topMenu.classList.contains('top-menu-expanded')){
      topMenu.classList.remove('top-menu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})

