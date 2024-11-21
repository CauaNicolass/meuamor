document.addEventListener("DOMContentLoaded", function(){
    const items = 
    document.querySelectorAll('.movel');

    items.forEach(item => {
        item.classList.add('mover'); 
    });
});