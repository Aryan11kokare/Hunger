const sampleListing = [
  {
    category: "veg",
    title: "Paneer Masala",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4U7mFiXwceSa9ZvIQ4V7xlr5hv-ADQuA--WqEtatBt7B_ZPnjFnO7fZ-tGQjpDD5pI9U&usqp=CAU",
      filename: "listingimage",
    },
    description:
      " It's a creamy and satisfying vegetarian delight, often enjoyed with naan or rice.",
    price: 1200,
  },
  {
    category: "Non-veg",
    title: "Chicken Tikka Masala",
    image: {
      url: "https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4-730x913.jpg",
      filename: "listingimage",
    },
    description:
      " Bursting with flavors of ginger, garlic, cumin, and paprika, this dish is a favorite among lovers of Indian cuisine worldwide.",
    price: 2000,
  },
  {
    category: "Non-veg",
    title: "Biryani",
    image: {
      url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-750x750.jpg",
      filename: "listingimage",
    },
    description:
      "This beloved South Asian delicacy is known for its rich flavors and indulgent textures.",
    price: 1000,
  },
  {
    category: "veg",
    title: "Pizza",
    image: {
      url: "https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720-1200x545_c.jpg",
      filename: "listingimage",
    },
    description:
      "Pizza is a globally adored dish featuring a round, flattened base of dough topped with tomato sauce, cheese, and various toppings like pepperoni, mushrooms, or vegetables.",
    price: 599,
  },
  {
    category: "Non-veg",
    title: "Burger",
    image: {
      url: "https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
      filename: "listingimage",
    },
    description:
      " Burgers are beloved for their delicious simplicity and endless customization options.",
    price: 150,
  },
  {
    category: "Non-veg",
    title: "Chicken Crispy",
    image: {
      url: "https://recipes.timesofindia.com/thumb/75579926.cms?width=1200&height=900",
      filename: "listingimage",
    },
    description:
      "Chicken Crispy is a delectable dish featuring tender pieces of chicken marinated, coated with seasoned flour, and deep-fried until golden brown and crispy. ",
    price: 2999,
  },
  {
    category: "veg",
    title: "Idli Dosa",
    image: {
      url: "https://i2.wp.com/www.happyandharried.com/wp-content/uploads/2018/04/IMG_2115.jpg?w=736&ssl=1",
      filename: "listingimage",
    },
    description:
      "Idli and Dosa are popular South Indian delicacies. Idli is a soft and fluffy steamed rice cake, while Dosa is a thin and crispy fermented crepe made from rice and lentil batter. ",
    price: 599,
  },
  {
    category: "Non-veg",
    title: "Fish Fry",
    image: {
      url: "https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg",
      filename: "listingimage",
    },
    description:
      "Fish Fry is a mouthwatering dish featuring fresh fish fillets coated in a seasoned batter and deep-fried until crispy and golden brown.",
    price: 1500,
  },
  {
    category: "veg",
    title: "Ukadiche Modak",
    image: {
      url: "https://rakskitchen.net/wp-content/uploads/2022/08/modak-recipe.jpg",
      filename: "listingimage",
    },
    description:
      "Ukadiche Modak is a traditional Maharashtrian sweet dumpling made with rice flour dough filled with a mixture of jaggery, coconut, and cardamom. These steamed dumplings are shaped intricately by hand and are often offered as a sacred treat during festivals like Ganesh Chaturthi. ",
    price: 3000,
  },
  {
    category: "veg",
    title: "Mocha Dream Latte",
    image: {
      url: "https://www.asweetpeachef.com/wp-content/uploads/2019/03/How-to-Make-a-Mocha-Latte-at-Home_hero.jpg",
      filename: "listingimage",
    },
    description:
      "Indulge in a velvety blend of rich espresso and smooth chocolate, topped with a generous swirl of whipped cream and a sprinkle of cocoa powder. ",
    price: 1500,
  },
  {
    category: "veg",
    title: "Chocolate Hazelnut Cappuccino",
    image: {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizvM5FP9MhpiX4w2sYjsdnyVC10R7BpDh4stXq4a_4_Rn-P1bYsd-vb8RAAO50w_9tRpRuto469LHy-vcSdtIyDgGPx8eknM7nibgkzdQr133FertTjFazz13Th6oLC_jE7FOEbzRBNtE/s1600/chocolate+hazelnut+cappuccino+pudding+recipe+tina+vesic+food+writer_1.jpg",
      filename: "listingimage",
    },
    description:
      "Treat yourself to a luxurious blend of espresso, steamed milk, and creamy chocolate, infused with the irresistible nuttiness of hazelnut. ",
    price: 2999,
  },
  {
    category: "veg",
    title: "Iced Mocha Frappe",
    image: {
      url: "https://i2.wp.com/bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-picture-683x1024.jpg",
      filename: "listingimage",
    },
    description:
      "Cool off with a refreshing blend of chilled espresso, creamy chocolate, and velvety milk, all blended together with ice to create a luscious and invigorating Iced Mocha Frappe.",
    price: 1999,
  },
  {
    category: "veg",
    title: "Choco Mint Espresso Martini",
    image: {
      url: "https://hillstreetgrocer.com/application/files/2417/0060/9248/Choc_Mint_Martini.jpg",
      filename: "listingimage",
    },
    description:
      " Elevate your cocktail experience with a sophisticated blend of rich espresso, creamy chocolate liqueur, and refreshing mint syrup, shaken to perfection with ice.",
    price: 2500,
  },
  {
    category: "veg",
    title: "White Chocolate Caramel Macchiato",
    image: {
      url: "https://steemitimages.com/DQmYz5keZLGkh9ewtzpjXeMw98zGyuErd9FbEv1F8ahAJsx/Iced%20White%20Chocolate%20Caramel%20Macchiato2.jpg",
      filename: "listingimage",
    },
    description:
      "Indulge in the sweet and creamy flavors of white chocolate and caramel with this luxurious twist on the classic macchiato. ",
    price: 1500,
  },
  {
    category: "veg",
    title: "Mango Lassi Parfait",
    image: {
      url: "https://guac.com/_next/image?url=https%3A%2F%2Fstorage.guac.com%2F5304%2Fconversions%2Fc5hrknew-convertimage-web_gallery.jpg&w=640&q=75",
      filename: "listingimage",
    },
    description:
      " A refreshing dessert that combines the tropical flavors of mango with the creamy goodness of yogurt, Mango Lassi Parfait is a layered treat. ",
    price: 150,
  },
  {
    category: "veg",
    title: "Chocolate Banana Espresso Smoothie",
    image: {
      url: "https://www.orchidsandsweettea.com/wp-content/uploads/2022/03/Chocolate-Hemp-Smoothie-5-of-5.jpg",
      filename: "listingimage",
    },
    description:
      "Start your day off right with this energizing and nutritious smoothie, blending together ripe bananas, creamy chocolate, and a shot of espresso for a delightful pick-me-up. ",
    price: 2500,
  },
  {
    category: "Non-veg",
    title: "Butter Chicken Biryani",
    image: {
      url: "https://poonjiaji.com/cdn/shop/articles/Butter-Chicken-Biryani-1024x768.jpg?v=1694593703",
      filename: "listingimage",
    },
    description:
      "This fusion dish combines the rich flavors of butter chicken with the fragrant spices of biryani rice. Tender chicken pieces marinated in a creamy tomato-based sauce are layered between aromatic basmati rice infused with saffron and whole spices. ",
    price: 1999,
  },
  {
    category: "veg",
    title: "Paneer Tikka Pizza",
    image: {
      url: "https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2020/05/Screenshot_20200509-234417.png?resize=800%2C840&ssl=1",
      filename: "listingimage",
    },
    description:
      " A creative amalgamation of Indian and Italian cuisines, Paneer Tikka Pizza features a thin crust topped with smoky paneer tikka pieces, colorful bell peppers, onions, and melted mozzarella cheese.",
    price: 550,
  },
  {
    category: "veg",
    title: "Masala Dosa Delight",
    image: {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ilql5v4oh9imtejzrrel",
      filename: "listingimage",
    },
    description:
      "A South Indian specialty, Masala Dosa is a thin, crispy rice and lentil crepe filled with a spiced potato mixture. ",
    price: 3000,
  },
  {
    category: "veg",
    title: "Chaatwala Nachos",
    image: {
      url: "https://moonrice.net/wp-content/uploads/2023/01/Nachos-Chaat.jpg",
      filename: "listingimage",
    },
    description:
      "Inspired by the vibrant street food culture of India, Chaatwala Nachos offer a delightful twist on the classic Mexican snack.",
    price: 300,
  },
  {
    category: "veg",
    title: "Masala Pav Bhaji Fondue",
    image: {
      url: "https://cdn.tarladalal.com/members/9306/big/big_pav_bhaji_fondue-11341.jpg?size=696X905",
      filename: "listingimage",
    },
    description:
      "A fusion twist on the classic street food favorite, this dish combines the rich flavors of masala pav bhaji with the interactive fun of fondue. ",
    price: 500,
  },
  {
    category: "Non-veg",
    title: "Tandoori Chicken Tikka Tacos",
    image: {
      url: "https://imagevars.gulfnews.com/2023/05/01/Tandoori-chicken_187d79b132b_base.jpg",
      filename: "listingimage",
    },
    description:
      " Experience the best of both worlds with these vibrant tacos that blend the traditional flavors of tandoori chicken tikka with a modern twist. ",
    price: 1200,
  },
  {
    category: "Non-veg",
    title: "Butter Chicken Mac 'n' Cheese",
    image: {
      url: "https://cdn-rdb.arla.com/Files/puckarabia-en/3559894366/0d2d7c82-6cf6-44e6-a300-e25fb39ba848.jpg?w=1230&h=670&mode=crop&ak=aee88f72&hm=5f828870",
      filename: "listingimage",
    },
    description:
      "A decadent fusion of two beloved comfort foods, this dish combines the creamy richness of butter chicken with the comforting familiarity of mac 'n' cheese.",
    price: 2500,
  },
  {
    category: "veg",
    title: "Pani Puri Bruschetta",
    image: {
      url: "https://i2.wp.com/wp-backend.thefearlesscooking.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-10-at-4.45.10-PM.jpeg?resize=1536%2C1024&ssl=1",
      filename: "listingimage",
    },
    description:
      " A creative twist on the popular Indian street snack, pani puri, this dish combines crispy bruschetta with the tangy and spicy flavors of pani puri water. Crunchy bread slices are topped with a medley of diced vegetables, sprouts, and tamarind chutney",
    price: 150,
  },
  {
    category: "veg",
    title: "Gulab Jamun Cheesecake",
    image: {
      url: "https://ashbaber.com/wp-content/uploads/2022/08/gulab-jamun-cheesecake-full-small.jpg",
      filename: "listingimage",
    },
    description:
      "ndulge in the ultimate fusion dessert with this delightful marriage of two beloved sweets. A velvety cheesecake sits atop a base of crushed gulab jamun, soaked in fragrant sugar syrup. ",
    price: 1500,
  },
  {
    category: "veg",
    title: "Rajma Risotto",
    image: {
      url: "https://www.cookrepublic.com/wp-content/uploads/2020/06/vegan_rajma_red_kidney_bean_curry01.jpg",
      filename: "listingimage",
    },
    description:
      "This fusion dish brings together the creamy comfort of Italian risotto with the bold flavors of Indian rajma. ",
    price: 1000,
  },
];

module.exports = { data: sampleListing };
