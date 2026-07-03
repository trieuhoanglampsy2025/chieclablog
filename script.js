const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if(navToggle){

navToggle.addEventListener("click",()=>{

nav.classList.toggle("is-open");

});

}

const searchBtn=document.querySelector(".search-toggle");

searchBtn.addEventListener("click",()=>{

alert("Chức năng tìm kiếm sẽ được bổ sung ở phiên bản tiếp theo.");

});
