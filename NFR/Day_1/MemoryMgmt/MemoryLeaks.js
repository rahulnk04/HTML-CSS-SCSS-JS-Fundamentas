var largeArray = [];
let isRunning = true;

function GrowHandler() {
  isRunning = true;
  GrowInSize();
}

function GrowInSize() {
  largeArray.push(new Array(10000).fill("*"));
  if (isRunning) {
    setTimeout(() => GrowInSize(), 1000);
  }
}

function StopHandler() {
  isRunning = false;
}
