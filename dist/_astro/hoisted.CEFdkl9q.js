document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector('button[aria-controls="navbar-sticky"]'),o=document.getElementById("mobile-menu");n&&o?n.addEventListener("click",function(){o.classList.toggle("hidden")}):console.error("menuButton or mobileMenu is not found in the DOM.")});const s=["Secure, fast and reliable","Innovative technology for your business","Performance that inspires","Excellence in every solution","Engineered for efficiency"],e=document.getElementById("main-text");let t=0;function i(){e.classList.add("fade-out"),setTimeout(()=>{t=(t+1)%s.length,e.textContent=s[t],e.classList.remove("fade-out"),e.classList.add("fade-in"),setTimeout(()=>{e.classList.remove("fade-in")},1e3)},1e3)}setInterval(i,5e3);
