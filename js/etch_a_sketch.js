$(document).ready(function(){

    var rows = 16,
        cells = 16,
        count = 0;

    var i, j,
        top = 0
        left = 0

    var boxWidth = 50,
        boxHeight = 50;

    var $grid_wrapper = $("#grid_wrapper");
    var $fragment = $(document.createDocumentFragment());

    function addBox(opts) {
      var div = document.createElement('div');
          div.id = 'item' + opts.count;
          div.className = "alive";
          div.style.top = opts.top + "px";
          div.style.left = opts.left + "px";

          div.innerHTML = "<p>" + opts.count + '</p>';
          $fragment.append(div);
    };

    for (j = 0; j < rows; j +=) {
      top = j * boxHeight;

        for (i=0; i< cells; i += 1) {
          count += 1;

          addBox({
            count: count,
            top: top,
            left: i * boxWidth
          });
        }
      }

$grid_wrapper.html($fragment);

}); //end doc ready functions



// $("#cat").click(function(){
//       $(this).slideUp();
//     });

//     // begin click event operations

//     $("span").click(function(){

//       $("span").text("ahhh, the cat is back!");

//       $("span").slideDown("#cat");

//     }); //ends click event