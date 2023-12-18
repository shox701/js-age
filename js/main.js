alert("Assalomu alaykum");
var ism = prompt("Ismingizni kiriting")
var yosh = prompt("Yoshingizni kiriting")
if(!isNaN(yosh)){
yosh = parseInt(yosh, 10);
var elTitle = document.querySelector(".title")
if(yosh > 18){
elTitle.textContent = ism + ", oq yo'l!"
}else if(yosh < 18){
elTitle.textContent = ism + ", sen hali yoshsan!"
}else{
elTitle.textContent = ism + ", oq yo'l ehtiyot bo'l!"
}
}else{
    alert("Noto'g'ri yosh kiritildi! Iltimos, to'g'ri raqam kiriting!");
}

