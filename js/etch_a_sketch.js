$(document).ready(function(){
    $("#cat").click(function(){
      $(this).slideUp();
    });

    // begin click event operations

    $("span").click(function(){

      $("#cat").slideToggle();

      $("span").text("ahhh, the cat is back! (click to make him go away again");

      // $("span").slideDown("#cat");

    }); //ends click event


}); //end doc ready functions

