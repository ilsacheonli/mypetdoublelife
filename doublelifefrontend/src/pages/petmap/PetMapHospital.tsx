import PetMapContainer from "./PetMapContainer";
import { PetMapContainerBox } from "./petmap.style";

function PetMapHospital() {
  return (
    <div style={{ display: "inline-block", width: "100%" }}>
      <PetMapContainerBox>
        <PetMapContainer />
      </PetMapContainerBox>
    </div>
  );
}

export default PetMapHospital;
