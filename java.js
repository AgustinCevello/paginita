document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('site-footer');
    const whatsappButton = document.querySelector('.whatsapp-button');
    const emailButton = document.querySelector('.email-button');
    
    const whatsappOriginalBottom = 20; 
    const emailOriginalBottom = 85; 
    const buffer = 20; 
    
    window.addEventListener('scroll', checkButtonPosition);
    window.addEventListener('resize', checkButtonPosition);
    
    checkButtonPosition();
    
    function checkButtonPosition() {
      if (!footer || !whatsappButton || !emailButton) return;
      
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (footerTop < windowHeight) {
        whatsappButton.style.position = 'absolute';
        emailButton.style.position = 'absolute';
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const absoluteTop = footerTop + scrollTop - buffer;
        
        whatsappButton.style.top = (absoluteTop - whatsappButton.offsetHeight) + 'px';
        emailButton.style.top = (absoluteTop - emailButton.offsetHeight - 65) + 'px';
        
        whatsappButton.style.bottom = 'auto';
        emailButton.style.bottom = 'auto';
      } else {
        whatsappButton.style.position = 'fixed';
        emailButton.style.position = 'fixed';
        
        whatsappButton.style.top = 'auto';
        emailButton.style.top = 'auto';
        
        whatsappButton.style.bottom = whatsappOriginalBottom + 'px';
        emailButton.style.bottom = emailOriginalBottom + 'px';
      }
    }

    /*--------------------------------------FORMULARIO DE CONTACTO----------------------------------------------------------*/

    function validarNombre(input) {
        input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
        const error = document.getElementById("error-name");
        error.textContent = input.value.length > 50 ? "El nombre no puede superar los 50 caracteres." : "";
    }

    function validarEmail(input) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const error = document.getElementById("error-email");
        error.textContent = regex.test(input.value) ? "" : "Correo inválido. Intente nuevamente.";
    }

    function validarTelefono(input) {
        input.value = input.value.replace(/[^0-9+]/g, '');
        const error = document.getElementById("error-phone");
        error.textContent = input.value.length > 17 ? "El número no puede superar los 17 caracteres." : "";
    }

    function validarMotivo(input) {
        const error = document.getElementById("error-reason");
        error.textContent = input.value.length > 300 ? "El motivo no puede superar los 300 caracteres." : "";
    }

    function validarFormulario() {
        const nombre = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("phone").value.trim();
        const motivo = document.getElementById("reason").value.trim();

        if (!nombre) {
            document.getElementById("error-name").textContent = "El nombre es obligatorio.";
            return false;
        }
        if (!email) {
            document.getElementById("error-email").textContent = "El email es obligatorio.";
            return false;
        }
        if (telefono.length > 17) {
            document.getElementById("error-phone").textContent = "Número demasiado largo.";
            return false;
        }
        if (motivo.length > 300) {
            document.getElementById("error-reason").textContent = "El motivo no puede superar los 300 caracteres.";
            return false;
        }
        return true;
    }

    document.querySelector(".formularioContacto").addEventListener("submit", function(event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });



    //-------------------------navar responsive-------------------------

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Toggle menu hamburguesa
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Manejar el despliegue de los submenús en móvil
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        
        dropdownLink.addEventListener('click', function(e) {
            // Solo en vista móvil
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Cerrar otros submenús
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Ajustar al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

















// Create and animate particles
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('particles-container');
  const particleCount = 50;
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = posX + 'vw';
    particle.style.top = posY + 'vh';
    
    // Random size
    const size = Math.random() * 3 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    
    // Add to container
    container.appendChild(particle);
    
    // Animate
    animateParticle(particle);
  }
  
  function animateParticle(particle) {
    // Random animation duration
    const duration = Math.random() * 30 + 15;
    particle.style.animation = `float ${duration}s infinite ease-in-out`;
    
    // Recreate particle when animation ends to refresh position
    setTimeout(() => {
      particle.remove();
      createParticle();
    }, duration * 1000);
  }
  
  // Create subtle parallax effect on scroll
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const bubbles = document.querySelectorAll('.bubble');
    
    bubbles.forEach((bubble, index) => {
      const speed = 0.1 + (index * 0.05);
      const yPos = -(scrolled * speed);
      bubble.style.transform = `translateY(${yPos}px)`;
    });
  });
});










});
