
let clicked = 0 //once user pairs, it won't pop up again and can do other click things
//but also if figure out wifi connection instead of serial connection, won't have to worry about this

//when the user clicks anywhere on the page
// https://web.dev/serial/ 
document.addEventListener('click', async () => {
    if(clicked == 0) {
        // Prompt user to select any serial port.
        var port = await navigator.serial.requestPort();
        // be sure to set the baudRate to match the ESP32 code
        await port.open({ baudRate: 115200, bufferSize: 2048 });
    
        let decoder = new TextDecoderStream();
        inputDone = port.readable.pipeTo(decoder.writable);
        inputStream = decoder.readable;
    
        reader = inputStream.getReader();
        clicked = 1;
        readLoop();
    }
})

//READLOOP() - this is serial port, not sure if want this or wifi
async function readLoop() {
    counterVal = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // Allow the serial port to be closed later.
        console.log("closing connection")
        reader.releaseLock();
        break;
      }
      if (value) {
        console.log(value);
        animationClose();
      }
    }
};

let images = new Array();
images = [
    "../static/images/Group 9.svg",
    "../static/images/Group 8.svg",
    "../static/images/Group 7.svg",
    "../static/images/Group 6.svg",
    "../static/images/Group 5.svg",
    "../static/images/Group 4.svg",
    "../static/images/Group 3.svg",
    "../static/images/Group 3.svg",
    "../static/images/Group 3.svg",
    "../static/images/Group 4.svg",
    "../static/images/Group 5.svg",
    "../static/images/Group 6.svg",
    "../static/images/Group 7.svg",
    "../static/images/Group 8.svg",
    "../static/images/Group 9.svg"
];

let x = 0;
function animationClose(){
   console.log("animationClose")
    let timesRun = 0;
    let interval = setInterval(function(){
        timesRun += 1;
        if(timesRun == 15){
            clearInterval(interval)
        }
        $("#sensor").attr("src", images[x]);
        x++;
        if(images.length == x){
            x=0;
        }
    }, 90)
}

function plantClick(){
    $("#sensor").on("click", function () {
        animationClose();
    })
}

// function myParse(){
//     var obj = JSON.parse(currentVal);
// }

$(document).ready(function(){
    plantClick();
})