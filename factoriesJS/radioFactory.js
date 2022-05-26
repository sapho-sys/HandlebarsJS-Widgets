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

   

    function getTotal(){
        return (radioCall + radioSms).toFixed(2);
    }

    function totalClass(){
        if(getTotal()>= 50){
            return "Danger"
        }else if(getTotal()>=30){
            return "Warning"
        }
    }

    return{
        radCost,
        getRadioCall,
        getRadioSms,
        getTotal,
        totalClass
    }
}