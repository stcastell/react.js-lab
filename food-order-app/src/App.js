import Header from "./Layout/Header/Header";
import AvailableMeals from "./Meals/AvailableMeals";
import Meals from "./Meals/Meals";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
        <AvailableMeals data={DUMMY_MEALS} />
      </main>
    </div>
  );
}

export default App;
