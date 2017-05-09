var link = document.querySelector(".js-write-us");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".close-form");
var map = document.querySelector(".map-modal");
var bigmap = document.querySelector(".modal-map");
var close_map = document.querySelector(".close-form-map");

var login = document.querySelector(".user-block-login");
var login_popup = document.querySelector(".login-popup");
var close_login =document.querySelector(".close-login-popup");



map.addEventListener("click", function(event) {
  event.preventDefault();
  bigmap.classList.add("modal-map-show");
});

close_map.addEventListener("click", function(event) {
  event.preventDefault();
  bigmap.classList.remove("modal-map-show");
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
});

login.addEventListener("click", function(event) {
    event.preventDefault();
    login_popup.classList.add("login-show");
    
});

close_login.addEventListener("click", function (event) {
    event.preventDefault();
    login_popup.classList.remove("login-show");
});
