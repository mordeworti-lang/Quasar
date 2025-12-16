document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validación básica
            if (email.trim() === '' || password.trim() === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Simulación de login exitoso
            console.log(`Intento de login con: ${email}`);
            
            // Efecto visual en el botón (opcional, simple feedback)
            const btn = loginForm.querySelector('.btn-login');
            const originalText = btn.textContent;
            btn.textContent = 'Ingresando...';
            btn.disabled = true;

            setTimeout(() => {
                alert('¡Bienvenido a Quasar Repostería! Has iniciado sesión correctamente.');
                window.location.href = 'index.html';
                // Restaurar botón (aunque redirigimos, es buena práctica)
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1000);
        });
    }
});
