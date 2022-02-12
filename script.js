 /* menu */
 const primaryNav = document.querySelector('.nav-list');
 const navToggle = document.querySelector('.mobile-nav-toggle');
 const closeNav = document.querySelector('.container');
 
 navToggle.addEventListener('click', () => {
     const visibility = primaryNav.getAttribute('data-visible');
 
     if (visibility === "false") {
         primaryNav.setAttribute('data-visible', true);
         navToggle.setAttribute('aria-expanded', true );
         document.documentElement.style.overflow = 'hidden';
     } else if (visibility === "true") {
         primaryNav.setAttribute('data-visible', false);
         document.documentElement.style.overflow = 'auto';
         navToggle.setAttribute('aria-expanded', false );
     }  
 });