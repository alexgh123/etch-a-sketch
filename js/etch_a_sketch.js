$(document).ready(function(){
  $('body').prepend('<div class ="container"></div>')

  $('.container').prepend('<button onclick= "newGrid(); return false">New Grid</button>')
  .append('<ul></ul>')
  .append('<ul></ul>')
  .append('<ul></ul>')
  .append('<ul></ul>') // these ULs are added and work

  $('ul').append('<li></li>')
    .append('<li></li>')
    .append('<li></li>')
    .append('<li></li>') // these li elements work

    $('li').css({
      display: 'inline-block',
      'list-style-type': 'none',
      height: '25px',
      width: '25px',
      border: '1px black solid',
      margin: '0 1px',
      'box-sizing': 'border-box'
    }).hover(function(){
      $(this).css('background-color', 'blue')
    }); // all of this works beautifully

    $('.container').css({
      margin:'0 auto'
    }); // i see no evidence of what this is doing yet

    $('ul').css({
      padding: '0',
      margin: '0'
    });

    $('button').css({
      margin: '10px 0',
      padding: '10px',
      'font-size': '16px'
    });
  }); //so this is what I was missing

  function newGrid(){

    $('li').css('background-color', 'white');
    $('container').remove()
    $('body').prepend('<div class= "container"></div>') // works

    var width = prompt('Enter a new grid width');

    if (width > 90){
      var width = prompt('Grid width must be 90 or less');
    }

    var height = prompt('Enter a new grid height');

    if (height > 90){
      var height = prompt('Grid height must be 40 or less');
    }

    for (var i = 0; i <= height; i++){
      $('.container').append('<ul></ul>');
    }

    for (var i = 0; i <= width; i++){
      $('ul').append('<li></li>')
    }

    $('.container').prepend('<button onclick="newGrid(); return false">button?</button>')

    $('li').css({
      display: 'inline-block',
      'list-style-type': 'none',
      height: '25px',
      width: '25px',
      border: '1px black solid',
      margin: '0 1px',
      'box-sizing': 'border-box'
    }).hover(function(){
      $(this).css('background-color', 'blue')
    });

    $('container').css({
      margin: '0 auto'
    });

    $('ul').css({
      padding:'0',
      margin: '0'
    });

    $('button').css({
      margin: '10px 0',
      padding: '10px',
      'font-size': '16px'
    });
  }; // this ends new grid function

   // only here to call it to see it move as i make it


// }); //end doc ready functions



