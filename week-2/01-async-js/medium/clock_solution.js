function clock() {
  const currentDate = new Date();
  const currentTime12 = currentDate.toLocaleTimeString();
  const currentTime24 = currentDate.toLocaleTimeString("en-US", {
    hour12: false,
  });

  console.log("12h:", currentTime12);
  console.log("24h:", currentTime24);
}

setInterval(clock, 1000);
