const resList = [
  {
    id: "8625f519-a65e-4d51-ac3c-4cdd77c8ec6b",
    food_image:
      "https://www.willflyforfood.net/wp-content/uploads/2021/06/lebanese-food-manakish.jpg.webp",
    restaurant_name: "Blue Orchid",
    cuisine: "Lebanese",
    avg_rating: 3.9,
    cost: 585,
    delivery_time_min: 49,
  },
  {
    id: "9f226d61-607f-44f7-8072-57b97c6e2a47",
    food_image:
      "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2019/02/tai-red-seabream-fish-iStock-1215175706-770x513.jpg",
    restaurant_name: "Green Mango",
    cuisine: "Japanese",
    avg_rating: 3.1,
    cost: 507,
    delivery_time_min: 47,
  },
  {
    id: "870ea13a-9b8d-434b-b8b6-93001239f3d3",
    food_image:
      "https://content.jdmagicbox.com/v2/comp/mumbai/08/022poce1408/catalogue/chinese-point-restaurant-bhayandar-west-mumbai-chinese-restaurants-kahy4kadql.jpg",
    restaurant_name: "Tender Bites",
    cuisine: "Chinese",
    avg_rating: 3.1,
    cost: 757,
    delivery_time_min: 54,
  },
  {
    id: "aa3cd126-4bf6-4438-87b4-925e7f4c3639",
    food_image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg",
    restaurant_name: "Spice Route",
    cuisine: "Japanese",
    avg_rating: 4.9,
    cost: 266,
    delivery_time_min: 26,
  },
  {
    id: "e9afe6a7-bf88-414b-a00f-22808c49fed1",
    food_image:
      "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2019/02/hanami-dango_shironagasukujira_GettyImages-1459478504-770x513.jpg",
    restaurant_name: "Cozy Corner",
    cuisine: "Japanese",
    avg_rating: 4.7,
    cost: 505,
    delivery_time_min: 45,
  },
  {
    id: "8bc659be-dbed-4daf-b653-c189cd2d2389",
    food_image:
      "https://images.ctfassets.net/uexfe9h31g3m/592dTXNyxyycwkgGGeQEeG/fce65bbde6fce8c4a4f2b541417fdf58/Easy_gyros_bowl_1024x768.jpg?w=768&h=512&fm=webp&fit=thumb&q=90",
    restaurant_name: "Ocean's Catch",
    cuisine: "Mediterranean",
    avg_rating: 3.0,
    cost: 819,
    delivery_time_min: 59,
  },
  {
    id: "6f19a47c-334d-4b45-8e51-9b73da0316fd",
    food_image:
      "https://www.allrecipes.com/thmb/Fv7t754h3qbGG7PpfESGAGG0Xm4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8767492_Mediterranean-Marinated-Cheese_Dotdash-Meredith-Food-Studios_4x3-2b588657b3a9447d95fc808ebbd14767.jpg",
    restaurant_name: "Sunset Grill",
    cuisine: "Mediterranean",
    avg_rating: 4.8,
    cost: 457,
    delivery_time_min: 60,
  },
  {
    id: "7b97df1c-3f46-44c5-90db-7e3e151855c8",
    food_image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/general-tso-chicken.jpg?quality=82&strip=1",
    restaurant_name: "Urban Tandoor",
    cuisine: "Chinese",
    avg_rating: 3.8,
    cost: 751,
    delivery_time_min: 56,
  },
  {
    id: "062efaf9-6fb5-432a-a728-95710f1db318",
    food_image:
      "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/french-food-1536x1024.jpg",
    restaurant_name: "Sweet Treats",
    cuisine: "French",
    avg_rating: 3.7,
    cost: 527,
    delivery_time_min: 22,
  },
  {
    id: "45a0e8e7-d30a-4b85-9b6c-df20c14fe4a0",
    food_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdD9nlF_IH7iiy2zry56aUZs2qiLpSMwxdA&s",
    restaurant_name: "Golden Dragon",
    cuisine: "Lebanese",
    avg_rating: 2.6,
    cost: 756,
    delivery_time_min: 33,
  },
  {
    id: "6dd26941-0241-4561-891d-7c6d4651b4a7",
    food_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcf72l2shLcwBVEnFnpmXyDx0sBZkqkStdw&s",
    restaurant_name: "Urban Spice",
    cuisine: "Mediterranean",
    avg_rating: 2.2,
    cost: 923,
    delivery_time_min: 26,
  },
  {
    id: "6430471a-f275-47fe-bb2d-763a40015556",
    food_image:
      "https://www.contiki.com/six-two/images/width=1180,height=710,crop=1/2024/03/IMG-20240318-WA0007-e1710844435378.jpg",
    restaurant_name: "Crisp & Crunch",
    cuisine: "Indian",
    avg_rating: 4.8,
    cost: 689,
    delivery_time_min: 47,
  },
  {
    id: "112f0bc4-278a-44eb-8e6c-e6818c2593b2",
    food_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri0MK8FtvDpM7tniq-teBHrk8HhS3qA3QHQ&s",
    restaurant_name: "Bella Italia",
    cuisine: "Pakistani",
    avg_rating: 4.6,
    cost: 504,
    delivery_time_min: 59,
  },
  {
    id: "4ebb73ef-9658-49b8-a411-4aaed0f9b50b",
    food_image:
      "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-1_-Pad-Thai-1024x538.png",
    restaurant_name: "Cafe Mocha",
    cuisine: "Thai",
    avg_rating: 3.4,
    cost: 404,
    delivery_time_min: 21,
  },
  {
    id: "793f96ef-2bdd-49df-aaa3-55b7abd6316e",
    food_image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe-480x270.jpg",
    restaurant_name: "La Fiesta",
    cuisine: "biryani",
    avg_rating: 4.7,
    cost: 581,
    delivery_time_min: 32,
  },
  {
    id: "793f96ef-2bdd-49df-aaa3-55b7abd6313e",
    food_image:
      "https://www.seriouseats.com/thmb/WtcBGMWbdUcAIVe8zg4VCm2aqc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg",
    restaurant_name: "La Fiesta",
    cuisine: "Korean",
    avg_rating: 4.1,
    cost: 520,
    delivery_time_min: 32,
  },
];

export default resList;
