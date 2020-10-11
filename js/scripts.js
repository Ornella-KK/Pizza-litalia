// business interface logic
function Order(flavour, crust, size, toppings, number){
    this.flavour=flavour;
    this.crust=crust;
    this.size=size;
    this.toppings=toppings;
    this.number=number;
}

// user interface
$(document).ready(function(){
    $("form#now").submit(function(event){
        event.preventDefault();

        var inputtedFlavour=$("#flavour").val();
        var inputtedCrust=$("#crust").val();
        var inputtedSize=($("#size").val());
        var inputtedToppings=$("#toppings").val();
        var inputtedNumber=parseInt($("input#number").val());
        

        var newOrder=new Order(inputtedFlavour, inputtedCrust, inputtedSize, inputtedToppings, inputtedNumber);
        $("p#result").append("<li><span class='result'>" +"Flavour: "+ newOrder.flavour + "</span></li>");
        $("p#result").append("<li><span class='result'>" +"Crust: "+ newOrder.crust + "</span></li>");  
        $("p#result").append("<li><span class='result'>" +"Size: "+ newOrder.size + "</span></li>"); 
        $("p#result").append("<li><span class='result'>" +"Topping: "+ newOrder.toppings + "</span></li>");
        $("p#result").append("<li><span class='result'>" +"Number: "+ newOrder.number+ "</span></li>");
    })
    $("#first").click(function(){
        $("#ttl").show();
    })
    $("#fourth").click(function(){
        prompt("Enter Your Location: ");
        prompt("Enter Your Phone Number: ");
        alert("Thank You For Ordering,Pizza will be there in a few")
    })
})
// user interface for contacts
$(document).ready(function(){
    $("#third").click(function(){
        alert("Thank You For Subscribing");
    })
})