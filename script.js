


$(document).ready(function() {

var display = function(block_name) {
  $('.product').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');


}

$('.UK').on('click', function() {
  display('formadiente', $(this));
});

$('.ES').on('click', function() {
  display('formaperla', $(this));
});

$('.CT').on('click', function() {
  display('formadisco', $(this));
});



});


var glide = new Glide('#my-slider', {
  type: 'carousel',
  startAt: 0,
  perView: 3
})

glide.mount()


