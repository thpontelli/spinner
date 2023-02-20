const sentence = "|/-\\";

setInterval(() => {
  let delayInMs = 0
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write('\r' + char + '   ');
    }, delayInMs);
    delayInMs += 200;  
  }
},800);
