   
    function Dec2Bin ()
    {
    const numeros = document.getElementById("char-input").value;
    if (numeros === '') 
    {
    return alert("Por favor, escreva um numero binário");
    }
    numeros.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert("Por favor, escreva um numero binário");
    });
    const decimal = parseInt( numeros, 2 );
    document.getElementById("convertido").innerHTML = numeros + " na base decimal é: " + decimal;        
    }    
