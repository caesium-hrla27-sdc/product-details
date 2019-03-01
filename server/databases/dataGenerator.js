const fs = require("fs");
const faker = require("faker");

function makeData(i) {
  var newProduct = {};
  newProduct.id = i;
  newProduct.name = faker.commerce.productName();
  newProduct.breadcrumbs = [];

  var breadcrumbCount = Math.floor(Math.random() * 2) + 2;

  for (let i = 0; i < breadcrumbCount; i++) {
    let crumb = faker.lorem.word();
    crumb = crumb[0].toUpperCase() + crumb.slice(1);
    newProduct.breadcrumbs.push(crumb);
  }

  newProduct.description = faker.lorem
    .lines(1)
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")
    .slice(0, -1);

  newProduct.size = faker.lorem.word();
  newProduct.item_number = Math.floor(Math.random() * 9000 + 9999);
  newProduct.price = faker.commerce.price();
  newProduct.details = faker.lorem.paragraphs();
  newProduct.how_to_use = faker.lorem.paragraphs();
  newProduct.ingredients = faker.lorem.paragraphs();
  newProduct.about_the_brand = faker.lorem.paragraphs();
  newProduct.shipping_returns = faker.lorem.paragraphs();
  newProduct.exclusive = faker.random.boolean();
  newProduct.average_rating = Math.random() * 5;
  newProduct.review_count = Math.floor(Math.random() * 50);
  newProduct.loves_count = Math.floor(Math.random() * 2500);
  newProduct.media = [];

  var imageCount = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < imageCount; i++) {
    let mediaObj = [];
    // mediaObj.type = 'image';
    // mediaObj.url = `https://picsum.photos/1920?image=${imageCounter}`;
    mediaObj.url = Math.floor(Math.random() * 1000);
    imageCounter++;
    newProduct.media.push(mediaObj);
  }

  return JSON.stringify(newProduct);
}

function writeTenMillionTimes(writer, data, encoding, callback) {
  let i = 10000000;
  write();
  function write() {
    if (i % 100000 == 0) {
      console.log("progress at i:", i);
    }
    let ok = true;
    do {
      i--;
      if (i === 0) {
        writer.write("" + makeData(i), encoding, callback);
      } else {
        ok = writer.write(makeData(i) + ",\n", encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  }
}

var writerWS = fs.createWriteStream("dummy_test_big.json");

writerWS.write("[", "utf-8"); //wrap in begginging bracket

writeTenMillionTimes(writerWS, null, "utf-8", () => {
  console.log("done");
  writerWS.write("]", "utf-8");
});
