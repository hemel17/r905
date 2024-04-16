const allSeats = [
  "A",
  "A1",
  "A2",
  "A3",
  "A4",
  "B",
  "B1",
  "B2",
  "B3",
  "B4",
  "C",
  "C1",
  "C2",
  "C3",
  "C4",
  "D",
  "D1",
  "D2",
  "D3",
  "D4",
  "E",
  "E1",
  "E2",
  "E3",
  "E4",
  "F",
  "F1",
  "F2",
  "F3",
  "F4",
  "G",
  "G1",
  "G2",
  "G3",
  "G4",
  "H",
  "H1",
  "H2",
  "H3",
  "H4",
  "I",
  "I1",
  "I2",
  "I3",
  "I4",
  "J",
  "J1",
  "J2",
  "J3",
  "J4",
];

let bookedSeats = [];
const seatsContainer = document.getElementById("seats");
const nextBtn = document.getElementById("next");
const applyBtn = document.getElementById("apply");
const totalSeat = document.getElementById("total-seat").innerText;
const totalSeatNum = parseInt(totalSeat);
const selectedSeat = document.getElementById("selected-seat");
const totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total");
const couponDiv = document.getElementById("coupon");
const couponInput = document.getElementById("coupon-text");
const phone = document.getElementById("phone");
let phoneInput = phone.value;
const seatContainer = document.getElementById("seat-container");

// showing alert
const showAlert = (alert) => {
  const alertBox = document.createElement("div");
  alertBox.classList.add(
    "fixed",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "bg-red-500",
    "text-white",
    "text-lg",
    "font-medium",
    "px-16",
    "py-8",
    "rounded",
    "shadow-md",
    "transform",
    "-translate-y-1/2",
    "pointer-events-none"
  );
  alertBox.innerHTML = `
    ${alert}
  `;
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.remove();
  }, 2000);
};

// handle apply button
const handleApplyBtn = () => {
  if (bookedSeats.length === 4) {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", "disabled");
  }
};

// handle next button
const handleNextBtn = () => {
  if (phoneInput && bookedSeats.length > 0) {
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", "disabled");
  }
};

// handle seat
const handleSeat = (seat) => {
  // checking if the seat is already added
  if (bookedSeats.includes(seat)) {
    return showAlert("This seat is already added!");
  }

  // checking total selected seat
  if (bookedSeats.length >= 4) {
    return showAlert("You selected maximum number of seats!");
  }

  // add seat to array
  bookedSeats.push(seat);

  // change seat color
  bookedSeats.map((seat) => {
    document.getElementById(seat).classList.add("bg-green-400");
  });

  // display seat details
  const seatPara = document.createElement("p");
  const classPara = document.createElement("p");
  const pricePara = document.createElement("p");
  const paraClass = ["text-center"];

  seatPara.textContent = `${seat}`;
  seatPara.classList.add(paraClass);
  document.getElementById("seat").appendChild(seatPara);

  classPara.textContent = "Economy";
  classPara.classList.add(paraClass);
  document.getElementById("class").appendChild(classPara);

  pricePara.textContent = 550;
  pricePara.classList.add(paraClass);
  document.getElementById("price").appendChild(pricePara);

  // update total seat
  const remainingSeats = totalSeatNum - bookedSeats.length;
  document.getElementById("total-seat").innerText = remainingSeats;
  selectedSeat.innerText = bookedSeats.length;

  // update total price
  totalPrice.innerText = bookedSeats.length * 550;
  grandTotal.innerText = bookedSeats.length * 550;

  // handle buttons
  handleNextBtn();
  handleApplyBtn();

  console.log(bookedSeats);
};

// handle coupon
applyBtn.addEventListener("click", () => {
  const paragraph = document.createElement("p");
  paragraph.id = "discount-para";
  paragraph.classList.add(
    "bg-green-400",
    "px-10",
    "py-5",
    "text-center",
    "text-white",
    "font-medium",
    "text-lg",
    "rounded"
  );
  const coupon = couponInput.value;
  if (coupon === "NEW15") {
    const currentTotal = parseInt(grandTotal.innerText);
    grandTotal.innerText = currentTotal * 0.85;
    couponDiv.classList.add("hidden");
    paragraph.textContent = "You got BDT 330 discount!";
    seatContainer.appendChild(paragraph);
  }
  if (coupon === "Couple 20") {
    const currentTotal = parseInt(grandTotal.innerText);
    grandTotal.innerText = currentTotal * 0.8;
    couponDiv.classList.add("hidden");
    paragraph.textContent = "You got BDT 440 discount!";
    seatContainer.appendChild(paragraph);
  }
});

// handle number
phone.addEventListener("input", () => {
  phoneInput = phone.value;
  handleNextBtn();
});

// handle next
nextBtn.addEventListener("click", () => {
  // remove bg color
  bookedSeats.map((seat) => {
    document.getElementById(seat).classList.remove("bg-green-400");
  });
  // reset input
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";

  // reset buttons
  applyBtn.setAttribute("disabled", "disabled");
  nextBtn.setAttribute("disabled", "disabled");

  // reset seat deatails
  const seatElement = document.getElementById("seat");
  const classElement = document.getElementById("price");
  const priceElement = document.getElementById("class");
  const seatParagraphs = seatElement.querySelectorAll("p");
  const classParagraphs = classElement.querySelectorAll("p");
  const priceParagraphs = priceElement.querySelectorAll("p");
  seatParagraphs.forEach((paragraph) => {
    paragraph.remove();
  });
  classParagraphs.forEach((paragraph) => {
    paragraph.remove();
  });
  priceParagraphs.forEach((paragraph) => {
    paragraph.remove();
  });

  // reset prices
  totalPrice.innerText = 0;
  grandTotal.innerText = 0;

  // reset discount message
  const discountPara = document.getElementById("discount-para");
  seatContainer.removeChild(discountPara);

  // update total seat
  document.getElementById("total-seat").innerText = 40;
  selectedSeat.innerText = 0;

  // empty array
  bookedSeats = [];
});

console.log(totalSeat);

const seatsHtml = allSeats
  .map((seat) => {
    const bgClass = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].includes(
      seat
    )
      ? ""
      : "bg-gray-200";
    const hoverClasses = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
    ].includes(seat)
      ? ""
      : "hover:cursor-pointer";
    const clickEvent = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
    ].includes(seat)
      ? ""
      : `onclick="handleSeat('${seat}')"`;

    return `<div class="p-4 font-medium text-lg ${bgClass} flex justify-center items-center rounded-xl ${hoverClasses}" id="${seat}" ${clickEvent}>
    <p>${seat}</p>
    </div>`;
  })
  .join("");

seatsContainer.innerHTML = seatsHtml;
