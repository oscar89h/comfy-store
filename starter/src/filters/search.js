import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupSearch = (store) => {
    const inputSearch = document.querySelector(".search-input");

    inputSearch.addEventListener("keyup", function (e) {
        const searchInputValue = e.target.value;

        if (searchInputValue) {
            const newStore = store.filter((item) => {
                if (item.name.startsWith(searchInputValue.toLowerCase())) {
                    return item;
                }
            });

            display(newStore, document.querySelector(".products-container"));

            if (newStore.length < 1) {
                document.querySelector(
                    ".products-container"
                ).innerHTML = `<h3 class="filter-error">No se encontro ningun resultado</h3>`;
            }
        } else {
            display(store, document.querySelector(".products-container"));
        }
    });
};

export default setupSearch;
