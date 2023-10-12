function updateClock(clockId, pad) {
    const clockElement = document.getElementById(clockId);
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, pad);
    const minutes = now.getMinutes().toString().padStart(4, pad);
    const seconds = now.getSeconds().toString().padStart(8, pad);
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

// 時計1: 桁数2でパディング
updateClock("clock", '愛');

// 時計2: 桁数4でパディング
updateClock("yabai_d", 'ゑ');

// 1秒ごとにそれぞれの時計を更新
setInterval(function() {
    updateClock("clock", '愛');
    updateClock("yabai_d", 'ゑ');
}, 1000);


function toggleClockVisibility() {
    const clock2Element = document.getElementById('yabai_d');
    const showClockButton = document.getElementById('showClockButton');
    
    if (clock2Element.style.display === 'none') {
        clock2Element.style.display = 'block';
        showClockButton.textContent = 'やばくない';
    } else {
        clock2Element.style.display = 'none';
        showClockButton.textContent = 'やばい';
    }
}

const button = document.getElementById('showClockButton');
button.addEventListener('click', toggleClockVisibility);
