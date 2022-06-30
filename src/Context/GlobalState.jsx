import React, { createContext, useState } from 'react';

const Context = createContext(null);

function Provider({ children }) {
	
  const [techSingle, setTechSingle] = useState({})
  const [newSingle, setNewSingle] = useState(0)

	return (
		<Context.Provider value = {{techSingle, setTechSingle, newSingle, setNewSingle} }>{children}</Context.Provider>
	);
}

export { Provider, Context };
