function askName() {
    let getName = prompt('Adınız Nedir', '');
    document.getElementById('name').innerText = getName ? getName : 'Yabancı';
}

function showTime() {
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes()< 10 ? '0'+date.getMinutes() : date.getMinutes();
    let second = date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds();
    switch (day) {
        case 1:
            day = 'Pazartesi';
            break;
        case 2:
            day = 'Salı';
            break;
        case 3:
            day = 'Çarşamba';
            break;
        case 4:
            day = 'Perşembe';
            break;
        case 5:
            day = 'Cuma';
            break;
        case 6:
            day = 'Cumartesi';
            break;
        case 0:
            day = 'Pazar';
            break;
    }
    document.querySelector('.kd__clock').innerText=`${hours+':'+minutes+':'+second+' '+day}`

    setTimeout(showTime, 1000);
}
askName();
showTime();
