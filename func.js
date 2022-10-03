function main ()
{
    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)
    var total = ""
    if(document.getElementById('soma').checked)
    total = soma(num1, num2)
    if(document.getElementById('subtracao').checked)
    total = soma(num1, num2)
    if(document.getElementById('multiplicacao').checked)
    total = soma(num1, num2)
    if(document.getElementById('divisao').checked)
    total = soma(num1, num2)
    alert(total)
    


    function soma (x, y)
    {
        return(x + y)
    }
    function subtracao (x, y)
    {
        return(x - y)
    }
    function multiplicacao (x, y)
    {
        return(x * y)
    }
    function divisao (x, y)
    {
        return(x / y)
    }
}
