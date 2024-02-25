export const getCurrencyPrice = (price, currency) => {
  return Number(price).toLocaleString('es-AR', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  });
};
