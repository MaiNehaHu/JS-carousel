const marginclass = document.querySelector(".pic-1");
const rightbtn = document.querySelector(".right-btn");
const leftbtn = document.querySelector(".left-btn");
let inputs = document.querySelectorAll(".container input");
let count = 0;

if (count === 0) {
  marginclass.style.marginLeft = "-40%";
  console.log("page 2, count is 0");
}

rightbtn.addEventListener("click", () => {
  count = count - 1;

  if (count < -2) {
    count = -2;
  } else {
    count = count;
  }

  ShiftPage(count);
});

leftbtn.addEventListener("click", () => {
  count = count + 1;

  if (count > 2) {
    count = 2;
  } else {
    count = count;
  }

  ShiftPage(count);
});

function ShiftPage(count) {
  switch (count) {
    case 2:
      {
        marginclass.style.marginLeft = "-80%";
        console.log("page 4, count is 2");
      }
      break;
    case 1:
      {
        marginclass.style.marginLeft = "-60%";
        console.log("page 3, count is 1");
      }
      break;
    case 0:
      {
        marginclass.style.marginLeft = "-40%";
        console.log("page 2, count is 0");
      }
      break;
    case -1:
      {
        marginclass.style.marginLeft = "-20%";
        console.log("page 1, count is -1");
      }
      break;
    case -2:
      {
        marginclass.style.marginLeft = "0%";
        console.log("page 0, count is -2");
      }
      break;
  }
}
