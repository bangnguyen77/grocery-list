$(document).ready(function() {
  $("#grocery form").submit(function(event) {

   var groceryLists = ["protein", "carb", "vegetable", "vegetable2"];

   groceryLists.forEach(function(groceryLists) {
     var userInput = $("input#" + groceryLists).val();
     $("." + groceryLists).sort(userInput);
         $(".groceryLists").text(userInput);
     //   });
     // });

  //  $("#list").show(groceryLists);
   event.preventDefault();

  });
});
});
