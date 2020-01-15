//add classes to all grid-item divs such as zoom for hover capabilities
$('.grid-item').addClass('zoom');

var $container = $('#masonry-grid');
var $aboutPage = $('#about-page');
var $pageContent = $('#page-content')

//dictionary for descriptions of images
var imagesDict = new Object();

imagesDict["images/0a_DELICACY.jpg"] = "This one looks cool";




function applyMasonry(){
  $container.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    fitWidth: true,
    isAnimated: true,
  });
}

//Load masonry after all images are loaded
//Options:
//itemselector: use tag "grid-item" to identify grid items
//columnWidth: set to string for dynamic size
//fitWidth: true so that container resizes based on numCols


$container.imagesLoaded(function(){
  applyMasonry();
});

$(document).ready(function(){
    $(this).scrollTop(0);
});


//load  page when clicked on Navbar
function switchPage(pageID){
  //add hidden element to all elements on page
  $('#page-content').children().addClass("hidden");

  //remove hidden element from selected child and its children
  $('#'.concat(pageID)).removeClass("hidden");
  $('#'.concat(pageID)).children().removeClass("hidden");
}



//get image attributes on click
$(".grid-item").click(function(){
  var imgSRC = $(this).find("img").attr("src");

  blowUpImg(imgSRC);
});

//make img you clicked bigger, and have text below it
function blowUpImg(imgSRC){
  //hide all elements except for image peek div and its children
  $('#screen').children().addClass("hidden");
  $('#image-peek-container').removeClass("hidden");
  $('#image-peek-container').children().removeClass("hidden");

  //change image in div to be the one you clicked
  document.getElementById("image-peek-image").src = imgSRC;

  //change text under image to match dictionary entry
  document.getElementById("image-peek-text").innerHTML = imagesDict[imgSRC];
}

//go back to gallery on close button click
$("#image-peek-close-button-image").click(function(){
  $("#screen").children().removeClass("hidden");
  $("#image-peek-container").addClass("hidden");
});


//scroll detection for image peek screen
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//       // downscroll code
//    } else {
//       // upscroll code
//    }
//    //lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);
