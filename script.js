// $ - invokes JQUERY
// ("") - selector (# = id, . = class)
// .--- = action
// ("", "") - parameters

console.log("This is working");

// Must wait for the elements on the page to load before Javascript can be executed on them. 
window.onload = function(){

    //inFunction, specifies the function to run when the mouseenter event occurs
    //outFunction, specifies the function to run when the mouseleave event occurs
    $(".navLogo").hover(sloganEnter, sloganExit);

    
    $("#event-1").hover(changeEventHighlight);
    $("#event-2").hover(changeEventHighlight);
    $("#event-3").hover(changeEventHighlight);
    
};

function sloganEnter(){
	$(".navLogo").attr("src", "IMAGES/Battle-Slogan.png");
};

function sloganExit(){
	$(".navLogo").attr("src", "IMAGES/Battle-Logo.png");
};

function changeEventHighlight(){

    var image = $("#"+this.id+"-image").attr("src");
    var title = $("#"+this.id+"-title").text();
    var caption = $("#"+this.id+"-caption").text();

    // var image = $("#"+this.id).attr("src");
    $("#event-highlight-photo").attr("src", image);
    $("#event-highlight-title").text(title);
    $("#event-highlight-caption").text(caption);
    // console.log(title);
}

