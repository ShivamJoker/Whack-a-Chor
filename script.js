(() => {
  let hammer = document.querySelector(".hammer");
  let elemArray = document.querySelectorAll("ul li");
  const bang = document.getElementById("bang");
  const fPersons = [
    "Hey! I am <br />Intern Srivastava<br /><span>I know Tuti Futi English</span>",
    "Hey! I am  <br />SDE Garg<br /><span>I like stupid Comments</span>",
    "Hey! I am  <br />Innocent Singh<br /><span>I steal code from GitHub</span>",
    "Hey! I am  <br />Problem Mishra<br /><span>I support Innocent problems</span>",
  ];

  const holes = document.querySelectorAll(".bunny");

  const getRandomIdx = () => Math.floor(Math.random() * holes.length);

  const speak = (txt, rate = 1.2, pitch = 1) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(txt);
    utterance.rate = rate;
    utterance.pitch = pitch;
    speechSynthesis.speak(utterance);
  };

  setInterval(() => {
    const randomHoleIdx = getRandomIdx();
    const randomChor = fPersons[getRandomIdx()];
    const currentHole = holes[randomHoleIdx];
    const nameEl = currentHole.querySelector("i");
    nameEl.innerHTML = randomChor;
    speak(nameEl.innerText);

    currentHole.style.transition = "";
    currentHole.classList.add("show");
    currentHole.style.background = "";

    currentHole.style.zIndex = 1;
    setTimeout(() => {
      currentHole.classList.remove("show");
    }, 2000);
  }, 4000);

  holes.forEach((el) => {
    el.addEventListener("click", (e) => {
      const currentEl = e.currentTarget;
      if (!currentEl.classList.contains("show")) return;
      console.warn("You did it");
      speak("Mommy save me!", 1, 1.8);
      currentEl.style.background =
        ' url("./img/bunny_dead.png") no-repeat 0 100px';
      currentEl.style.transition = "transform 2s ease-in";

      currentEl.style.zIndex = "";
      currentEl.classList.remove("show");

      setTimeout(() => {
        currentEl.style.transition = "";
      }, 2000);
      bang
        .play()
        .then(() => {})
        .catch((e) => console.log(e));
    });
  });

  const getTranslate = (e) => {
    return `translate(${e.clientX - 50}px, ${e.clientY - 75}px)`;
  };

  let isMouseDown = false;
  document.addEventListener("mousemove", (e) => {
    hammer.style.transform = getTranslate(e);
    if (isMouseDown) {
      hammer.style.transform += `rotate(-45deg)`;
    }
  });

  document.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    hammer.style.transition = "transform 50ms";
    hammer.style.transform += `rotate(-45deg)`;
  });

  document.addEventListener("mouseup", (e) => {
    hammer.style.transform = `${getTranslate(e)} rotate(0deg)`;
    isMouseDown = false;
    setTimeout(() => {
      hammer.style.transition = "none";
    }, 100);
  });
})();
