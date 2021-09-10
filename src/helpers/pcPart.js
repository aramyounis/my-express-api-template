const playwright = require("playwright");
const cheerio = require("cheerio");
const fetch = require("isomorphic-fetch");
const fs = require("fs");

var nameAndUrlItems = {
  cpu: {},
  "cpu-cooler": {},
  motherboard: {},
  memory: {},
  "internal-hard-drive": {},
  "video-card": {},
  "power-supply": {},
  case: {},
};

async function loadWebsite() {
  const browserType = ["chromium", "firefox", "webkit"];
  const browser = await playwright[browserType[1]].launch({
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  var partsName = [
    "cpu",
    "cpu-cooler",
    "motherboard",
    "memory",
    "internal-hard-drive",
    "video-card",
    "power-supply",
    "case",
  ];

  console.time("Execution Time");
  for (partName of partsName) {
    await page.goto(`https://pcpartpicker.com/products/${partName}/`);
    await page.waitForSelector(".tr__product");
    await page.waitForSelector("#module-pagination");
    // await wait(500);
    const htmlPages = await page.$eval(
      "#module-pagination",
      (e, sutf) => e.outerHTML
    );

    var pagesNum = await getPageNumbers(htmlPages);

    await loopAllPages(page, pagesNum, partName);
  }

  console.log(nameAndUrlItems);
  setNameAndUrlToJson(nameAndUrlItems);
  console.timeEnd("Execution Time");
  browser.close();
}

function getPageNumbers(paginationHtml) {
  const $ = cheerio.load(paginationHtml);

  var arraylinks = [];
  links = $("a"); //jquery get all hyperlinks
  $(links).each(function (i, link) {
    arraylinks.push($(link).text());
  });

  var result = [];
  for (var i = 1; i <= arraylinks[arraylinks.length - 1]; i++) {
    result.push(i);
  }

  return result;
}

async function loopAllPages(page, pagesNum, partName) {
  for (pageNum of pagesNum) {
    await page.goto(
      `https://pcpartpicker.com/products/${partName}/#page=${pageNum}`
    );

    await page.waitForSelector(".tr__product");
    await page.waitForSelector(".td__nameWrapper");
    await wait(400);
    const html = await page.$eval(
      "#paginated_table",
      (e, suffix) => e.outerHTML
    );
    setNameAndUrlItems(html, partName);
    console.log(nameAndUrlItems[partName]);
  }
}

async function setNameAndUrlItems(html, partName) {
  const $ = cheerio.load(html);
  links = $("a"); //jquery get all hyperlinks
  $(links).each(function (i, link) {
    var texts = $(link).text().split("  ");
    var itemName = texts[texts.length - 10];
    var urlItem = $(link).attr("href");
    nameAndUrlItems[partName][itemName] = `https://pcpartpicker.com${urlItem}`;
  });
}

async function setNameAndUrlToJson(data) {
  fs.writeFile("file.json", JSON.stringify(data), (error) => {
    if (error) throw error;
  });
}

loadWebsite();

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// loadItemsPage();
