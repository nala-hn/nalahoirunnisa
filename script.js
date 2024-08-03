function toggleMenu() {
    var navbarLinks = document.getElementById("navbar");  
    navbarLinks.classList.toggle("active");
}

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('header-shadow');
    } else {
      header.classList.remove('header-shadow');
    }
  }
);

document.getElementById('downloadBtn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'file/CV -Nala Hoirun Nisa.pdf';
    link.download = 'My_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


  

