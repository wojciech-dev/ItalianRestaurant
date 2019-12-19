import Api from "../components/Api";
import Url from "../components/Url";

let Dish = {
  render: async () => {
    let name = Url.parseURL().resource || "tandoori";

    let post = await Api.getAllPost(`${name}`);

    let html = "";

    for (let i in post) {
      html += `
      <article class="dish">
        <h6 class="dish_name">${post[i].title}</h6>
        <div class="dish_desc">${post[i].body}</div>
      </article>`;
    }

    return html;
  }
};

export default Dish;
