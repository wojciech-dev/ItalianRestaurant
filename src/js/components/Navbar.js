import Url from "./Url";

let nav = {
  render: async () => {
    let request = Url.parseURL();
    let view = `
      <a class="navbar__item ${
        request.resource == "tandoori" || request.resource == "" ? "active" : ""
      }" href="/#/tandoori">tandoori</a>
      <a class="navbar__item ${
        request.resource == "rasoi" ? "active" : ""
      }" href="/#/rasoi">rasoi</a>
      <a class="navbar__item ${
        request.resource == "samunder" ? "active" : ""
      }" href="/#/samunder">samunder</a>
      `;
    return await view;
  }
};

export default nav;
