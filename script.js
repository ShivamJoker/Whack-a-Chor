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

  setInterval(() => {
    const randomHoleIdx = getRandomIdx();
    const randomChor = fPersons[getRandomIdx()];
    const currentHole = holes[randomHoleIdx];
    currentHole.querySelector("i").innerHTML = randomChor;
    currentHole.classList.add("show");
    currentHole.style.zIndex = 1;
    setTimeout(() => {
      currentHole.classList.remove("show");
      currentHole.style.zIndex = "";
    }, 1400);
  }, 1500);

  holes.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (!e.currentTarget.classList.contains("show")) return;
      console.warn("You did it");
      e.currentTarget.classList.remove("show");
      bang.play();
    });
  });

  const getTranslate = (e) => {
    return `translate(${e.pageX - 75}px, ${e.pageY - 75}px)`;
  };
  document.addEventListener("mousemove", (e) => {
    hammer.style.transform = `translateY(${e.pageY}px)`;
    hammer.style.transform += `translateX(${e.pageX}px)`;
  });

  document.addEventListener("mousedown", (e) => {
    hammer.style.transition = "transform 50ms";
    hammer.style.transform = `${getTranslate(e)} rotate(-45deg)`;
  });

  document.addEventListener("mouseup", (e) => {
    setTimeout(() => {
      hammer.style.transform = `${getTranslate(e)} rotate(0deg)`;
      hammer.style.transition = "none";
    }, 150);
  });
})();

