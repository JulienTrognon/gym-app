import Hero from "./components/Hero.jsx";
import Generator from "./components/Generator.jsx";
import Workout from "./components/Workout.jsx";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-sm text-white sm:text-base">
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
}

export default App;
