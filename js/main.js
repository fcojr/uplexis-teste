window.onload = () => {
    var cards = document.querySelectorAll('.categories .card')
    var products = document.querySelectorAll('.products .card')
    console.log(products)
    cards.forEach(card => {
        card.addEventListener('click', function(){
            cards.forEach(card => {
                card.classList.remove('active')
            })
            this.classList.add('active')
            var category = this.classList.item(1)
            products.forEach(product => {
                if(!product.classList.contains(category)) {
                    product.style.display = 'none'
                } else {
                    product.style.display = 'block'
                }
            })
            if(category === 'todos') {
                products.forEach(product => {
                    product.style.display = 'block'
                })
            }
        })
    })
}