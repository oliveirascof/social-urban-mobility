import React from "react";

import { NavContainer } from "./style";
import { NavLogo } from "./style";
import { NavMenu } from "./style";
import { Input } from "./style";

import { Link } from "react-router-dom";

const Header = () => {
    return(
        <NavContainer>
            <NavMenu>
                Para onde deseja ir?
            </NavMenu>

        <div>
            <Input />
        </div>
            
        </NavContainer>
    )
}

export default Header;