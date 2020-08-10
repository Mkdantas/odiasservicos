

var arquivos = 5;




var DOMElement = document.querySelector('.fornecedores-slide');
for(i = 1; i < arquivos; i++){
    DOMElement.insertAdjacentHTML('afterbegin', `<div class="testimonial">
    <img class="testlogos" src="/img/fornecedores/image${i}.jpg">
</div>`);
}