import React from 'react';
import { PetMapContainerBox, SearchBar } from './petmap.style';
import PetMapSearch from './PetMapSearch';
import PetMapContainer from './PetMapContainer';

function PetMapSalon() {
    const onSubmit = (form: { name: string; }) => {
        console.log(form);
      };

    return (
        <div style={{ display: "inline-block", width: "100%" }}>
      <SearchBar>
        <PetMapSearch onSubmit={onSubmit}/>
      </SearchBar>
      <PetMapContainerBox>
        <PetMapContainer/>
      </PetMapContainerBox>
      </div>
    );
}

export default PetMapSalon;