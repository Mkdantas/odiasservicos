
var arquivos = 8;




var DOMElement = document.querySelector('.trabalhos-slide');
for(i = 1; i <= arquivos; i++){
    DOMElement.insertAdjacentHTML('afterbegin', `<!-- single testimonial -->
    <div class="testimonial">
        <img class="servicelogos" src="./img/trabalhos/image${i}.jpg">
    </div>`);
}