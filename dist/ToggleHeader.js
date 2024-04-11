// These are all the Function DropDowns
function dropDown1() {
  document.querySelector("#m1").classList.toggle("hidden");
}
function dropDown2() {
  document.querySelector("#m2").classList.toggle("hidden");
}
function dropDown3() {
  document.querySelector("#m3").classList.toggle("hidden");
}
function dropDown4() {
  document.querySelector("#m4").classList.toggle("hidden");
}
dropDown1();
dropDown2();
dropDown3();
dropDown4();
// End of DropDown Function
// This is Function For click Open SideBar 
function openBtn() {
    document.querySelector("#leftMenu").style.width = "300px";
}
// This is Function For click Close SideBar 
function closeBtn() {
  document.querySelector("#leftMenu").style.width = "0px";
}
