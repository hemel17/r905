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

const bookedSeats = [];
const seatsContainer = document.getElementById("seats");
const nextBtn = document.getElementById("next");



const hello = (seat) => {
  bookedSeats.push(seat);
  if(bookedSeats.length === 4){
    nextBtn.removeAttribute('disabled')
  } else {
    nextBtn.setAttribute('disabled', 'disabled')
  }
  console.log(bookedSeats);
};

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
      : "hover:cursor-pointer hover:bg-green-200";
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
      : `onclick="hello('${seat}')"`;

    return `<div class="p-4 font-medium text-lg ${bgClass} flex justify-center items-center rounded-xl ${hoverClasses}" id="${seat}" ${clickEvent}>
    <p>${seat}</p>
    </div>`;
  })
  .join("");

seatsContainer.innerHTML = seatsHtml;

console.log("app is running");
