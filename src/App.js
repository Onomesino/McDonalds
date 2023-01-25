import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import McNav from "./Component/ComponentNav/McNav";
import McDeals from "./Component/ComponentDeals/McDeals";
import McDonald from "./Component/CompoentMcDonalds/McDonald";
import McFreeFries from "./Component/ComponentFries/McFreeFries";
import McOrder from "./Component/ComponentOrder/McOrder";
import McStraight from "./Component/ComponentStraight/McStraight";
import McYourStory from "./Component/ComponentStory/McYourStory";


function App() {
  return (
    <>
      <McNav />
      <McStraight />
      <McFreeFries />
      <McYourStory />
      <McDonald />
      <McOrder />
      <McDeals />
    </>
  );
}

export default App;
