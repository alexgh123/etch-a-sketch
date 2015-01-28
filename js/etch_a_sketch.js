$(document).ready(function(){
    $("#cat").click(function(){
      $(this).slideUp();
    });

    // begin click event operations

    $("span").click(function(){

      $("span").text("ahhh, the cat is back!");

      $("span").slideDown("#cat");

    }); //ends click event


}); //end doc ready functions

