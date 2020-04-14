    var  numeros = ""
    function Dec2Bin ()
    {
        numeros = document.getElementById("description2").value;
       
        var decimal = parseInt( numeros, 2 );
       
        document.getElementById("convertido").innerHTML = numeros + " na base decimal é: " + decimal;        
    }    
