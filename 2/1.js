function btnClick()
{
    let Txt1 = "";
    let Txt2 = "";
    Txt1 = document.Test.bt.value;
    Txt2 = document.Test.bt.name;
    document.getElementById('ex1').innerHTML="<HR>"+
        "Вы нажали кнопку: " + Txt1.bold() +
        " с именем: "  + Txt2.bold() +"<HR>";
}