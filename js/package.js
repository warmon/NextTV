$(document).ready(function () {
    $(".unix-timestamp").each(function (i) {
        if (this.style.visibility == 'hidden') {
            var localDate = UtcToLocal($(this).find('span').html());
            $(this).parent().find('.date-to span').html(dateTo(localDate));
            $(this).find('span').html(timeConverter(localDate));
            this.style.visibility = 'visible';
            $(this).parent().find('.date-to').css('visibility', 'visible');
            $(this).parent('.pack-text').css('display', 'block');
        }
    });
});

function UtcToLocal(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var offset = a.getTimezoneOffset() / 60;
    var hours = a.getHours();
    a.setHours(hours - offset);

    return a;
}

function timeConverter(localDate) {
    var zp = function (val) {
        return (val <= 9 ? '0' + val : '' + val);
    }
    var year = localDate.getFullYear();
    var month = localDate.getMonth() + 1;
    var date = localDate.getDate();
    var hour = localDate.getHours();
    var min = localDate.getMinutes();
    var sec = localDate.getSeconds();
    var time = year + '-' + zp(month) + '-' + zp(date) + ' ' + zp(hour) + ':' + zp(min) + ':' + zp(sec);
    return time;
}

function dateTo(date) {
    var currDate = new Date(); // текущее время

    var timeLeft = (date.getTime() - currDate.getTime());

    var e_daysLeft = timeLeft / 86400000;
    var daysLeft = Math.floor(e_daysLeft);

    var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    var hrsLeft = Math.floor(e_hrsLeft);

    var e_minsLeft = (e_hrsLeft - hrsLeft) * 60;
    var minsLeft = Math.floor(e_minsLeft);

    return decOfNum(daysLeft, ['день', 'дня', 'дней']) + decOfNum(hrsLeft, ['час', 'часа', 'часов']) + decOfNum(minsLeft, ['минута', 'минуты', 'минут']);
}

function decOfNum(number, titles) {
    if (number > 0) {
        cases = [2, 0, 1, 1, 1, 2];
        return number + ' ' + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]] + ' ';
    } else {
        return '';
    }
}