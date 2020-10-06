// 😋

// hover over a #!, display none if no number is selected
let noNumSelected = document.getElementById("nothingSelected");

// this is the food number displayed in the bottom div
let foodID = document.getElementById("foodID");
foodID.style.display = "none";
let showFoodId = document.createElement("p");
showFoodId.style.display = "none";
foodID.appendChild(showFoodId);

// this is the food name displayed in the bottom div
let foodName = document.getElementById("foodName");
foodName.style.display = "none";
let showFoodName = document.createElement("p");
showFoodName.style.display = "none";
foodName.appendChild(showFoodName);

// the white container whre the yellow numbers are displayed
let whiteDiv = document.getElementById("whitediv");

// small 2018/2019 buttons
let theYears = document.getElementsByClassName("years");
// big top selected year display in the top purple div
let displayYear = document.getElementById("yearDisplay");

// set default active year on load
let theYearsArray = [...theYears];
window.addEventListener("load", () => {
  theYearsArray[0].classList.add("active");
});

// click event listeners for the 2018/2019 buttons
let y2018 = document.getElementById("year2018");
let y2019 = document.getElementById("year2019");
y2018.addEventListener("click", yearActive);
y2019.addEventListener("click", yearActive);

// generate the 10 numbers
for (let i = 0; i < 10; i++) {
  let num = document.createElement("p");
  num.classList.add("nums");
  num.id = i + 1;
  num.innerText = i + 1;
  whiteDiv.appendChild(num);
  // add mouseover event listener to each number
  num.addEventListener("mouseover", function () {
    let whatYear = document.getElementById("yearDisplay").innerText;
    showFoodId.innerText = topTenList[whatYear][i].id;
    noNumSelected.style.display = "none";
    foodID.style.display = "block";
    foodName.style.display = "block";
    showFoodName.innerText = topTenList[whatYear][i].name;
    showFoodId.style.display = "block";
    showFoodName.style.display = "block";
  });
  // add mouseout event listener to each number
  num.addEventListener("mouseout", function () {
    let whatYear = document.getElementById("yearDisplay").innerText;
    showFoodId.innerText = topTenList[whatYear][i].id;
    noNumSelected.style.display = "block";
    foodID.style.display = "none";
    foodName.style.display = "none";
    showFoodName.innerText = topTenList[whatYear][i].name;
    showFoodId.style.display = "none";
    showFoodName.style.display = "none";
  });
}

// callback for the years click event listeners
function yearActive() {
  let current = document.getElementsByClassName("active");
  current[0].classList.remove("active");
  this.classList.add("active");
  displayYear.innerText = this.innerText;
  console.log(this);
}
