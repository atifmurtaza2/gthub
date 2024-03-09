const charValue = document.getElementById('textarea');
let totalCount = document.getElementById('total-counter');
let remainCount = document.getElementById('remaining-counter');
let char = 0;


const updateCounter = () =>{
    char = charValue.value.length;
    totalCount.innerText = char;    
    remainCount.innerText = 150 - char
}

totalCount.innerText = char;    


charValue.addEventListener('keyup',()=> updateCounter());

const copytext =  ()=>{
    
    charValue.select();
    charValue.setSelectionRange(0,9999);
    navigator.clipboard.writeText(charValue.value);

}