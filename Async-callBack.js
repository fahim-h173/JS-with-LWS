function mycalc(num1 , num2,callback ) {
    let sum = num1 + num2;
    // if (callback) {callback(sum);}
    callback(sum)
    
}

function display(some) {
    document.getElementById('test3').innerHTML = some;
}
 mycalc(9,8,display)

 console.log('line 1 code');
//  setInterval(function () {
//      console.log('line 2 code');
//  },3000)
 console.log('line 3 code');


 // callback Pattern and Asynchronous Example

 const paymentSuccess = true;
 const marks = 70;


 function enroll(callback) {
     console.log('Course enrollment is in progress..');

     setTimeout(function () {
         if (paymentSuccess) {
             callback();
         }else {
             console.log('Payment faild!');
         }
     },2000)
 }
function progress(callback) {
    console.log('course on progress...');
    setTimeout(function () {
        if (marks >=80) {
            console.log('You have enough marks to get the certificate');
            callback()
        }else{
            console.log('You do not have enough marks to get the cerficate');
            
        }
    },3000);
}
function getCertificate() {
    console.log("Preparing your Certificate...");

    setTimeout(function(){
        console.log('Congrats! You got the Certificate!');
    },1000)
}

enroll(function(){
    progress(getCertificate)
})
