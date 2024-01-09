export const serchMovie = () => {
  const str = document.querySelector(".info").value;
  const checkTitle = document.querySelectorAll(".title");
  for (let i = 0; i < checkTitle.length; i++) {
    const a = checkTitle[i].innerHTML;
    if (a.toUpperCase().includes(str.toUpperCase())) {
      container[i].style.display = "block";
    } else {
      container[i].style.display = "none";
    }
  }
};
