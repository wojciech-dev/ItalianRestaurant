module.exports = {
  render: async () => {
    let view = `
            <h1>Error 404</h1>
            <div class='back'>
              <a class="back_button" href="/">back to home</a>
            </div>
       `;
    return await view;
  }
};
