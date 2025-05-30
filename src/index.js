window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const about = document.getElementById('about');
    const header = document.getElementById('header')
    if (window.scrollY > 50) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-black');
    } else {
      navbar.classList.remove('bg-black');
      navbar.classList.add('bg-transparent');
    }
    if(window.scrollY > 150){
        about.classList.add('fade-reveal');
        about.classList.remove('hidden');
        about.classList.remove('mb-56')
        
    }
    else{
        about.classList.remove('fade-reveal');
    }
  });

  const setFullHeight = () => {
    const header = document.getElementById('header');
    header.style.height = `${window.innerHeight}px`;
  };
  const setFullWidth = () => {
    const header = document.getElementById('header'); 
    const about= document.getElementById('about');
    const contact= document.getElementById('contact');
    const work = document.getElementById('works');
    work.style.width=`${window.innerWidth}px`;
    contact.style.width=`${window.innerWidth}px`;
    about.style.width = `${window.innerWidth}px`;
    header.style.width = `${window.innerWidth}px`;
  };
  // Set height on load
  window.addEventListener('load', setFullHeight);
  
  // Adjust height on resize
  window.addEventListener('resize', setFullHeight);
  // Set width on load
  window.addEventListener('load', setFullWidth);
  
  // Adjust height on resize
  window.addEventListener('resize', setFullWidth);