import react from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Autocomplete, TextField } from "@mui/material";
import WalletIcon from '@mui/icons-material/wallet';

export const TopHeader = () => {
    return (
        <TopHeaderView>
            <Image src="opensea.svg" width={40} height={40} />
            <Title>Opensea</Title>
            <SearchView>
                <Autocomplete 
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={"Search items, collections, and accounts"} 
                    />
                  )}
                  options={[]}
                />
            </SearchView>
						
            <MenuView>
                <Menu>Explorer</Menu>
                <Menu>Create</Menu>
            </MenuView>

            <IconView>
                <WalletIcon />
            </IconView>
        </TopHeaderView>
    );
};

const TopHeaderView = styled.div`
    padding: 16px 32px;
    display: flex;
    flex-direction: row;
    align-item: center;
`;

const SearchView = styled.div`
	flex: 1;
	margin-left: 64px;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
    margin-left: 8px;
`;

const MenuView = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 64px;
`;

const Menu = styled.div`
	padding: 0 16px;
	font-weight: 700;
`;

const IconView = styled.div`
	margin-left: 32px;
`;