import { css } from 'uebersicht';

export const command = 'bash minima/scripts/battery.sh';

export const refreshFrequency = 5000;

const batteryContainer = css`
  position: fixed;
  right: 72px;
  margin-top: 12px;
  margin-right: 16px;
  font-family: 'SF Mono';
  font-size: 13px;
`;

const battery = css`
  background-color: #111;
  border-radius: 4px;
  color: #fff;
  padding: 4px 8px;
`;

export const render = ({ output }) => {
  return (
    <div className={batteryContainer}>
      <div className={battery}>{output}</div>
    </div>
  );
};
