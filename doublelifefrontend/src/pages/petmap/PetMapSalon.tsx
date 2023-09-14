import { PetMapContainerBox } from "./petmap.style";
import PetMapContainerSalon from "./PetMapContainerSalon";

function PetMapSalon() {
  return (
    <div style={{ display: "inline-block", width: "100%" }}>
      <PetMapContainerBox>
        <PetMapContainerSalon />
      </PetMapContainerBox>
    </div>
  );
}

export default PetMapSalon;
