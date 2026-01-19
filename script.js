const sections = document.querySelectorAll('.fade');

window.addEventListener('scroll',()=>{
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('show');
    }
  });
});
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = '#0b0f19';
    nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.4)';
  } else {
    nav.style.background = 'transparent';
    nav.style.boxShadow = 'none';
  }
});
