("use strict");
import "@babel/polyfill";

import shuruvat from "./views/Dish";
import news from "./views/News";
import Error404 from "./views/404";

import Url from "./components/Url";
import Navbar from "./components/Navbar";

const menus_content = document.querySelector(".menus_content");
const menus_desc = document.querySelector(".menus_desc");
const news_content = document.querySelector(".news_content");

const routes = {
  "/": shuruvat,
  "/shuruvat": shuruvat,
  "/rasoi": shuruvat,
  "/samunder": shuruvat,
  "/tandoori": shuruvat
};

const router = async () => {
  let request = Url.parseURL();
  let parsedURL = request.resource ? "/" + request.resource : "/";
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  menus_desc.innerHTML = await Navbar.render();
  menus_content.innerHTML = await page.render();
  news_content.innerHTML = await news.render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
