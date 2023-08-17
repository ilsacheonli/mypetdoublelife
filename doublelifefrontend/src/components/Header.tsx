import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  width: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  color: ${props => props.theme.lightGray};
  height: 44px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
`

function Header() {
    return (
        <div>
            
        </div>
    );
}

export default Header;