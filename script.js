const banner = document.querySelector('.banner');
const cadastrar = document.querySelector('.area-cadastrar');
const button = document.querySelector('input[type="submit"]');
const form = document.querySelector('form');
const footer = document.querySelector('footer');

const inputs = document.querySelectorAll('input');

console.log(inputs);



form.addEventListener('submit', (event) => {
    // Condição para verificar se existe algum campo vázio, se sim não enviar
    inputs.forEach(input => {
        if(input.value == null || input.value == '') {
            input.nextElementSibling.style.display = 'block';
            input.style.borderColor = 'red';
            event.preventDefault();
        } else {
            input.nextElementSibling.style.display = 'none';
            input.style.borderColor = 'rgba(0, 0, 0, .31)';
        }
    });
})


const animation = () => {
    banner.style.transform = 'translateX(0%)';
    cadastrar.style.transform = 'translateY(0%)';
    footer.style.transform = 'translateY(0%)';
}

window.addEventListener('load', animation);