document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (errorMessage) {
                errorMessage.textContent = '';
            }

            if (email === 'admin@ecoato.com.br' && password === '123456') {
                alert('Login de Administrador bem-sucedido!');
                window.location.href = 'admin/dashboard.html';

            } else if (email === 'cooperativas@ecoato.com.br' && password === '123456') {
                alert('Login de Cooperativa bem-sucedido!');
                window.location.href = 'cooperativa/dashboard.html';

            } else {
                if (errorMessage) {
                    errorMessage.textContent = 'Email ou senha inválidos. Tente novamente.';
                }
            }
        });
    }

    const cadastroForm = document.getElementById('cadastro-residuos-form');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nomeCliente = document.getElementById('nome-cliente');
            const tipoResiduo = document.getElementById('tipo-residuo');
            const quantidade = document.getElementById('quantidade');
            const dataColeta = document.getElementById('data-coleta');

            const campos = [nomeCliente, tipoResiduo, quantidade, dataColeta];
            let isValid = true;

            campos.forEach(campo => {
                if (campo.value.trim() === '') {
                    isValid = false;
                    campo.classList.add('required-field');
                } else {
                    campo.classList.remove('required-field');
                }
            });

            if (isValid) {
                alert('Formulário enviado com sucesso!');
                cadastroForm.reset();
            } else {
                alert('Por favor, preencha todos os campos destacados em amarelo.');
            }
        });
    }
});