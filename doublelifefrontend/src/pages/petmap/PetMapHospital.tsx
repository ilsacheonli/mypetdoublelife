import React from 'react';
import PetMapContainer from './PetMapContainer';
import { PetMapContainerBox } from './petmap.style';

function PetMapHospital() {
    return (
        <div>
            <PetMapContainerBox>
                <PetMapContainer />
            </PetMapContainerBox>
        </div>
    );
}

export default PetMapHospital;