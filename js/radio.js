var totalTwo = document.querySelector(".totalTwo");
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var addBtn = document.querySelector(".radioBillAddBtn");

var callsTotal = 0;
var smsTotal = 0;

let Instance = radBill();

addBtn.addEventListener("click", function () {

    var radioTemplate = document.querySelector(".radioTemplate").innerHTML;
    var userRadioTemplate = Handlebars.compile(radioTemplate);


    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    Instance.radCost(checkedRadioBtn.value);


    callTotalTwo.innerHTML = userRadioTemplate({ callTotalTwo: Instance.getRadioCall() });
    smsTotalTwo.innerHTML = userRadioTemplate({ smsTotalTwo: Instance.getRadioSms() });
    totalTwo.innerHTML = userRadioTemplate({ totalTwo: Instance.getTotal() });



    //color the total based on the criteria

    totalTwoElement.classList.remove('warning')
    totalTwoElement.classList.remove('danger')
    totalTwoElement.classList.add(Instance.totalClass())



})














