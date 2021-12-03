let isim = prompt("İsminiz nedir?", "")
let isimM = document.querySelector("#isim")


isimM.innerHTML = `${isim.toUpperCase()}`


setInterval(tarih, 1000)

function tarih (){
    let myClock = new Date().getHours();
    let myMin = new Date().getMinutes();
    let mySecond = new Date().getSeconds();
    let days = new Date().getDay();
    // console.log({mySecond,myMin,myClock})
    document.querySelector("#myClock").innerHTML = myClock
    document.querySelector("#myMin").innerHTML = myMin
    document.querySelector("#mySecond").innerHTML = mySecond
    document.querySelector("#days").innerHTML = days
    
    let gunler = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let suan = gunler[days]
}



// let zamann = new Date();

// let gun = zamann.getDay();

// let gunler = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

// let suan = gunler[gun]

// console.log(suan)
// document.getElementsByName("suan").innerHTML = zamann


// document.getElementsById("days").innerHTML = days



















