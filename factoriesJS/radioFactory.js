function radBill(){
    var radioCall=0;
    var radioSms=0;

    function radCost(checked){
        if(checked === "sms"){
            radioSms += 0.75;
        }else if(checked === "call"){
            radioCall += 2.75;
        }
    }
    function getRadioCall(){
        return radioCall.toFixed(2);
    }

    function getRadioSms(){
        return radioSms.toFixed(2);
    }

   

    function getTotal2(){
        return (radioCall + radioSms).toFixed(2);
    }

    function totalClass(){
        if(getTotal2()>= 50){
            return "danger"
        }else if(getTotal2()>=30){
            return "warning"
        }
    }

    return{
        radCost,
        getRadioCall,
        getRadioSms,
        getTotal2,
        totalClass
    }
}