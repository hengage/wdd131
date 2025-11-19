document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const temp = 45; // °F
const speed = 5; // mph

function calculateWindChill(t, s) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

const windChill =
  temp <= 50 && speed > 3 ? calculateWindChill(temp, speed) : "N/A";

document.getElementById("windchill").textContent = windChill;
