
/* Expand menu */
const topMenu = document.getElementById('top-menu')
const toogleTopMenuIcon = document.getElementById('toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toogleTopMenuIcon.contains(e.target)) {
    //Click toggle top menu icon
    topMenu.classList.toggle('top-menu-expanded')
    topMenu.classList.toggle('hidden')
  }
  else {
    //click outside top menu icon
    if (topMenu.classList.contains('top-menu-expanded')) {
      topMenu.classList.remove('top-menu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})

/* return to top page */
var toTopButton = document.getElementById("to-top-button");
const doc = document.getElementById('root')
doc.addEventListener('scroll', () => {

  if (doc.scrollTop > 200) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
})

function goToTop() {
  doc.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToTop(duration) {
  // cancel if already on top
  if (doc.scrollTop === 0) return;

  const totalScrollDistance = doc.scrollTop;
  let scrollY = totalScrollDistance, oldTimestamp = null;

  function step(newTimestamp) {
    if (oldTimestamp !== null) {
      // if duration is 0 scrollY will be -Infinity
      scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
      if (scrollY <= 0) return doc.scrollTop = 0;
      doc.scrollTop = scrollY;
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
  console.log('ok');
}
