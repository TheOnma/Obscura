import { VictoryBar, VictoryLine, VictorySankey } from 'victory-native';

export const WhaleChart = ({ data }: { data: Array<{ wallet: string; amount: number }> }) => (
  <VictoryBar data={data} x="wallet" y="amount" style={{ data: { fill: '#00ff88' } }} />
);

export const MevChart = ({ data }: { data: Array<{ x: number; y: number }> }) => (
  <VictoryLine data={data} style={{ data: { stroke: '#ff4d4f' } }} />
);

export const FlowChart = ({ links }: { links: Array<{ source: string; target: string; value: number }> }) => (
  <VictorySankey data={{ links }} />
);
