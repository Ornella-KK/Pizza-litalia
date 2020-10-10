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
        var inputtedSize=$("#size").val();
        var inputtedToppings=$("#toppings").val();
        var inputtedNumber=$("input#number").val();

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
    $("#second").click(function(){
        alert("Your Total Charge Is: "+total)
        var total=function(){
        if(inputtedSize==small){
            return inputtedNumber*5000;
        }
        else if(inputtedSize==medium){
            return inputtedNumber*7000;
        }
        else if(inputtedSize==large){
            return inputtedNumber*9000;
        }
        else{
            return this.number;
        }
    }
    })
})