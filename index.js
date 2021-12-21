#!/Users/fshen/.asdf/installs/nodejs/15.0.1/bin/node

let array = [];

while (true) {
  // This makes the array bigger on each iteration
  array.push(new Array(10000000));

  const memory = process.memoryUsage();
  console.log((memory.heapUsed / 1024 / 1024 / 1024).toFixed(4), 'GB');
}