form.addEventListener('submit', function(e){
    e.preventDefault();
    let text = document.getElementById("text");
    let input = document.getElementById("input");
    let select = document.getElementById("select");
    let inputValue = input.value.trim()
    let optionValue = select.value;
    


    text.textContent = (inputValue / optionValue).toFixed(2);
    
    input.value = '' // null
})