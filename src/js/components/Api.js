module.exports = {
  getAllPost: async dish => {
    try {
      const response = await fetch(`products/${dish}.json`);
      return await response.json();
    } catch (error) {
      console.log("Error", error);
    }
  }
};
