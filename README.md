# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

menuList.forEach((item) => {
const itemCards = item.card?.card?.itemCards;
if (Array.isArray(itemCards)) {
itemCards.forEach((itemCard) => {
const info = itemCard.card?.info;
if (info) {
allItemsInfo.push({
name: info.name,
description: info.description,
price: info.price,
id: info.id,
imageId: info.imageId,
category: info.category,
isBestSeller: info.isBestSeller,
vegClassifier: info.itemAttribute?.vegClassifier,
});
}
});
}
});
