import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <>
      <div>
        {isLoading ? (
          "Loading Chart..."
        ) : (
          <ApexChart
            type="candlestick"
            series={[
              {
                name: "Price",
                data: data?.map((price) => ({
                  x: price.time_close,
                  y: [price.open, price.high, price.low, price.close],
                })) ?? [],
              },
            ]}
            options={{
              chart: {
                toolbar: {
                  show: false
                },
                height: 900,
                background: "transparent",
                foreColor: "#fff",
                animations: {
                  enabled: true,
                  easing: "easeinout",
                  speed: 800,
                  animateGradually: {
                    enabled: true,
                    delay: 150,
                  },
                  dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                  },
                },
              },
              xaxis: {
                type: "datetime",
              },
              yaxis: {
                show: false,
              },
            }}
          />
        )}
      </div>
    </>
  )
}
