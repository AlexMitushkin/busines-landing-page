const openPopUP = document.getElementsByClassName('popup__open')
// const openPopUP1 = document.getElementById('popup__open1')
// const openPopUP2 = document.getElementById('popup__open2')
const closePopUP = document.getElementById('popup__close')

const popUp = document.getElementById('popup')

openPopUP.addEventListener('click', function(e){
   e.preventDefault();
   popUp.classList.add('active');
})

// openPopUP1.addEventListener('click', function(e){
//    e.preventDefault();
//    popUp.classList.add('active');
// }
// )
// openPopUP2.addEventListener('click', function(e){
//    e.preventDefault();
//    popUp.classList.add('active');
// })

closePopUP.addEventListener('click' ,() => {
   popUp.classList.remove('active');
})

