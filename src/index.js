const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];
const { products } = require("./data/products");

function getShoppingCart(ids, productsList) {
  var ShoppingCart = {
    products: [],
    promotion: "",
    totalPrice: "",
    discountValue: "",
    discount: "",
  };

  var PromotionArr = {
    "SINGLE LOOK": 0,
    "DOUBLE LOOK": 0,
    "TRIPLE LOOK": 0,
    "FULL LOOK": 0,
  };

  var PassCategory = [];

  var RawTotalPrice = 0;

  ShoppingCart.products = productObj(getNameCategory, ids);
  ShoppingCart.promotion = getPromotionType();
  productObj(getPrices, ids);
  ShoppingCart.totalPrice = PromotionArr[ShoppingCart.promotion].toFixed(2);
  ShoppingCart.discountValue = (
    RawTotalPrice.toFixed(2) - ShoppingCart.totalPrice
  ).toFixed(2);
  ShoppingCart.discount =
    ((ShoppingCart.discountValue * 100) / RawTotalPrice).toFixed(2) + "%";
  return ShoppingCart;

  function getPromotionType() {
    switch (PassCategory.length) {
      case 1:
        return "SINGLE LOOK";
      case 2:
        return "DOUBLE LOOK";
        break;
      case 3:
        return "TRIPLE LOOK";
        break;
      case 4:
        return "FULL LOOK";
        break;

      default:
        return "NONE";
        break;
    }
  }

  function productObj(fn, list) {
    return list.map((id) => {
      let product = productsList.find((product) => product.id === id);
      return fn(product);
    });
  }

  function getNameCategory(product) {
    if (!verifyCat(product.category)) {
      PassCategory.push(product.category);
    }
    RawTotalPrice += product.regularPrice;
    return { name: product.name, category: product.category };
  }

  function verifyCat(category) {
    return PassCategory.some((cat) => cat == category);
  }

  function getPrices(product) {
    var checkExistsLook = product.promotions.map((promArr) => {
      let checkInside = promArr.looks.some(
        (nameLook) => nameLook === ShoppingCart.promotion
      );

      if (checkInside) {
        return promArr.price;
      }
    });
    var filtered = checkExistsLook.filter(function (el) {
      return el != null;
    });

    if (filtered.length > 0) {
      PromotionArr[ShoppingCart.promotion] += filtered[0];
    } else {
      PromotionArr[ShoppingCart.promotion] += product.regularPrice;
    }
  }
}

// getShoppingCart([110, 130, 140, 230, 310, 330], products);
// getShoppingCart([130, 140, 230, 260], products);
// getShoppingCart([110, 120, 130, 140], products);
// getShoppingCart([110, 130, 140, 230, 310, 330], products);

module.exports = { getShoppingCart };
