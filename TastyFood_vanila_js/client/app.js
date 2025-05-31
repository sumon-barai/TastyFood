import endpoints from "./apiService/endpoints/index.js";
import { getFoods } from "./apiService/foods/foods.js";

const foodCards = document.querySelector("#foodCards");

let foods = [];
getFoods(endpoints.foods)
  .then((result) => {
    /*  result.forEach((element) => {
      // const shape = {};
      // shape.id = element.id;
      // shape.title = element.title;

      foods.push({
        id: element.id,
        title: element.title,
      });
    }); */

    let cardHtml = "";

    result.forEach((element) => {
      const card = `
          <div
              class="bg-white border border-gray-200 rounded-lg px-3 py-3 shadow-sm"
            >
              <!-- Image Wrapper -->
              <div class="rounded relative">
                <img
                  class="rounded w-full max-h-56 object-contain bg-gray-200"
                  src="./images/panta-bhat.png"
                  alt=""
                />
                <!-- Total Price Tag -->
                <div
                  class="w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-white/30 rounded backdrop-blur-xs"
                >
                  <p class="text-sm">Total Price: 00000</p>
                </div>
              </div>

              <!-- Title and Wishlist Btn -->
              <div class="flex justify-between items-center mt-2">
                <h3 class="text-xl font-medium">${element.title}</h3>
                <a href="#">
                  <i class="ri-heart-line text-2xl"></i>
                </a>
              </div>

              <!-- Food Description -->
              <p class="mt-1 mb-2.5 text-gray-600">
               ${element.des}
              </p>

              <!-- Price and Add to cart -->
              <div class="flex items-center justify-between mt-4">
                <h3 class="text-3xl font-medium text-chinese-yellow">
                  Tk. 150.00
                </h3>
                <button
                  class="py-2 px-3.5 bg-chinese-yellow rounded cursor-pointer"
                >
                  <i class="ri-shopping-cart-line mr-1 text-base"></i>
                  Add To Cart
                </button>
              </div>
            </div>
  
          `;
      cardHtml = cardHtml + card;
    });

    foodCards.innerHTML = cardHtml;
  })
  .catch((error) => {
    console.log(error);
  });
