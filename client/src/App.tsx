import { Fragment } from "react/jsx-runtime";
import { Button } from "./components/ui/button";
import Header from "./layouts/Header/header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="h-[200vh] container mx-auto mt-28 px-5 flex flex-col">
        <h1 className="text-4xl">Airbnb</h1>
        <p className="w-80 p-4">
          AIRBNB IS AN ONLINE MARKETPLACE THAT CONNECTS PEOPLE WHO WANT | TO
          RENT OUT THEIR PROPERTY WITH PEOPLE WHO ARE LOOKING FOR |
          ACCOMMODATIONS, TYPICALLY FOR SHORT STAYS
        </p>
        <Button variant={"outline"} className="w-40 mx-10">Airbnb</Button>
      </main>
    </Fragment>
  );
};

export default App;
