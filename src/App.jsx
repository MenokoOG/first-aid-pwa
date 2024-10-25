import AidCard from "./components/AidCard";
import './App.css'

const firstAidData = [
  { title: "Bleeding", description: "Apply pressure to the wound with a clean cloth to stop bleeding." },
  { title: "Burns", description: "Cool the burn under running water for 10-20 minutes." },
  { title: "Fracture", description: "Immobilize the limb and seek medical assistance." },
  { title: "Choking", description: "Perform abdominal thrusts until the object is dislodged." },
  { title: "Heat Exhaustion", description: "Move to a cool place, and drink water slowly." }
];

const App = () => (
  <div className="app-container">
    <h1>First Aid Reference</h1>
    {firstAidData.map((item, index) => (
      <AidCard key={index} title={item.title} description={item.description} />
    ))}
  </div>
);

export default App;