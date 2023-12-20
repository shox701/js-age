alert("Assalomu alaykum");
var ism = prompt("Ismingizni kiriting")
var yosh = prompt("Yoshingizni kiriting")
var elTitle = document.querySelector(".title")
if(yosh > 18){
elTitle.textContent = ism + ", oq yo'l!".toUpperCase();
}else if(yosh < 18){
elTitle.textContent = ism + ", sen hali yoshsan!".toUpperCase();
}else if(yosh == 18){
elTitle.textContent = ism + ", oq yo'l ehtiyot bo'l!".toUpperCase();
}


