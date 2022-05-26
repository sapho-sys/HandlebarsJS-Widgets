function textBill(){
    var textCall=0;
    var textSms=0;

    function textCost(billTypeEntered){
        if(billTypeEntered === "sms"){
            textSms += 0.75;
        }else if(billTypeEntered === "call"){
            textCall += 2.75;
        }
    }
    function getTextCall(){
        return textCall.toFixed(2);
    }

    function getTextSms(){
        return textSms.toFixed(2);
    }

    function getTotal(){
        return (textCall + textSms).toFixed(2);
    }

    function totalClass(){
        if(getTotal()>= 30){
            return "danger"
        }else if(getTotal()>=20){
            return "warning"
        }
    }

    return{
        textCost,
        getTextCall,
        getTextSms,
        getTotal,
        totalClass
    }
}