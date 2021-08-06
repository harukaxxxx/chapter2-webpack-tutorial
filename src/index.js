import $ from 'jquery';
const SCSS = require('./assets/style/main.scss');

var counter = 0;

$(window).on('load', () => {
  $('#counter').html(counter);
  $('#btnAdd').on('click', (e) => {
    counter++;
    $('#counter').html(counter);

    // RandomHeart
    $('.show').addClass('hide').removeClass('show');
    var selector = '.hide:nth-child(';
    var random = Math.floor(Math.random() * 4) + 1;
    $(selector.concat(random, ')')).addClass('show').removeClass('hide');

    // RandomColor
    var color = '#';
    $('#counter').css(
      'color',
      color.concat(Math.floor(Math.random() * 16777215).toString(16))
    );
    console.log(
      color.concat(Math.floor(Math.random() * 16777215).toString(16))
    );
  });
});
