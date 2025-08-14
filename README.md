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

console.log("All Item Info:", allItemsInfo);

{allItemsInfo.map((item) => (

<div
            className="flex flex-col justify-evenly w-[50rem]  gap-3 m-3 shadow-lg h-72"
            key={item.id}
          >
<div className="flex justify-end items-end py-4 px-4">
{item.imageId && (
<img
src={MENU_IMAGE_URL + item.imageId}
alt={item.name}
className="w-30 h-full object-cover rounded-md "
/>
)}
</div>
<div className="flex justify-start  py-2 px-2 mt-20">
<ul>
<li>{item.vegClassifier}</li>
<li className="font-bold text-lg">{item.name}</li>
<li className="w-[26rem] overflow-hidden">
{item.description}
</li>
<li className="">₹{item.price / 100}</li>
<li>{item.category}</li>
<li>{item.isBestSeller}</li>
</ul>
</div>
</div>
))}

console.log("restaurant data ", CarouselData);

const scroll = (direction) => {
if (direction === "left") {
scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
} else {
scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
}
};

return (
{/_<div className="relative w-full">
{/_ Title \*/}
<h2 className="text-2xl font-bold mb-4">What's on your mind?</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
       {CarouselData.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[120px] cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-24 h-24 object-cover rounded-full shadow-md"
            />
            <p className="mt-2 text-center font-medium">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronRight />
      </button>
    </div> */}

);
}
