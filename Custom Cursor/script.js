const main=document.querySelector('.main')
const cursor=document.querySelector('.cursor')

main.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.clientX+'px'
    cursor.style.top=e.clientY+'px'
    
})