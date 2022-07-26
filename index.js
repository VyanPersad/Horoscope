
let hname1, hname2;
let hDay, horoType, horoPeriod, hStat;
let url = 'https://astro-daily-live-horoscope.p.rapidapi.com/horoscope';
let dayRow = document.getElementById("dayRow");
var text3 = document.getElementById("horo3");
var text4 = document.getElementById("horo4");

window.onload = clear();

function clear() {
    document.getElementById("career").checked = false;
    document.getElementById("love").checked = false;
    document.getElementById("normal").checked = false;
    document.getElementById("daily").checked = false;
    document.getElementById("week").checked = false;
    document.getElementById("month").checked = false;
    document.getElementById("yest").checked = false;
    document.getElementById("tod").checked = false;
    document.getElementById("tom").checked = false;
    document.getElementById("single").checked = false;
    document.getElementById("couple").checked = false;
}

function typeSel(id) {
    if (id == "career") {
        horoType = "-career";
        singleRow.style.visibility = "hidden";
        hstat = "";
    } else if (id == "love") {
        horoType = "-love";
        hDay = " ";
        singleRow.style.visibility = "visible";
    } else if (id == "normal") {
        horoType = "";
        hstat = "";
        singleRow.style.visibility = "hidden";
    }
}

function setPeriod(id) {
    if (id == "daily") {
        horoPeriod = "";
        hstat = "";
        dayRow.style.visibility = "visible";
        singleRow.style.visibility = "hidden";
    } else if (id == "week") {
        horoPeriod = "-weekly";
        hDay = "";
        dayRow.style.visibility = "hidden";
    } else if (id == "month") {
        horoPeriod = "-monthly";
        hDay = "";
        dayRow.style.visibility = "hidden";
    }
}

function setStatus(id) {
    if (id == "single") {
        hstat = "/single";
    } else if (id == "couple") {
        hstat = "/couple";
    } else {
        hstat = "";
    }
}

function setDay(id) {
    if (id == "yest") {
        hDay = "/yesterday";
    } else if (id == "tod") {
        hDay = "/today";
    } else if (id == "tom") {
        hDay = "/tomorrow";
    }
}

function setDate() {
    var month = document.getElementById("selections");
    var monthIn;
    var mon = month.options[month.selectedIndex].value;
    if (mon == "Jan") {
        monthIn = "00";
    } else if (mon == "Feb") {
        monthIn = "01";
    } else if (mon == "Mar") {
        monthIn = "02";
    } else if (mon == "Apr") {
        monthIn = "03";
    } else if (mon == "May") {
        monthIn = "04";
    } else if (mon == "Jun") {
        monthIn = "05";
    } else if (mon == "Jul") {
        monthIn = "06";
    } else if (mon == "Aug") {
        monthIn = "07";
    } else if (mon == "Sep") {
        monthIn = "08";
    } else if (mon == "Oct") {
        monthIn = "09";
    } else if (mon == "Nov") {
        monthIn = "10";
    } else if (mon == "Dec") {
        monthIn = "11";
    }
    var dayIn = document.getElementById("dayIn").value;
    var yearIn = document.getElementById("yearIn").value;
    var date = new Date(yearIn, monthIn, dayIn);
    document.getElementById("dateOut").value = date.toDateString();
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var text = document.getElementById("horo1");
    var text2 = document.getElementById("horo2");

    if ((monthIn == "02" && dayIn >= "21") || (monthIn == "03" && dayIn <= "19")) {
        text.innerText = "Aries";
        hname1 = "aries";
        img1.src = "img/aries.jpg";
    } else if ((monthIn == "03" && dayIn >= "20") || (monthIn == "04" && dayIn <= "20")) {
        text.innerText = "Taurus";
        hname1 = "taurus";
        img1.src = "img/bull.jpg";
    } else if ((monthIn == "04" && dayIn >= "21") || (monthIn == "05" && dayIn <= "20")) {
        text.innerText = "Gemini";
        hname1 = "gemini";
        img1.src = "img/gemini.jpg";
    } else if ((monthIn == "05" && dayIn >= "21") || (monthIn == "06" && dayIn <= "22")) {
        text.innerText = "Cancer";
        hname1 = "cancer";
        img1.src = "img/cancer.jpg";
    } else if ((monthIn == "06" && dayIn >= "23") || (monthIn == "07" && dayIn <= "22")) {
        text.innerText = "Leo";
        hname1 = "leo";
        img1.src = "img/lion.jpg";
    } else if ((monthIn == "07" && dayIn >= "23") || (monthIn == "08" && dayIn <= "22")) {
        text.innerText = "Virgo";
        hname1 = "virgo";
        img1.src = "img/virgin.jpg";
    } else if ((monthIn == "08" && dayIn >= "23") || (monthIn == "09" && dayIn <= "22")) {
        text.innerText = "Libra";
        hname1 = "libra";
        img1.src = "img/libra.jpg";
    } else if ((monthIn == "09" && dayIn >= "23") || (monthIn == "10" && dayIn <= "21")) {
        text.innerText = "Scorpio";
        hname1 = "scorpio";
        img1.src = "img/scorpio";
    } else if ((monthIn == "10" && dayIn >= "22") || (monthIn == "11" && dayIn <= "21")) {
        text.innerText = "Sagittarius";
        hname1 = "sagittarius";
        img1.src = "img/sagittarius.jpg";
    } else if ((monthIn == "11" && dayIn >= "21") || (monthIn == "00" && dayIn <= "20")) {
        text.innerText = "Capricorn";
        hname1 = "capricorn";
        img1.src = "img/capricorn.jpg";
    } else if ((monthIn == "00" && dayIn >= "21") || (monthIn == "01" && dayIn <= "18")) {
        text.innerText = "Aquarius";
        hname1 = "aquarius";
        img1.src = "img/aquarius.jpg";
    } else if ((monthIn == "01" && dayIn >= "19") || (monthIn == "02" && dayIn <= "20")) {
        text.innerText = "Pisces";
        hname1 = "pisces";
        img1.src = "img/fishes.jpg";
    }

    if ((monthIn == "03" && dayIn >= "18") || (monthIn == "04" && dayIn <= "13")) {
        text2.innerText = "Aries";
        hname2 = "aries";
        img2.src = "img/aries.jpg";
    } else if ((monthIn == "04" && dayIn >= "13") || (monthIn == "05" && dayIn <= "21")) {
        text2.innerText = "Taurus";
        hname2 = "taurus";
        img2.src = "img/bull.jpg";
    } else if ((monthIn == "05" && dayIn >= "21") || (monthIn == "06" && dayIn <= "20")) {
        text2.innerText = "Gemini";
        hname2 = "gemini";
        img2.src = "img/gemini.jpg";
    } else if ((monthIn == "06" && dayIn >= "20") || (monthIn == "07" && dayIn <= "10")) {
        text2.innerText = "Cancer";
        hname2 = "cancer";
        img2.src = "img/cancer.jpg";
    } else if ((monthIn == "07" && dayIn >= "10") || (monthIn == "08" && dayIn <= "16")) {
        text2.innerText = "Leo";
        hname2 = "leo";
        img2.src = "img/lion.jpg";
    } else if ((monthIn == "08" && dayIn >= "16") || (monthIn == "09" && dayIn <= "30")) {
        text2.innerText = "Virgo";
        hname2 = "virgo";
        img2.src = "img/virgin.jpg";
    } else if ((monthIn == "09" && dayIn >= "30") || (monthIn == "10" && dayIn <= "23")) {
        text2.innerText = "Libra";
        hname2 = "libra";
        img2.src = "libra.jpg";
    } else if ((monthIn == "10" && dayIn >= "23") || (monthIn == "10" && dayIn <= "29")) {
        text2.innerText = "Scorpio";
        hname2 = "scorpio";
        img2.src = "scorpio";
    } else if ((monthIn == "10" && dayIn >= "29") || (monthIn == "11" && dayIn <= "17")) {
        text2.innerText = "Ophiuchus";
        hname2 = "ophiuchus";
    } else if ((monthIn == "11" && dayIn >= "17") || (monthIn == "00" && dayIn <= "20")) {
        text2.innerText = "Sagittarius";
        hname2 = "sagittarius";
        img2.src = "img/sagittarius.jpg";
    } else if ((monthIn == "00" && dayIn >= "20") || (monthIn == "01" && dayIn <= "16")) {
        text2.innerText = "Capricorn";
        hname2 = "capricorn";
        img2.src = "img/capricorn.jpg";
    } else if ((monthIn == "01" && dayIn >= "16") || (monthIn == "02" && dayIn <= "11")) {
        text2.innerText = "Aquarius";
        hname2 = "aquarius";
        img2.src = "img/aquarius.jpg";
    } else if ((monthIn == "02" && dayIn >= "11") || (monthIn == "03" && dayIn <= "13")) {
        text2.innerText = "Pisces";
        hname2 = "pisces";
        img2.src = "img/fishes.jpg";
    }
    loadHoroscope(horoType, horoPeriod, hname1, hDay, hstat);
    loadNewHoroscope(horoType, horoPeriod, hname2, hDay, hstat);
}

function loadHoroscope(horoscopeType, horoscopePeriod, horoscope, day, stat) {
    let url1 = `${url}${horoscopeType}${horoscopePeriod}/${horoscope}${day}${stat}`;
    console.log(url1);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df6fd76db4mshd17c9dc39595f0fp151e04jsnb65e107ccae5',
            'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com'
        }
    };
    fetch(url1, options)
        .then(response => response.json())
        .then(response => {
            text3.innerHTML = `<div>${JSON.stringify(response[horoscope])}</div>`;
        });
}

function loadNewHoroscope(horoscopeType, horoscopePeriod, horoscope, day, stat) {
    let url1 = `${url}${horoscopeType}${horoscopePeriod}/${horoscope}${day}${stat}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df6fd76db4mshd17c9dc39595f0fp151e04jsnb65e107ccae5',
            'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com'
        }
    };
    fetch(url1, options)
        .then(response => response.json())
        .then(response => {
            text4.innerHTML = `<div>${JSON.stringify(response[horoscope])}</div>`;
        });
}





