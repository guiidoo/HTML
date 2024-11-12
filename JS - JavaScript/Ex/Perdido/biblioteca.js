function calculaAreaCirculo()
{
    let raio=document.getElementById("raio").value
    //alert(Math.PI*Math.pow(raio,2))
    let area=(Math.PI*Math.pow(raio,2))
    area=area.toFixed(2)
    document.getElementById("resultado").value=area
}

function inverteNumero()
{
    let num=document.getElementById("numero").value
    num=num.toString().split("").reverse().join("")
    document.getElementById("resultado").value=num
}

function contarVogais()
{
    let palavra=document.getElementById('palavra').value
    let letras=palavra.split("")
    let contador=0
    for (let i=0; i<letras.length; i++)
    {
        //contar as vogais
        //   | pipe
        if (letras[i]=='a' || letras[i]=='e' || letras[i]=='i' || letras[i]=='o' ||letras[i]=='u')
        {
            contador++
        }
    }
    document.getElementById('vogais').value= contador
}

function conta()
{
    let c=document.getElementById("c").value
    let j=document.getElementById("j").value/100
    let m=document.getElementById("m").value
    let r=Number (c*Math.pow(1+j, m)).toFixed(2)

    let resultado=document.getElementById("resultado").value=r

}











