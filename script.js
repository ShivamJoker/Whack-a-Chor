(() =>{
    let ulElem = document.querySelector("ul");
    let liElem = '';
    const fClasses = ['one', 'two', 'three', 'four', 'five'];
    const fPersons = ['Intern', 'SDE', 'Problem Solver', 'Innocent', 'Coder'];

    for(let i=0; i<1500; i++){
        liElem += '<li><span class="bubble"></span></li>';
    };
    ulElem.innerHTML = liElem;

    setInterval(() =>{
        let liElements = ulElem.querySelectorAll("li");
        let randomNumberBig = Math.floor(Math.random() * 800);
        let randomNumberSmall = Math.floor(Math.random() * 5);
        for(let i=0; i<liElements.length; i++){
            liElements[i].querySelector('.bubble').style.display = 'none';
            liElements[i].querySelector('.bubble').classList.remove(liElements[i].classList.item(1));
        };
        liElements[randomNumberBig].querySelector('.bubble').classList.add(fClasses[randomNumberSmall]);
        liElements[randomNumberBig].querySelector('.bubble').innerHTML = fPersons[randomNumberSmall];
        liElements[randomNumberBig].querySelector('.bubble').style.display = 'block';
    }, 2000);
})();