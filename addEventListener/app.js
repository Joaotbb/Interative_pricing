<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

let button = document.querySelector("#button");
let msg = document.querySelector("#message");

button.addEventListener("click", () => {
  msg.classList.toggle("reveal");
});

AOS.init({
  duration: 1200
});

