const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
  this.classList.toggle("subscribe");
  this.textContent = "Subscribed";

  //   let that = this;
  //   setTimeout(function () {
  //     that.textContent = "Thanks...";
  //   }, 1000);

  setTimeout(() => {
    this.textContent = "Thanks...";
  }, 1000);
});
