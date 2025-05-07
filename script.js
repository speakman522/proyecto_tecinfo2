const imagenes = document.querySelector('.imagenes');
const btnAnterior = document.querySelector('.anterior');
const btnSiguiente = document.querySelector('.siguiente');
let index = 0;

btnSiguiente.addEventListener('click', () => {
  index = (index + 1) % 5;
  actualizarCarrusel();
});

btnAnterior.addEventListener('click', () => {
  index = (index - 1 + 5) % 5;
  actualizarCarrusel();
});

function actualizarCarrusel() {
  imagenes.style.transform = `translateX(-${index * 100}%)`;
}
