

var arquivos = 5;




var DOMElement = document.querySelector('.clientes-slide');
for(i = 1; i <= arquivos; i++){
    DOMElement.insertAdjacentHTML('afterbegin', `<div class="testimonial">
    <img class="testlogos" src="./img/clientes/image${i}.jpg">
</div>`);
}