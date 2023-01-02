let contentButton = document.getElementById("dropbtn");
let dDownContent = document.getElementById("dropdown-content");
const topButton = document.getElementById("top-button");

dDownContent.style.display = "none";

let btnOpenAnimation = () => {
  contentButton.classList.toggle("open");
};

let hideDropDown = () => {
  if (dDownContent.style.display === "none") {
    dDownContent.style.display = "block";
    dDownContent.classList.toggle("open");
  } else {
    dDownContent.style.display = "none";
    dDownContent.classList.remove("open");
  }
};

contentButton.addEventListener("click", hideDropDown);

let menu = document.getElementById("menu");

let foodData = [
  {
    id: "food1",
    src:"https://storage.googleapis.com/ar-menu/burger.glb",
    title: "Cheese Burger",
    price: 4.99,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`
  },
  {
    id: "food2",
    src:"https://storage.googleapis.com/ar-menu/RobotExpressive.glb",
    title: "Bacon Burger",
    price: 5.99,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`
  },
  {
    id: "food3",
    src:"https://storage.googleapis.com/ar-menu/astronaut.glb",
    title: "Chicken Burger",
    price: 6.99,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
  }
];

let generateMenu = () => {
  return (menu.innerHTML = foodData
    .map((x) => {
      let { id, src, title, price, desc } = x;
      return `
    <div id=product-id-${id} class="container">
      <h1 class="header">${title}</h1>
      <p class="sub-header">
        ${desc}
      </p>

    <model-viewer
      bounds="tight"
      src="${src}"
      ar
      scale=".2 .2 .2"
      ar-modes="webxr scene-viewer quick-look"
      shadow-intensity="0.97" 
      shadow-softness="0.8" 
      exposure="0.65"
      background-color
      preload
      reveal-when-loaded
      disable-zoom
      camera-orbit="calc(40rad * env(window-scroll-y)) 90deg"
      environment-image="neutral"
    >
    </model-viewer>

    <h2 class="price" id="price">${price}</h2>
  </div>
    `;
    })
    .join(""));
};

generateMenu();

const linkOne = document.getElementById("linkOne");
linkOne.addEventListener("click", () => {
  menu.scrollIntoView({ behavior: "smooth" });
  dDownContent.style.display = "none";
  dDownContent.classList.remove("open");

});

let menu2 = document.getElementById("menu2");

let foodData2 = [
  {
    id: "food4",
    src:"https://storage.googleapis.com/ar-menu/Horse.glb",
    title: "Meat Taco",
    price: 4.99,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`
  },
  {
    id: "food5",
    src:"https://storage.googleapis.com/ar-menu/cora.glb",
    title: "Chicken Taco",
    price: 5.99,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`
  },
  {
    id: "food6",
    src:"https://storage.googleapis.com/ar-menu/duck.glb",
    title: "Veggie Taco",
    price: 6.99,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
  }
];

let generateMenu2 = () => {
  return (menu2.innerHTML = foodData2
    .map((x) => {
      let { id, src, title, price, desc } = x;
      return `
    <div id=product-id-${id} class="container">
      <h1 class="header">${title}</h1>
      <p class="sub-header">
        ${desc}
      </p>

    <model-viewer
      bounds="tight"
      src="${src}"
      ar
      scale=".2 .2 .2"
      ar-modes="webxr scene-viewer quick-look"
      shadow-intensity="0.97" 
      shadow-softness="0.8" 
      exposure="0.65"
      background-color
      preload
      reveal-when-loaded
      disable-zoom
      camera-orbit="calc(40rad * env(window-scroll-y)) 90deg"
      environment-image="neutral"
    >
    </model-viewer>

    <h2 class="price" id="price">${price}</h2>
  </div>
    `;
    })
    .join(""));
};

generateMenu2();
const linkTwo = document.getElementById("linkTwo");
linkTwo.addEventListener("click", () => {
  menu2.scrollIntoView({ behavior: "smooth" });
  dDownContent.style.display = "none";
  dDownContent.classList.remove("open");
});


// This is the code for the Scroll-to-Top Button

let scrollTo = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

let hideScrollBtn = () => {
  if (window.scrollY > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.addEventListener("click", scrollTo);

window.addEventListener("scroll", hideScrollBtn);
