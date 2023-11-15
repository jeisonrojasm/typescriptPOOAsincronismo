import axios from "axios";

import { Product } from '../app/models/product.model';

(async () => {
    async function getProducts() {
        const res = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
        return res.data;
    }

    const products = await getProducts()
    console.log(products);
})();

