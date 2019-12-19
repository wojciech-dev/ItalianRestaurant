import Api from "../components/Api";

let News = {
  render: async () => {
    let post = await Api.getAllPost("news");

    let html = "";

    for (let i in post) {
      html += `
      <article class="news">
      <div class="news_photo"><img class="news_img" src="${post[i].url}" alt=""></div>
        <div class="news_desc">
          <h6 class="news_name">${post[i].title}</h6>
          ${post[i].body}
        </div>
      </article>`;
    }
    return html;
  }
};

export default News;
