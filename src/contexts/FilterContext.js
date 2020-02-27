import React, {useState, createContext} from 'react';

export const FilterContext = createContext([{}, () => {}]);

export function FilterContextProvider(props){
  const [filter, setFilter] = useState({
      thickness:0, 
      priceHigh:"", 
      priceLow:"",
      hasLatex:false,
      warranty:0,
      hasEMI: false,
      width: 0
    });
  return(
    <FilterContext.Provider value={[filter, setFilter]}>
      {props.children}
    </FilterContext.Provider>
  )
}

