function Compete()
{
    var Elem = 'Фамилия:' +document.Sel1.family.value +
    "\nИмя:" + document.Sel1.name.value +
    "\nВозраст:" + document.Sel1.age.value +
    "\nТелефон:" + document.Sel1.phone.value;
    alert(Elem);

}
function checkAge(age) {
if (age < 18)
    return '18';
else 
    return age;
}