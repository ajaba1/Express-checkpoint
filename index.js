import express from "express";
import fs from "fs";
const app = express();
const port = 3000;

// time checking
app.use((req, res, next) => {
  const timeOfTheDay = new Date().getHours();
  // get the time of the day
  const dayOfTheWeek = new Date().getDay();

  // if statement to check for time and day of the week
  if (
    timeOfTheDay < 9 ||
    timeOfTheDay > 17 ||
    dayOfTheWeek === 0 ||
    dayOfTheWeek === 6
  ) {
    res.send("our office is not open now");
  } else {
    next();
  }
});

app.use(express.static("public"));
app.get("/", (req, res) => {
  const homepageContent = fs.readFileSync("./public/homepage.html", "utf-8");
  res.send(homepageContent);
});

app.get("/services", (req, res) => {
  const ourServiceContent = fs.readFileSync(
    "./public/our-service.html",
    "utf-8"
  );
  res.send(ourServiceContent);
});

app.get("/contact", (req, res) => {
  const contactpageContent = fs.readFileSync(
    "./public/contact-us.html",
    "utf-8"
  );
  res.send(contactpageContent);
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
