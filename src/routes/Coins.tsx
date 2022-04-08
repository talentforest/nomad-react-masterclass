import { useQuery } from 'react-query';
import { Link } from "react-router-dom";
import { fetchCoins } from '../api';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

export default function Coins() {
  const { isLoading, data } = useQuery("allCoins", fetchCoins);

  return (
    <>
      <Container>
        <Helmet>
          <title>
            Coin List
          </title>
        </Helmet>
        <Header>
          <Title>Coin List</Title>
        </Header>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinList>
            {data?.slice(0, 50).map((coin: CoinInterface) => (
              <Coin key={coin.id}>
                <Link
                  to={`/${coin.id}/chart`}
                  state={{ name: coin.name, rank: coin.rank }}
                >
                  <div>
                    <Img
                      src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                    />
                    {coin.name}
                  </div>
                  <div>&rarr;</div>
                </Link>
              </Coin>
            ))}
          </CoinList>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto 80px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 20px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.textColor};
    > div {
      display: flex;
      align-items: center;
    }
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      background-color: ${(props) => props.theme.textColor};
      border-radius: 5px;
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
