const stars = document.querySelectorAll(".fa-star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    for (let i = 1; i <= 5; i++) {
      document.getElementById(`star${i}`).style.color = "grey";
    }
    for (let i = 1; i <= index + 1; i++) {
      document.getElementById(`star${i}`).style.color = "yellow";
    }
  });
});
