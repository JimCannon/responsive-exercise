let modal = document.getElementById("myModal");
let btn = document.getElementById("mybtn");
// btn.onclick = function () {
//   modal.style.display = "block";
// }

btn.onclick = () => {
  modal.style.display = "block";
}

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = "none";
  } 
}

/*
window.onscroll = function () {
  scrollFunction()
};
function scrollFunction(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "30px";
  }
}
*/