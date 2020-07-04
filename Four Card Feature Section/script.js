function dark_mode() {
   var bodytext = document.body;
   var buttontext = document.getElementById("button");

   bodytext.classList.toggle("dark_mode");
   buttontext.classList.toggle("dark_mode_btn");
   buttontext.innerHTML = buttontext.innerHTML.replace('OFF', 'ON');
}