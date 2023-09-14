import React from 'react';
import { PetMapContainerBox, SearchBar } from './petmap.style';
import PetMapSearch from './PetMapSearch';
import PetMapContainerSalon from './PetMapContainerSalon';

function PetMapSalon() {
    const onSubmit = (form: { name: string; }) => {
        console.log(form);
      };

    return (
        <div style={{ display: "inline-block", width: "100%" }}>
      <PetMapContainerBox>
        <PetMapContainerSalon />
      </PetMapContainerBox>
      </div>
    );
}

export default PetMapSalon;