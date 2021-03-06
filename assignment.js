// https://github.com/minhaz11/js-problem-practice

//kilometer to meter conversion
function kilometerToMeter(kilo){
    if(kilo < 0){
        return 0;
    }
    return kilo*100;
}

// budget calculate
function budgetCalculator(watchCount,phoneCount,laptopCount){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalAmount = 0;

    if(watchCount < 0 ){
        totalAmount += 0;
    } else {
        totalAmount += watchPrice*watchCount;
    }

    if(phoneCount < 0 ){
        totalAmount += 0;
    } else {
        totalAmount += phonePrice*phoneCount;
    }

    if(laptopCount < 0){
        totalAmount += 0;
    } else {
        totalAmount += laptopPrice*laptopCount;
    }

    return totalAmount;

}

//hotel cost
function hotelCost(day){
    if(day < 0){
        return 0;
    }

    var totalCost = 0;

    if(day <= 10){
        totalCost = day*100;
    }
    else if(day > 10 && day <= 20) {
        var firstTenDaysCost = 100*10;
        var remainingDays = day - 10;
        var remainingDaysCost = remainingDays * 80;
       
        totalCost = firstTenDaysCost + remainingDaysCost;
    }
    else if(day > 20){
        var firstTenDaysCost = 100*10;
        var secondTenDaysCost = 80*10;
        var remainingDays = day - 20;
        var remainingDaysCost = remainingDays * 50;
       
        totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
    }

    return totalCost;
}

//mega friend
function megaFriend(friendList){
    var maxLengthName = "";

    if(friendList.length == 0){
        return 0;
    }

    for(var i = 0; i < friendList.length; i++){
      
        if(friendList[i].length > maxLengthName.length){
            maxLengthName = friendList[i]
        } 
      
        
    }
    return maxLengthName;
}
