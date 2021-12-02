let spinner = '\r| \r/ \r- \r\\ \r| \r/ \r- \r\\ \r|';

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
    if (spinner.length - 1 === i) {
      process.stdout.write("\n");
    }
  }, 50 * i);
}