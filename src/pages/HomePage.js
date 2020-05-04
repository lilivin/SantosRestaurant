import React from 'react';
import '../styles/menu.css';

const starters =[
    {
      "name": "Nachos Muchachos",
      "praise": "21,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Mexican Taco",
      "praise": "29,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Avocado Tartare",
      "praise": "39,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Octopus Santa Fe Style",
      "praise": "31,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Beef Carpaccio",
      "praise": "42,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Śniadanie fit",
      "praise": "43,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Crispy Calamari",
      "praise": "52,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    }
  ]

const mainDishes = [
    {
      "name": "Szakszuka",
      "praise": "41,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Zielona Szakszuka",
      "praise": "36,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Minestrone Soup",
      "praise": "39,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Chicken Lemon Soup",
      "praise": "21,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "House Salad",
      "praise": "19,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Classic Greek Salad",
      "praise": "16,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Santa Fe Taco Salad",
      "praise": "31,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Teriyaki Pork Steak",
      "praise": "34,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Pork Souvlaki",
      "praise": "38,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Chicken Bryan",
      "praise": "21,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Chicken Supreme",
      "praise": "15,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "New York Beef Fillet",
      "praise": "51,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Dorada",
      "praise": "43,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "SouthWestern Salmon",
      "praise": "28,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Veggie Fajita",
      "praise": "29,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    }
  ]

const desserts =[
    {
      "name": "Cinnamon Apple Crisp",
      "praise": "21,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Chocolate Brownie",
      "praise": "29,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "New York Style",
      "praise": "39,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Kahlua",
      "praise": "31,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Mascarpone",
      "praise": "42,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Manfred",
      "praise": "43,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    },
    {
      "name": "Flat White",
      "praise": "12,00zł",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in gravida purus. In suscipit finibus molestie. Vivamus ligula lorem."
    }
  ]

const startersMenu = starters.map(starter => (
    <div className="dish">
      <div className="details">
        <p className="details__name">{starter.name}</p>
        <p className="details__price">{starter.praise}</p>
      </div>
      <p className="description">{starter.description}</p>
    </div>
  ))

const mainDishesMenu = mainDishes.map(mainDish => (
    <div className="dish">
      <div className="details">
        <p className="details__name">{mainDish.name}</p>
        <p className="details__price">{mainDish.praise}</p>
      </div>
      <p className="description">{mainDish.description}</p>
    </div>
  ))

const dessertsMenu = desserts.map(dessert => (
    <div className="dish">
      <div className="details">
        <p className="details__name">{dessert.name}</p>
        <p className="details__price">{dessert.praise}</p>
      </div>
      <p className="description">{dessert.description}</p>
    </div>
  ))

const HomePage = () => {
    return (
        <div class="main">
          <h1 className="headerMenu">Menu</h1>
          <h1 class="partHeader">Starters</h1>
          <div className="mainMenu">{startersMenu}</div>
          <h1 class="partHeader">Main Dishes</h1>
          <div className="mainMenu">{mainDishesMenu}</div>
          <h1 class="partHeader">Desserts</h1>
          <div className="mainMenu">{dessertsMenu}</div>
        </div>
      );
}

export default HomePage;