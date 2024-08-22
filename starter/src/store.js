import { getStorageItem, setStorageItem } from "./utils.js";
let store = localStorage.getItem("store");

const setupStore = (products) => {
    store = products.map((product) => {
        const {
            id,
            fields: { featured, name, price, company, colors, image: img },
        } = product;
        const image = img[0].thumbnails.large.url;
        return { id, featured, name, price, company, colors, image };
    });
    setStorageItem("store", store);
};

const findProduct = () => {};
export { store, setupStore, findProduct };

// [
//     {
//         id: "recmg2a1ctaEJNZhu",
//         fields: {
//             company: "marcos",
//             colors: ["#00ff00", "#0000ff"],
//             featured: true,
//             price: 3995,
//             name: "utopia sofa",
//             image: [
//                 {
//                     id: "attqutUt355traBeS",
//                     width: 1280,
//                     height: 846,
//                     url: "https://course-api.com/images/store/product-9.jpeg",
//                     filename: "product-3.jpg",
//                     size: 196312,
//                     type: "image/jpeg",
//                     thumbnails: {
//                         small: {
//                             url: "https://course-api.com/images/store/product-9.jpeg",
//                             width: 54,
//                             height: 36,
//                         },
//                         large: {
//                             url: "https://course-api.com/images/store/product-9.jpeg",
//                             width: 775,
//                             height: 512,
//                         },
//                         full: {
//                             url: "https://course-api.com/images/store/product-9.jpeg",
//                             width: 3000,
//                             height: 3000,
//                         },
//                     },
//                 },
//             ],
//         },
//     },
// ];
