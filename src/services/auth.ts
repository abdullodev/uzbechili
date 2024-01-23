export const isAuth = () => !!localStorage.getItem("token");
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
export const cartLength = cart.length;
