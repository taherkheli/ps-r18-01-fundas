import React, { useCallback, useState } from "react";
import Banner from "./banner";
import navValues from "../helpers/navValues";
import ComponentPicker from "./componentPicker";

const navContext = React.createContext(navValues.home);

const App = () => {

  const navigate = useCallback( (navTo) => {
      setNav( { current: navTo, navigate } );
    }, [] );

  const [ nav, setNav ] = useState( { current: navValues.home, navigate });

  return (
    <navContext.Provider value={nav}>
      <Banner headerText="Providing houses all over the world" />
      <ComponentPicker currentNavLocation={nav.current} />
    </navContext.Provider>
  );
};

export { navContext };
export default App;
