$(document).ready(function() {
  var link = $('.menu__link');
  var linkActive = $('.menu__link-active');
  var menu = $('.mobile');
  var mobileLink = $('.mobile__link')

  link.click(function() {
    link.toggleClass('menu__link-active');
    menu.toggleClass('mobile__active');
  });

  linkActive.click(function() {
    link.removeClass('menu__link-active');
  });

  mobileLink.click(function() {
    menu.toggleClass('mobile__active');
    link.toggleClass('menu__link-active');
  });

  $('a[href^="#"]').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});

$(document).scroll(function() {
  if ($(document).scrollTop() >= 100) {
    $('.anchor').fadeIn();
  } else {
    $('.anchor').fadeOut();
  }
});

'use strict';

document.body.onload = function() {
  setTimeout(function() {
    var preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
}

var loader = function(event) {
  var show = "<span> Файл готовий до відправлення!</span>";
  var output = document.querySelector(".footer__form-file");

  output.innerHTML = show;
  output.classList.add("active");

};

var fileInput = document.getElementById("upload");
fileInput.addEventListener('change', loader);
