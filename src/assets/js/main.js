$(document).ready(function() {

    $('.as').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
    
        {
         breakpoint: 991,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
        },
       {
         breakpoint: 700,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   
    });
   

  
    $('.asa').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear'
    });
  
  });

  $(document).ready(function() {
  $(".testimonial").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		prevArrow: $(".testimonial-carousel-controls .prev"),
		nextArrow: $(".testimonial-carousel-controls .next")
   });
});

$().ready(function(){
  $('.slick-carousel').slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 1,
    infinite: true,
    
  });
});

function more_products()
{
document.getElementById('more_option_product').style.display='flex';
document.getElementById('more_option_product_1').style.display='flex';
document.getElementById('more_option_product_2').style.display='flex';
document.getElementById('more_option').style.display='none';
document.getElementById('more_option_1').style.display='flex';
document.getElementById('product_sect_2_1').style.display='flex';
}
function s2_button(){
  document.getElementById('New').style.border='none'; 
}
function s1_button(){
  document.getElementById('New').style.borderBottom='2vw solid rgb(199, 19, 40)'; 
}
function more_products_1()
{
  document.getElementById('more_option_product_3').style.display='flex';
  document.getElementById('more_option_product_4').style.display='flex';
  document.getElementById('more_option_product_5').style.display='flex';
  document.getElementById('more_option_product_6').style.display='flex';
  document.getElementById('more_option_1').style.display='none';
 
}

 function submenu(){
    document.getElementById('inner_submenu').style.display='block';
  }
  
 function submenu1(){
  document.getElementById('inner_submenu').style.display='none';
}

function reply_click(clicked_id)
{
    localStorage.setItem("categoryname",clicked_id);
    // localStorage.setItem("categoryid",clicked_ids);
}
function getcategoryname1(){
  localStorage.setItem("categorytype","New");
}
getcategoryname1();
function getcategoryname(clicked_id){
  localStorage.setItem("categorytype",clicked_id);
}
function getbydefaultcategorytype(){
  localStorage.setItem("singleproducttype","All");
  console.log(localStorage.getItem("singleproducttype"));
}
function getcategorytype(clicked_id){
  localStorage.setItem("singleproducttype",clicked_id);
}
function getsubcategory(){
  localStorage.getItem("menucategaryid");

}

slideConfig = {
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "dots": false,
  "infinite": true,
  "responsive": [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

ProductslideConfig = {
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "dots": false,
  "infinite": true,
  "responsive": [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 360,
      settings: {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

var mybutton = document.getElementById("myBtn");

function topfunctn(){
  window.scrollTo(0, 0);
}

function showDefinition(e) {
  console.log(e);
}
