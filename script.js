const loader=document.getElementById('loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),450));

const nav=document.getElementById('navbar');
const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>{nav?.classList.toggle('scrolled',window.scrollY>30);topBtn?.classList.toggle('show',window.scrollY>500)});
if(topBtn) topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

const menu=document.getElementById('menuBtn');
const links=document.getElementById('navLinks');
if(menu&&links) menu.onclick=()=>links.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>links?.classList.remove('open'));

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
}else{
  document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));
}

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const arrivalDate=new Date('2027-09-04T10:00:00');
function countdown(){
  let d=Math.max(0,arrivalDate-new Date());
  const days=Math.floor(d/86400000); d%=86400000;
  const hours=Math.floor(d/3600000); d%=3600000;
  const minutes=Math.floor(d/60000);
  const seconds=Math.floor((d%60000)/1000);
  const set=(id,val)=>{const el=document.getElementById(id);if(el) el.textContent=String(val).padStart(2,'0')};
  set('days',days);set('hours',hours);set('minutes',minutes);set('seconds',seconds);
}
countdown();
setInterval(countdown,1000);
