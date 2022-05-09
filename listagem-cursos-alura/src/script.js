let back = document.querySelector('.left')
let next = document.querySelector('.right')
let itens = document.querySelectorAll('.container-itens .item')
let idimg = 0

function nextCarousel() {
  if(idimg >= itens.length){
    idimg = itens.length
  }else{
     idimg++
  }
 
  itens.forEach((images) => {
    images.style.transform = `translateX(${-idimg * 250}px)`
  })
}

function backCarousel() {
  if(idimg <= 0){
    idimg = 0
  }else{
      idimg--
  }
  itens.forEach((images) => {
    images.style.transform = `translateX(${idimg * -250}px)`
  })
}

next.addEventListener('click', nextCarousel)
back.addEventListener('click', backCarousel)

