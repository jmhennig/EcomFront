import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import logo from "../public/rumiilogo.png";
import { primary } from "@/lib/colors";

const StyledHeader = styled.header`
    background-color: #222;
`;
const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: inline;
    width: 100px;

`;
const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0;
`;
const StyledNav = styled.nav`
    padding-top: 20px;
    display: flex;
    gap: 15px;
`;
const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:hover {
        color: ${primary};
        transition: 0.5s ease;
    }
`;

export default function Header() {
    const {cartProducts} = useContext(CartContext);

    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>
                        <StyledImage src={logo} alt="Rumii Logo" />
                    </Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>All products</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}