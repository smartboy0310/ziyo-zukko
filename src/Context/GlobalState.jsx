import React, { createContext, useState } from 'react';

const Context = createContext(null);

function Provider({ children }) {
  const [techSingle, setTechSingle] = useState({})
	return (
		<Context.Provider value = {{techSingle, setTechSingle}}>{children}</Context.Provider>
	);
}

export { Provider, Context };
