import React from "react";
import PetMapContainer from "./PetMapContainer";
import { PetMapContainerBox, SearchBar } from "./petmap.style";
import PetMapSearch from "./PetMapSearch";

function PetMapHospital() {
  const onSubmit = (form: { name: string }) => {
    console.log(form);
  };
  return (
    <div>
      <SearchBar>
        <PetMapSearch onSubmit={onSubmit} />
      </SearchBar>
      <PetMapContainerBox>
        <PetMapContainer />
      </PetMapContainerBox>
    </div>
  );
}

export default PetMapHospital;
