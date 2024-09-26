/// 1

const extractNumbers = (str) => {
  const numbers = str.match(/\d+/g);
  return numbers ? numbers.map(Number) : [];
};

console.log(extractNumbers("a1fg5hj6"));

//// 2
const fibonacciNum = (n1 = 0, n2 = 1) => {
  if (n1 > 144) return;
  console.log(n1);
  setTimeout(() => {
    fibonacciNum(n2, n1 + n2);
  }, 1000);
};

fibonacciNum();

////  3

const requestProducts = async () => {
  const reponce = await fetch(" https://fakestoreapi.com/products");
  const data = await reponce.json();
  console.log(data);
};

requestProducts();

///  4

const containerBtn = document.querySelector(".containerBtn");

containerBtn.onclick = (event) => {
  if (event.target.classList.contains("color_Btn")) {
    document.body.style.backgroundColor = event.target.style.backgroundColor;
  }
};

///// 5

const block = document.querySelector(".block");
const blockBtn = document.querySelector(".show_block");

blockBtn.addEventListener("click", () => {
  if ((block.style.display = "none")) {
    block.style.display = "block";
  } else {
    block.style.display = "block";
  }
});

////  6

const incrementNum = document.querySelector(".incrementNum");
let num = 0;
let interval;
const increment = () => {
  interval = setInterval(() => {
    num++;
    incrementNum.innerHTML = num;

    if (num >= 100) {
      clearInterval(interval);
    }
  }, 100);
};
increment();

/// 7

const reqBtn = document.querySelector(".reqBnt");

reqBtn.onclick = async () => {
  try {
    const reponce = await fetch("https://fakestoreapi.com/products");
    const data = await reponce.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
