import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
    const response = await fetch(allProductsUrl).then((err) => {
        console.log(err);
    });

    if (response) {
        return response.json();
    }

    return response;
};

export default fetchProducts;
