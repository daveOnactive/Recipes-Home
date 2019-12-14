import React from 'react';
import Landing from './landing';
import RecipeList from './recipeList';
import '../../styles/home.scss';


const Home = () => {

  return(
    <div className="container">
      <div className="landing-page">
        <Landing />
        <div className="landing-page-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sunt deserunt quod repellat provident dolore aliquid magni! Accusantium, voluptates itaque! Expedita unde enim magnam rem!</p>
        </div>
      </div>
      <RecipeList items = { api } />
    </div>
  );
}

const api = [
  {
    "id": 1,
    "title": "Egusi Soup (Fried Method)",
    "description": "Particularly, in Nigerian culture, egusi is a popular with pounded yam. These seeds are rich in fat and protein, and add these essential nutrients into West African Cuisine. Nigerian Egusi Soup is a soup thickened with ground melon seeds and contains leafy and other vegetables",
    "ingeligent": [
      "4 cups (500g) Egusi (Melon) seeds",
      "3 cooking spoons red palm oil",
      "Beef: best cut and Shaki (cow tripe)",
      "Fish: dry fish and stockfish",
      "2 tablespoons ground crayfish",
      "Pepper and Salt (to taste)",
      "Vegetable: Nigerian pumpkin leaves, spinach or bitter leaf",
      "3 small stock cubes",
      "1 small ogiri okpei (optional)"
    ],
    "Before you cook": [
      "Before preparing the soup, soak the dry fish and stock fish till soft. If you are using the very tough stockfish, boil it for 20 minutes and leave in the pot with the hot water to soak for about an hour. If using the softer stockfish, you can just soak them in cool water till you can break them apart with your hands.",
      "When the fish and stockfish are soft, de-bone and break them into sizeable chunks.",
      "Much closer to your cooking time, grind the egusi with a dry mill. Grind the crayfish and the dry pepper separately and set aside.",
      "Rinse the vegetables to be used and cut into tiny pieces.",
      "Cook the beef and fish with the stock cubes till they are well done. You should start cooking the toughest meat and fish first and add the others as they get done. If using a normal pot, I will start with stockfish and shaki, add beef after about 1 hour and cook till done. I can add the dry fish when all the other meat and fish are cooked because it is already cooked, you just need to cook it long enough till it is soft and integrated with the rest of the ingredients. With a pressure pot, I do it differently but that is a process for another post.",
      "Set all these aside."
    ],
    "Cooking Directions": [
      "Pour the red palm oil into a dry pot and set on the stove to heat. As soon as the oil melts, add the ground egusi and start frying. If the oil is not congealed, add the egusi as soon as the oil is translucent. Mix the ground egusi with oil till every grain of egusi turns yellow.",
      "Start stirring the egusi on low to medium heat. Keep stir-frying for about 10 minutes.",
      "Add the meat/fish stock (water from cooking the fish and meat) little by little while still stirring the egusi. So you add a bit of the stock, stir-fry for some time, add another, stir-fry and so on. When the stock is exhausted and you feel that the soup is still too thick, you can start adding hot water in the same way till you get the consistency you want. If your choice of vegetable is bitter leaf, add it at this time.",
      "Cover the pot and cook for 20 minutes, stirring at intervals. Also, top up the water when necessary. If you don't stir it, it will burn. It takes 30 minutes to cook egusi properly else the soup will not taste nice to someone with authentic Nigerian taste buds. Also, egusi that is not cooked long enough may cause upset stomach. The egusi is done when you notice that the oil has separated from the mix.",
      "Once you are happy that it is done, add the ground crayfish and pepper. Stir and add the Nigerian pumpkin leaves or spinach (alternative).",
      "Stir very well and add the cooked stockfish, shaki and meat.",
      "Add salt if necessary. If it is too thick, add some water to bring it to a consistency you like.",
      "Cover and leave to simmer and it is done!"
    ],
    "tools": [
      "Spice grinder for grinding egusi (melon) seeds"
    ],
    "imageUrl": "https://www.lowcarbafrica.com/wp-content/uploads/2018/06/Egusi-soup-2.jpg"
  },
  {
    "id": 2,
    "title": "Jollof Rice",
    "description": "Jollof rice is a spiced dish, simmered in reduced tomatoes, onions, peppers, and different seasonings depending on where it's made. It's an iconic dish, with massive regional significance across West Africa and a staple in celebratory social gatherings, including at Lagos parties in Nigeria.",
    "ingeligent": [
      "2 cups (approx. 500 grams)Precooked long grain  rice",
      "5 Tablespoonful tomato paste(very important)",
      "4 whole tomatoes",
      "1 red bell pepper (tatashe)",
      "2 scotch bonnets peppers/atarodo",
      "100ml vegetable oil",
      "About 600ml Meat or Chicken stock",
      "A small onion (sliced)",
      "1 tablespoonful ground crayfish(optional)",
      "½ teaspoon each of Thyme and curry",
      "2 small Bay leaves (optional)",
      "1 teaspoon salt to taste",
      "1 stock cube",
      "Water, as needed(details in recipe below)"
    ],
    "Before you cook": [
      "Parboil(precook) the Rice and set aside (Parboiling the rice, helps to start the cooking process and gets rid of the excess starch in the rice, that usually makes the rice grains to clump together)",
      "Cook and fry/grill your meat ( beef/chicken/turkey ) and set aside the broth or stock"
    ],
    "Cooking Directions": [
  
    ],
    "tools": [

    ],
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXWq6S2gQ5gmj3nvHMPZNGKXCdUVU3NJcfmclt5F84xqQrtsmww&s"
  }
];

export default Home;

