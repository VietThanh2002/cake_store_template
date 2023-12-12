const trigger_search = document.querySelector('.trigger_search');
const search__input = document.querySelector('.search__input');

trigger_search.addEventListener('click', () =>{
    if(!search__input.classList.contains('input_open')){
        search__input.classList.add('input_open');
        trigger_search.innerHTML = "<i class='fas fa-times'></i>";
       
    }else{
        search__input.classList.remove('input_open');
        trigger_search.innerHTML = "<i class='bx bx-search ></i>";
    }
    
})