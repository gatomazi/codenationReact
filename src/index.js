const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];
function getShoppingCart(ids, productsList) {
  const isProductInCart = (product) => ids.includes(product.id);
  const productsInCart = productsList.filter(isProductInCart);

  const categoriesInCart = categories.filter((category) => {
    const hasMatchedCategory = (product) => product.category === category;
    return productsInCart.some(hasMatchedCategory);
  });

  const promotionIndex = categoriesInCart.length - 1;
  const validPromotion = promotions[promotionIndex];

  const productsRegularPrices = productsInCart.map(
    (product) => product.regularPrice
  );
  const productsPromotionPrices = productsInCart.map(
    ({ promotions, regularPrice }) => {
      const productPromotions = promotions || [];
      const matchedPromotion =
        productPromotions.find(({ looks }) => looks.includes(validPromotion)) ||
        {};
      const promotionPrice = matchedPromotion.price || regularPrice;
      return promotionPrice;
    }
  );

  const sumPrices = (total, price) => total + price;
  const totalPrice = productsPromotionPrices.reduce(sumPrices, 0);
  const totalRegularPrice = productsRegularPrices.reduce(sumPrices, 0);
  const totalDiscountValue = totalRegularPrice - totalPrice;
  const totalDiscountPercent = 100 - (100 * totalPrice) / totalRegularPrice;
  const formatPrice = (price) => price.toFixed(2);

  const productsNameAndCategory = productsInCart.map(({ name, category }) => ({
    name,
    category,
  }));
  return {
    products: productsNameAndCategory,
    promotion: validPromotion,
    totalPrice: formatPrice(totalPrice),
    discountValue: formatPrice(totalDiscountValue),
    discount: `${formatPrice(totalDiscountPercent)}%`,
  };
}

// getShoppingCart([110, 130, 140, 230, 310, 330], products);
// getShoppingCart([130, 140, 230, 260], products);
// getShoppingCart([110, 120, 130, 140], products);
// getShoppingCart([110, 130, 140, 230, 310, 330], products);

module.exports = { getShoppingCart };
