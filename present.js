
var to = 'Trang Anh';
var gift_url = 'https://www.facebook.com/profile.php?id=100025681591487&sk=photos';
var gift_image_url = 'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/387512716_3613780095558047_4654319306215902978_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=cobrWOGG6OkAX9MnSG5&_nc_ht=scontent.fhan14-2.fna&oh=03_AdTRnPnsgZzW7-PDnz3VrPvVqmI3pht8B2USI-f0Wo7YNQ&oe=65ACAB18';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

