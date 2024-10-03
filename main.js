// Add a script to hide the header during the loading animation
document.addEventListener("DOMContentLoaded", function() {
    const loadingOverlay = document.querySelector(".loading-overlay");
    const header = document.querySelector("header");
  
    loadingOverlay.classList.add("active");
    header.style.display = "none"; /* or opacity: 0; */
  
    setTimeout(function() {
      loadingOverlay.style.display = "none";
      header.style.display = "block"; /* Show the header */
      loadingOverlay.classList.remove("active");
   }, 4000); // Ensure the overlay is hidden after 4 seconds
   
  });

  // Get the loading overlay element
const loadingOverlay = document.querySelector('.loading-overlay');

// Add an event listener to the loading overlay
loadingOverlay.addEventListener('animationstart', () => {
  // Lock the body element
  document.body.style.overflow = 'hidden';
});

// Add an event listener to the loading overlay
loadingOverlay.addEventListener('animationend', () => {
  // Unlock the body element
  document.body.style.overflow = 'auto';
});









const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach((videoCard) => {
  const video = videoCard.querySelector('video');
  const playIcon = videoCard.querySelector('.play-icon');
  const playButton = playIcon.querySelector('.fa-play');
  const pauseButton = playIcon.querySelector('.fa-pause');

  // Toggle play/pause icons and video playback
  playIcon.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
    } else {
      video.pause();
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';
    }
  });

  // Play/pause video when video itself is clicked
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
    } else {
      video.pause();
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';
    }
  });
});






// Block IDM extension popup on video downloads
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    video.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    video.addEventListener('mousedown', (e) => {
      if (e.button === 2) { // right-click
        e.preventDefault();
      }
    });
  });
});


let currentVideo = null;

document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');

  // Add event listeners to each video element
  videos.forEach((video) => {
    video.addEventListener('click', function() {
      // Toggle play/pause state on click
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
    });

    video.addEventListener('play', function() {
      // Pause any currently playing video
      if (currentVideo && currentVideo !== video) {
        currentVideo.pause();
      }
      currentVideo = video;
    });

    video.addEventListener('pause', function() {
      currentVideo = null;
    });
  });

  // Add event listener to window to pause videos when switching tabs
  window.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
      // Pause any currently playing video when switching tabs
      if (currentVideo) {
        currentVideo.pause();
      }
    }
  });

  // Add event listener to window to pause videos when scrolling out of view
  window.addEventListener('scroll', function() {
    const videoSection = document.querySelector('.video-grid');
    const videosInView = videos.filter((video) => {
      const rect = video.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    });

    // Pause any video that is not in view
    videos.forEach((video) => {
      if (!videosInView.includes(video) && !video.paused) {
        video.pause();
      }
    });
  });
});










document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const headerToggle = document.getElementById('headerToggle');
  const openIcon = headerToggle.querySelector('.hamburger-open');
  const closeIcon = headerToggle.querySelector('.hamburger-close');

  function toggleMobileNav() {
    header.classList.toggle('mobile-nav-active');

    // Add spin animation class
    headerToggle.classList.add('spin-animation');

    // Toggle icon visibility with a slight delay for smooth transition
    setTimeout(() => {
      if (header.classList.contains('mobile-nav-active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }

      // Remove spin animation class after transition
      setTimeout(() => {
        headerToggle.classList.remove('spin-animation');
      }, 300);
    }, 150);
  }

  headerToggle.addEventListener('click', toggleMobileNav);

  // Close mobile nav when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (header.classList.contains('mobile-nav-active')) {
        toggleMobileNav();
      }
    });
  });

  // Close mobile nav when clicking outside the header
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && !headerToggle.contains(e.target)) {
      if (header.classList.contains('mobile-nav-active')) {
        toggleMobileNav();
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1199) {
      header.classList.remove('mobile-nav-active');
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
});



const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
link.addEventListener('click', () => {
navLinks.forEach(link => link.classList.remove('active'));
link.classList.add('active');
});
});







// ----------------------------------------section

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]'); // Select all links with href starting with #

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get the target section id
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Smooth scroll
          block: 'start' // Align at the start of the viewport
        });
      }
    });
  });
});



// ---------------------------swiper------------------------
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.brand-slider', {
    slidesPerView: 1, // Number of slides visible at once
    spaceBetween: 10, // Reduced space between slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000, // Change slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay even after user interaction
    },
    speed: 800, // Duration of transition (in milliseconds)
    breakpoints: {
      768: {
        slidesPerView: 2, // Number of slides visible on larger screens
      },
      1024: {
        slidesPerView: 3, // Number of slides visible on even larger screens
      },
    },
  });
});



// --------------------------------------Loading---------------------------------------


// ---------------------back to top-========================

  // Get the button element
  const goToTopButton = document.getElementById('goToTop');

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      goToTopButton.classList.add('show');
      goToTopButton.classList.remove('hide');
    } else {
      goToTopButton.classList.add('hide');
      goToTopButton.classList.remove('show');
    }
  });

  // Scroll to top when the button is clicked
  goToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  





  // -----------------------------------------------hero-slides----------------------------------
