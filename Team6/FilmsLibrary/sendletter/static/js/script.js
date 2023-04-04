const modalWindow = document.querySelector(".modal_window");
const closeButton = document.querySelector(".close");
const closeSuccess = document.querySelector("#close");
const modalSuccess = document.querySelector(".modal_success");
const main = document.querySelector("main");

function showCover() {
  const cover = document.createElement("div");
  cover.classList.add("cover");
  main.appendChild(cover);
}

function hideCover() {
  document.querySelector(".cover").remove();
}

function hideModalWindow() {
  modalWindow.style.display = "none";
  hideCover();
}

function showModalWindow() {
  modalWindow.style.display = "flex";
  showCover();
}

function hideModalSuccess() {
  modalSuccess.style.display = "none";
  hideCover();
}

function showModalSuccess() {
  modalSuccess.style.display = "flex";
  showCover();
  setTimeout(hideModalSuccess, 7000);
}

setTimeout(showModalWindow, 5000);

closeButton.addEventListener("click", hideModalWindow);
closeSuccess.addEventListener("click", hideModalSuccess);

$(".button").click(function (e) {
  e.preventDefault();
  let data = $("#m_form").serializeArray();
  console.log('.name', '.massage');
  $.ajax({
    url: $(".send_letter").val(),
    type: "POST",
    data: data,
    success: function () {
      hideModalWindow();
      showModalSuccess();
    },
  });
});
