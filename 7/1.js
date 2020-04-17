var OK = "Тетя Эльза чувствует себя хорошо. \nЮстас.";
var Problem = 'Тетя Эльза заболела.\nЮстас.';
function getDate() {
    var today = new Date();
    return today.toLocaleString() + '\n';
}
function CheckRadio(form, value) {
    if(value == 'Good') form.Letter.value = getDate() + OK;
    else form.Letter.value = getDate() + Problem;
}