import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

export const Banner = () => {
	return (
		<BannerWrapper>
			<BannerView>
				<Title>Discover, collect, and sell extraordinary NFTs</Title>
				<SubTitle>on the world's first & largest NFT marketplace</SubTitle>
	
				<ButtonView>
					<BannerButton variant="contained" size="large">Explorer</BannerButton>
					<BannerButton variant="outlined" size="large">Create</BannerButton>
				</ButtonView>
			</BannerView>
		</BannerWrapper>
	);
};

const BannerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 100px;
`;

const BannerView = styled.div`
	max-width: 600px;
`;

const Title = styled.div`
	font-size: 48px;
	font-weight: 700;
`;

const SubTitle = styled.div`
	margin-top: 24px;
	font-size: 20px;
	font-weight: 500;
	max-width: 350px;
`;

const ButtonView = styled.div`
	margin-top: 24x;
`;

const BannerButton = styled(Button)`
	margin-right: 16px;
	padding: 12px 48px;
`;