import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  coinId: string;
  tickersData?: PriceData;
}

function checkValue(value: number | undefined) {
  if (value) {
    return value > 0;
  }
}

export default function Price({ coinId, tickersData }: PriceProps) {
  const [data, setData] = useState<PriceData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(tickersData);
    setLoading(false);
  }, [coinId, tickersData]);

  return (
    <Container>
      {loading ? (
        "Loading Price..."
      ) : (
        <>
          <PriceBox>
            <Tag>Price :</Tag>
            <Value>
              <Text
                isActive={true}>
                $ {tickersData?.quotes.USD.price.toFixed(3)}
              </Text>
            </Value>
          </PriceBox>
          <PriceBox>
            <Tag> Market Cap Change rate in 24h:</Tag>
            <Value>
              <Text
                isActive={
                  checkValue(data?.quotes.USD.market_cap_change_24h) === true
                }
              >
                {data?.quotes.USD.market_cap_change_24h} %
              </Text>
            </Value>
          </PriceBox>
          <PriceBox>
            <Tag> Change rate in 30 Minutes:</Tag>
            <Value>
              <Text
                isActive={
                  checkValue(data?.quotes.USD.percent_change_30m) === true
                }
              >
                {data?.quotes.USD.percent_change_30m} %
              </Text>
            </Value>
          </PriceBox>
          <PriceBox>
            <Tag> Change rate in 1 hours:</Tag>
            <Value>
              <Text
                isActive={
                  checkValue(data?.quotes.USD.percent_change_1h) === true
                }
              >
                {data?.quotes.USD.percent_change_1h} %
              </Text>
            </Value>
          </PriceBox>
          <PriceBox>
            <Tag> Change rate in 12 hours:</Tag>
            <Value>
              <Text
                isActive={
                  checkValue(data?.quotes.USD.percent_change_12h) === true
                }
              >
                {data?.quotes.USD.percent_change_12h} %
              </Text>
            </Value>
          </PriceBox>
          <PriceBox>
            <Tag> Change rate in 24 hours:</Tag>
            <Value>
              <Text
                isActive={
                  checkValue(data?.quotes.USD.percent_change_24h) === true
                }
              >
                {data?.quotes.USD.percent_change_24h} %
              </Text>
            </Value>
          </PriceBox>
        </>
      )}
    </Container>
  );
}

const comeupAnimation = keyframes`
  0% {
    transform: none;
    opacity: 0;
  }
  50% {
    transform: translateY(5px);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PriceBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 15px;
  margin: 0 0 10px;
  padding: 0 20px;
  animation: ${comeupAnimation} 0.5s linear forwards;
`;

const Tag = styled.h3`
  font-size: 12px;
  font-weight: 600;
`;

const Value = styled.div``;

const Text = styled.h3<{ isActive?: Boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.isActive ? "#02c335" : "#FF0000")};
`;
