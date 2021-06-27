# konsep this on javascript

```

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
  this.classList.toggle("subscribe");
  this.textContent = "Subscribed";

old approach
  //   let that = this;
  //   setTimeout(function () {
  //     that.textContent = "Thanks...";
  //   }, 1000);

new approach
  setTimeout(() => {
    this.textContent = "Thanks...";
  }, 1000);
});

```
