function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var selection = 0;
    selection = Math.random() * names.length ;
    selection = Math.floor(selection) ;
    var whoPay = names[selection]+ " is going to buy lunch today!";
    return whoPay;
    


/******Don't change the code below*******/    
}


$("button").click(function() {
    $("#title").text(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
})