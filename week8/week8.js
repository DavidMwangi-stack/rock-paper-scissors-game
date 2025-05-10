// document.getElementById("animateBtn").addEventListener("click", function () {
//     const box = document.getElementById("box");
//     box.classList.toggle("animate");
//   });

// document.getElementById("startAnimation").addEventListener("click", function () {
//     const circle = document.getElementById("circle");
//     circle.style.animation = "expand 3s ease-in-out forwards";
//   });
  
//   const styleSheet = document.styleSheets[0];
//   styleSheet.insertRule(`
//     @keyframes expand {
//       0% { transform: scale(1); }
//       100% { transform: scale(2); }
//     }
//   `, styleSheet.cssRules.length);

// const box = document.getElementById("movingBox");
// const pauseButton = document.getElementById("pause");
// const resumeButton = document.getElementById("resume");

// pauseButton.addEventListener("click", () => {
//   box.style.animationPlayState = "paused";
// });

// resumeButton.addEventListener("click", () => {
//   box.style.animationPlayState = "running";
// });

// const modal = document.getElementById("modal");
// const openModalButton = document.getElementById("openModal");
// const closeModalButton = document.getElementById("closeModal");

// openModalButton.addEventListener("click", () => {
//   modal.classList.add("show");
// });

// closeModalButton.addEventListener("click", () => {
//   modal.classList.remove("show");
// });



  // DOM Elements
  const animateBtn = document.getElementById('animateBtn');
  const muteBtn = document.getElementById('muteBtn');
  const box = document.getElementById('animatedBox');
  const statusText = document.getElementById('statusText');

  // Animation state
  let isMuted = false;

  // Load saved preference
  document.addEventListener('DOMContentLoaded', () => {
      const savedMute = localStorage.getItem('muted');
      if (savedMute) {
          isMuted = savedMute === 'true';
          muteBtn.textContent = isMuted ? 'Unmute Animations' : 'Mute Animations';
          statusText.textContent = isMuted ? 'Animations muted' : 'Ready to animate!';
      }
  });

  // Animation handler
  function toggleAnimation() {
      if (isMuted) {
          statusText.textContent = 'Animations are muted!';
          return;
      }
      
      box.classList.add('animate');
      statusText.textContent = 'Animating...';
  }

  // Mute handler
  function toggleMute() {
      isMuted = !isMuted;
      localStorage.setItem('muted', isMuted);
      muteBtn.textContent = isMuted ? 'Unmute Animations' : 'Mute Animations';
      statusText.textContent = isMuted ? 'Animations muted' : 'Ready to animate!';
      
      // Stop current animation
      box.classList.remove('animate');
  }

  // Event Listeners
  animateBtn.addEventListener('click', toggleAnimation);
  muteBtn.addEventListener('click', toggleMute);

  // Remove animation class after completion
  box.addEventListener('animationend', () => {
      box.classList.remove('animate');
      if (!isMuted) statusText.textContent = 'Animation complete!';
  });