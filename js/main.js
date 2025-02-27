import submit from"./components/type-order.js";
import discount from"./components/discount.js";
const article__products = document.querySelector(".article__products");
const products = [
    {
        image: "storage/img/Ice-Cream-Product-1.png",
        name: "Mix Ice cream",
        "type-order": [
            "On Table",
            "Delivery"
        ],
        price: [
            199, 0
        ]
    },
    {
        image: "storage/img/Ice-Cream-Product-2.png",
        name: "Chocolate Cup",
        "type-order": "On Table",
        price: [
            129, 2
        ]
    },
    {
        image: "storage/img/Ice-Cream-Product-3.png",
        name: "Barry Ice cream",
        "type-order": [
            "On Table",
            "Delivery"
        ],
        price: [
            109, 0
        ]
    },
    {
        image: "storage/img/Ice-Cream-Product-4.png",
        name: "Strawberry Ice cream",
        "type-order": "Delivery",
        price: [
            149
        ]
    }
]

let plantilla = ""

for (let i = 0; i < products.length; i++){
    plantilla += `
        <form action="?" method="GET" class="form__container-product">
            <img src="${products[i].image}" alt="">
            <div class="div__product">
                <h3>${products[i].name}</h3>
                <span>Order Type</span>
                <div class="div__type-order">
                    ${submit(products[i]["type-order"])}
                </div>
            <div class="div__product-amount">
                <label>${discount(products[i][price])} </label>
                <div class="quantity-products">
                    <button class="rest">+</button>
                    <input type="number" name="amount" value="1">
                    <button class="sum">-</button>
                </div>
            </div>
            </div>
        </form>
    `;
}

article__products.innerHTML = plantilla;