

let paymentSuccess = true;
let marks=80;

function enroll (){
    console.log('Course enrollment is in progress..');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (paymentSuccess) {
                resolve();
            }else{
                reject('payment faild!')
            }
        },3000);

    });
    return promise;
}

function progress() {
    console.log('Course on Progress....');
    const promise = new Promise(function(resolve,reject){
        setTimeout(function () {
            if (marks >= 80){
                resolve();
            }else{
                reject('You don not have enough marks to get the certificate')
            }
        },2000);
    });
    return promise;
}

function getCertificate() {
    console.log('Preparing Your Certificate..!');
    const promise = new Promise(function (resolve) { 
        setTimeout(function (){
            resolve('Congrats! You got the Certificate');   
        },1000);
    });
    return promise;
}

async function course() {
    try {await enroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
   }catch(err) {
       console.log(err);
   }
}

course()





// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })