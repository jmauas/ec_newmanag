import React, {createContext, useState} from "react";

const Busqueda = (props) => {
    const [state, setState] = useState('');
    return (
        <>
            <AppContext.Provider value={[state,setState]}>
                {props.children};
            </AppContext.Provider>
        </>
    );
}
export default Busqueda;
export const AppContext  = createContext();