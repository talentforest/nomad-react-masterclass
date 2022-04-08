import { useQuery } from 'react-query';
import { Helmet } from "react-helmet-async"
import { useLocation, useParams } from "react-router";
import { Routes, Route, Link, useMatch } from 'react-router-dom';
import { fetchCoinInfo, fetchCoinTickers } from '../api';
import Chart from "./Chart";
import Price from "./Price"
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  state: string;
  name: string;
}

export default function Coin() {
  const state = useLocation().state as RouteState;
  const { coinId } = useParams() as unknown as RouteParams;

  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const loading = infoLoading || tickersLoading

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ?
            "Loading..." : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ?
            "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>${tickersData?.quotes.USD.price.toFixed(2)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={"chart"}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={"price"}>Price</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route path="chart" element={<Chart coinId={coinId} />} />
            <Route path="price" element={<Price coinId={coinId} tickersData={tickersData} />} />
          </Routes>

          <BackBtn>
            <Link to={`/`}>
              Back
            </Link>
          </BackBtn>

        </>
      )}
    </Container>
  );
}

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.boxColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 10px;
  a {
    padding: 7px 0px;
    display: block;
    color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  }
`;

const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 80px;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 35px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.accentColor};
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.textColor};
    }

  }
`

