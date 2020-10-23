"use strict"
function zodiac(){
    console.log('zodiac works');

    //data
    let days = document.getElementById('myDay').value;
    days = parseInt(days);
    console.log(days);

    let months = document.getElementById('myMonth').value;
    months = parseInt(months);
    console.log(months);

    //where to write it
    let answer;
    let field = document.getElementById('answerMe');

    //clean it
    field.textContent = "";

    //switch
    let dates = {
       
        data1  : (months == 1 && days >= 20)  || (months == 2 && days <= 18),
        data2  : (months == 2 && days >= 19)  || (months == 3 && days <= 20),
        data3  : (months == 3 && days >= 21)  || (months == 4 && days <= 19),
        data4  : (months == 4 && days >= 20)  || (months == 5 && days <= 20),
        data5  : (months == 5 && days >= 21)  || (months == 6 && days <= 20),
        data6  : (months == 6 && days >= 21)  || (months == 7 && days <= 22),
        data7  : (months == 7 && days >= 23)  || (months == 8 && days <= 22),
        data8  : (months == 8 && days >= 23)  || (months == 9 && days <= 22),
        data9  : (months == 9 && days >= 23)  || (months == 10 && days <= 22),
        data10 : (months == 10 && days >= 23) || (months == 11 && days <= 21),
        data11 : (months == 11 && days >= 22) || (months == 12 && days <= 21),
        data12 : (months == 12 && days >= 22) || (months == 1 && days <= 19)
    }
    
    new Array(dates).forEach(element => {
        console.log(element);
    });

    //switch
switch (true) {
    case dates.data1:
        
        answer = "Aquarius";
                
        break;
    case dates.data2:

        answer = "Pisces";
                
        break;
    case dates.data3:

        answer = "Aries";
                
        break;
    case dates.data4:

        answer = "Taurus";
                
        break;
    case dates.data5:

        answer = "Gemini";
                
        break;
    case dates.data6:

        answer = "Cancer";
                
        break;
    case dates.data7:

        answer = "Leo";
                
        break;
    case dates.data8:

        answer = "Virgo";
                
        break;
    case dates.data9:

        answer = "Libra";
                
        break;
    case dates.data10:

        answer = "Scorpio";
                
        break;
    case dates.data11:

        answer = "Sagitarius";
                
        break;
    case dates.data12:

        answer = "Capricorn";
                
        break;

    default:
        answer = "none you fool!"
        break;


}
console.log(`Your start sign is: ${answer}!`);
field.textContent = `Your start sign is: ${answer}!`;

}
//switch / if

function zodiac2(){

    console.log('zodiac2 works');

    //data
    let days = parseInt(document.getElementById('myDay').value);
    console.log(days);

    let months = parseInt(document.getElementById('myMonth').value);
    console.log(months);

    //where to write it
    let answer;
    let field = document.getElementById('answerMe');

    //clean it
    field.textContent = "";

    //wrong in ternary
    let wrong = "none you fool!";


      //switch

switch (months) {
    case 1:

     (days <= 19) ? answer = "Capricorn" :
     (days <= 31) ? answer = "Aquarius" : answer = wrong;
        
        break;
    case 2:

    (days <= 18) ? answer = "Aquarius" :
    (days <= 29) ? answer = "Pisces" : answer = wrong;
                
        break;
    case 3:

    (days <= 20) ? answer = "Pisces" :
    (days <= 31) ? answer = "Aries" : answer = wrong;
                
        break;
    case 4:

    (days <= 19) ? answer = "Aries" :
    (days <= 30) ? answer = "Taurus" : answer = wrong;
                
        break;
    case 5:

    (days <= 20) ? answer = "Taurus" :
    (days <= 31) ? answer = "Gemini" : answer = wrong;
                
        break;
    case 6:

    (days <= 20) ? answer = "Gemini" :
    (days <= 30) ? answer = "Cancer" : answer = wrong;
                
        break;
    case 7:

    (days <= 22) ? answer = "Cancer" :
    (days <= 31) ? answer = "Leo" : answer = wrong;
                
        break;
    case 8:

    (days <= 22) ? answer = "Leo" :
    (days <= 31) ? answer = "Virgo" : answer = wrong;
                
        break;
    case 9:

    (days <= 22) ? answer = "Virgo" :
    (days <= 30) ? answer = "Libra" : answer = wrong;
                
        break;
    case 10:

    (days <= 22) ? answer = "Libra" :
    (days <= 31) ? answer = "Scorpio" : answer = wrong;
                
        break;
    case 11:

    (days <= 21) ? answer = "Scorpio" :
    (days <= 30) ? answer = "Sagitarius" : answer = wrong;
                
        break;
    case 12:

    (days <= 21) ? answer = "sagitarius" :
    (days <= 31) ? answer = "Capricorn" : answer = wrong;
                
        break;

    default:
        answer = "wrong star you fool!"
        break;

}
console.log(`Your start sign is: ${answer}!`);
field.textContent = `Your start sign is: ${answer}!`;

}
