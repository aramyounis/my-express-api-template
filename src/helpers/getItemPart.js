const fetch = require("isomorphic-fetch");
const cheerio = require("cheerio");
const loadItemsPage = async function (partURL) {
  const response = await fetch(partURL);

  const text = await response.text();

  const $ = cheerio.load(text);

  var alls = $('div[class="block xs-hide md-block specs"]');
  var infoName = [];
  var infoValues = [];
  var nameAndValue = {};
  $(alls)
    .find("h3")
    .each((i, e) => {
      infoName.push($(e).text().trim());
    });
  $(alls)
    .find(`div[class="group__content"]`)
    .each((i, e) => {
      infoValues.push($(e).text().trim());
    });

  infoName.map((e, i) => {
    nameAndValue[e] = infoValues[i];
  });
  return nameAndValue;
};

module.exports = loadItemsPage;
