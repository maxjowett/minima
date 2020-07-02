import { css } from 'uebersicht';
import { baseStyles } from './lib/styles.jsx';

export const command = 'bash minima/scripts/battery.sh';

export const refreshFrequency = 5000;

const batteryContainer = css`
  position: fixed;
  right: 72px;
  margin-right: 16px;
`;

const battery = css`
  background-color: #111;
  border-radius: 4px;
  color: #fff;
  padding: 4px 8px;
`;

export const render = ({ output }) => {
  return (
    <div className={`${baseStyles} ${batteryContainer}`}>
      <div className={battery}>{output}</div>
    </div>
  );
};
