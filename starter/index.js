// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

async function init() {
    let products = await fetchProducts();
    if (products) {
        setupStore(products);
    }

    const featured = store.filter((product) => {
        if (product.featured === true) {
            return product;
        }
    });
    
    display(featured, getElement(".featured-center"));
}

window.addEventListener("DOMContentLoaded", init);
