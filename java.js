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


    // Función que se ejecuta cuando cambia el estado del interruptor

});
