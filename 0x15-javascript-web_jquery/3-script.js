//JavaScript script that adds the class red to the <header> element 
//when the user clicks on the tag DIV#red_header using JQuery API

let red_header = $("red_header");
let header = $("header");
red_header.click(function() {
   header.addClass("red");
});
