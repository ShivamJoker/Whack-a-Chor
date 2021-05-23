(() =>{
    const hammer = document.querySelector(".hammer");
    const elemArray = document.querySelectorAll("ul li");
    const bang = document.getElementById("bang");
    const fPersons = ['Hey! I am <br />Intern Srivastava<br /><span>I know Tuti Futi English</span>', 'Hey! I am  <br />SDE Garg<br /><span>I like stupid Comments</span>', 'Hey! I am  <br />Innocent Singh<br /><span>I steal code from GitHub</span>', 'Hey! I am  <br />Problem Mishra<br /><span>I support Innocent problems</span>'];

    setInterval(() =>{
        for(let i=0; i<elemArray.length; i++){
            elemArray[i].querySelector('.bunny').classList.remove(elemArray[i].querySelector('.bunny').classList.item(1));
                elemArray[i].addEventListener('click', (e)=>{
                    if(e.target.querySelector('.bunny').classList.contains('show')){
                        e.target.querySelector('.bunny').classList.remove('show');
                        bang.play();
                    }
                });
        };

        let randomNumber = Math.floor(Math.random() * 4);
        elemArray[randomNumber].querySelector('.bunny i').innerHTML = fPersons[randomNumber];
        elemArray[randomNumber].querySelector('.bunny').classList.add('show');
    }, 4000);

    document.addEventListener('mousemove', (evt)=>{
        hammer.style.transform = `translate(${evt.screenX}px, ${evt.screenY}px)`;
    });

    document.addEventListener('mousedown', (evt)=>{
        hammer.style.transform = `translate(${evt.screenX}px, ${evt.screenY}px) rotate(-45deg)`;
    });

    document.addEventListener('mouseup', (evt)=>{
        setTimeout(()=>{
            hammer.style.transform = `translate(${evt.screenX}px, ${evt.screenY}px) rotate(0deg)`;
        }, 200);
    });
})();