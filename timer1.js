const args = process.argv.slice(2);
for (let arg of args) {
  let time = Number(arg);
  if (!isNaN(time) && time > 0) {
    timer(time);
  }
}

function timer(time) {
  time *= 1000;
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time);
}
