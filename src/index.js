console.log("Hello World");

import {WishList} from './wishlist.js'

const submitForm = document.getElementById("submitForm");
const yearInput = document.getElementById("yearInput");
const makeInput = document.getElementById("makeInput");
const modelInput = document.getElementById("modelInput");
const carYear = document.getElementById("car-year");
const carMake = document.getElementById("car-make");
const carModel = document.getElementById("car-model");
const removeBtn = document.querySelector(".removeBtn");
const wishListEle = document.querySelector("#wishListContainer > ul");

const wishList = new WishList();

function showCarDetails(car) {
  carYear.textContent = car.year;
  carMake.textContent = car.make;
  carModel.textContent = car.model;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  // Deletes old list, w/o replaceChildren you get redundant lists
  wishListEle.replaceChildren(); 
  // Re-creates/Creates new list 
  wishList.list.forEach((car) => {
    const li = document.createElement("li");
    li.style.cursor = "pointer";
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishListEle.appendChild(li);
  });
}

function addCar(event) {
  event.preventDefault();
  // Set car values
  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  // Add car onto list
  wishList.add(make, model, year);
  // Rebuild the new list
  updateDOMList();

  // Clear inputs once car has been added to list
  make = "";
  model = "";
  year = "";
}

function removeCar() {
  // Get car Id
  let carId = Number(removeBtn.getAttribute("data-carId"));

  // Remove Car from list
  wishList.remove(carId);
  // Rebuild the new list
  updateDOMList();

  // Clear vehicle info and disable remove button
  carMake.textContent = "";
  carModel.textContent = "";
  carYear.textContent = "";
  removeBtn.disabled = true;
}

submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);