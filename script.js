const tableButtons = document.getElementsByClassName("table_button");
//console.log(tableButtons);
for (const tableButton of tableButtons) {
  // console.log(tableButton);
  tableButton.addEventListener("click", function(event){
 event.target.getElementsByClassName("table_button")[0].classList.toggle("active");
  })
  console.log("ok");
}