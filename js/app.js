const navsilde = () => {
    const tlin=document.querySelector('.tline');
    const navl=document.querySelector('.navlink');
    tlin.addEventListener('click',()=>{
        navl.classList.toggle('navac');
    })
}
navsilde();