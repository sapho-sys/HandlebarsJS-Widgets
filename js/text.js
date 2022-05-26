var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var addBtn2 = document.querySelector(".addToBillBtn");
var billTypeEntered = document.querySelector(".billTypeText");
var callsTotal1 = 0;
var smsTotal1 = 0;

let Instantiate = textBill();

addBtn2.addEventListener("click", function () {
    var billTypeEntered = document.querySelector(".billTypeText").value.toLowerCase().trim();
    var textTemplate = document.querySelector(".textTemplate").innerHTML;
    var userTextTemplate = Handlebars.compile(textTemplate);

    Instantiate.textCost(billTypeEntered)


    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = userTextTemplate({ callTotalOne: Instantiate.getTextCall() });
    smsTotalOne.innerHTML = userTextTemplate({ smsTotalOne: Instantiate.getTextSms() });

    totalOne.innerHTML = userTextTemplate({ totalOne: Instantiate.getTotal() });

    totalOne.classList.remove("danger");
    totalOne.classList.remove("warning");
    totalOne.classList.add(Instantiate.totalClass());

})


