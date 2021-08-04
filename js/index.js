
window.alert("jesuof")
document.querySelector(".projname").addEventListener("mouseover",function () {
  document.querySelector("codeone").classList.remove("hidden");

  document.querySelector("codetwo").classList.remove("hidden");
})

document.querySelector(".projname").addEventListener("mouseout",function(){
  document.querySelector("codeone").classList.add("hidden");

  document.querySelector("codetwo").classList.add("hidden");


});
