// mobleNavToggle
let hanburgerMenu = document.querySelector('.burger');
let closeMenu = document.querySelector('.close-menu');

hanburgerMenu.addEventListener('click', ()=>{
    let navlist = document.querySelector('nav ul');
    navlist.classList.add('show');
    navlist.style.transition = 'all 0.5s ease-in';
    closeMenu.style.display = 'block';
    hanburgerMenu.style.display = 'none';


});

closeMenu.addEventListener('click', ()=>{
    let navlist = document.querySelector('nav ul');
    navlist.classList.remove('show');
    hanburgerMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    

});

//BackprojectsBtn
let backProjectBtn = document.querySelector('.back-btn');
backProjectBtn.addEventListener('click',()=>{
    backProjects();
});

function backProjects(){
    let backProjectContainer = document.querySelector('.back-project-container');
    backProjectContainer.style.display = 'flex';
}


let closeBackProjectt = document.querySelector('#backProject');
closeBackProjectt.addEventListener('click',()=>{
    closeBackProject();
});

function closeBackProject(){
    let backProjectContainer = document.querySelector('.back-project-container');
    backProjectContainer.style.display = 'none';
}

//radioBtnSelected


let radiosSelected = document.querySelectorAll('#selectedRadio');

for(let i = 0;i < radiosSelected.length; i++){
    let enterPledge = document.querySelectorAll('.enter-pledge-container');
    radiosSelected[i].addEventListener('click',()=>{
        enterPledge[i].classList.add('see');
    });
};

let backProjectt = document.querySelectorAll('.back-project');
let radioSel = document.querySelectorAll('.selcted-backProject');

  

radioSel.forEach((radio)=>{
    radio.addEventListener('change',(e)=>{
        let _primarycolor1 =  ['(',176+',',50+'%'+',',47+'%',')'];
        let color = 'hsl';
        for(let i = 0; i < _primarycolor1.length; i++){
            color +=_primarycolor1[i];
        }
        let targett = e.target.parentElement;
        targett.style.border = `2px solid ${color}` ;
    });
});


//ContinueBtn

let continueBtn = document.querySelectorAll('.continue-pledge');
continueBtn.forEach((continuee)=>{
    continuee.addEventListener('click', ()=>{
        let yourSupportModalContainer = document.querySelector('.Your-support-container');
        yourSupportModalContainer.classList.add('see');
    })
})

//GotItBtn

let gotItBtn = document.querySelector('.got-it');
gotItBtn.addEventListener('click',()=>{
    let yourSupportModalContainer = document.querySelector('.Your-support-container');
    yourSupportModalContainer.classList.remove('see');
});







//Bo0kmarkBtn

let bookmarkedBtn = document.querySelector('.bookmark-btn');

bookmarkedBtn.addEventListener('click', (e)=>{ 
    setTimeout(()=>{isBookmarked()},500); 
    
});


function isBookmarked(){
    let bookmarked = document.querySelector('.bookmarked');
    bookmarked.textContent = 'Bookmarked';
    bookmarked.style.color= 'hsl(176, 72%, 28%)';
}


