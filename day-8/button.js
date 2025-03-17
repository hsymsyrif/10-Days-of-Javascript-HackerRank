document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");
  let count = 0;

  button.addEventListener("click", () => {
    count++;
    button.innerHTML = count;
  });
});
