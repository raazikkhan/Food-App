const About = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start m-10 w-4xl">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="m-5 text-lg ">
          Welcome to <b>Food App</b> , your go-to destination for delicious food
          at your fingertips. We believe that great meals bring people together,
          and we’re here to make that easier than ever. <br />
          Whether you’re craving a quick snack, a healthy meal, or your favorite
          comfort food, our app connects you with the best restaurants, cafés,
          and street food vendors around you — all in one place. <br />
          With fast ordering, real-time tracking, and secure payments, we make
          sure your food reaches you fresh, hot, and exactly how you want it.
        </p>
        <h1 className="font-bold text-xl">Why Choose Us?</h1>
        <ul className="m-4 text-lg">
          <li> • 🍽 Wide Variety – From local favorites to global cuisines.</li>
          <li> • ⏱ Quick Delivery – Because hunger can’t wait.</li>
          <li>
            {" "}
            • 💳 Easy & Secure Payments – Multiple payment options, hassle-free.
          </li>
          <li> • 📍 Personalized Experience – Recommendations just for you.</li>
        </ul>
        <h1 className="font-bold text-lg">Our Mission</h1>
        <p className="text-lg m-4">
          {" "}
          To make good food accessible to everyone, anytime, anywhere — while
          supporting local food businesses and delivering happiness with every
          order.
        </p>{" "}
        <p>
          {" "}
          <b>Food App</b> — Where taste meets convenience.
        </p>
      </div>
    </>
  );
};
export default About;
