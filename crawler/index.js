const readlineSync = require("readline-sync");
const axios = require("axios");
const cheerio = require("cheerio");

let run = true;

async function performScraping(url, item, next_page = "", page = 1) {
  let hasil = {}
  const axiosResponse = await axios
    .get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      },
    })
    .then((response) => {
      let tree = cheerio.load(response.data);
      for (let i in item) {
        let title = tree(item[i])
          .map((i, node) => tree(node).text().trim())
          .toArray();
        hasil[i] = title
        }
      });
  console.log(hasil);

  run = false;
}

const url = readlineSync.question("Enter the URL to crawl: ");
let item = {};
while (run) {
  const itemName = readlineSync.question("Enter the item name to search for: ");
  const path = readlineSync.question(
    "Enter the CSS Selector Path to extract the data: "
  );
  item[itemName] = path;
  const stop = readlineSync.question(
    "Continue? press 1 to continue and 0 to stop :"
  );
  if (parseInt(stop) === 0) {
    break;
  }
}

console.log("Starting Crawl");
performScraping(url, item);
