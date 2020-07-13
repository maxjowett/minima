import { css } from 'uebersicht';
import { baseStyles, blockStyle } from './lib/styles.jsx';

export const command = 'bash minima/scripts/right.sh';

export const refreshFrequency = 10000;

const BatteryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fafafa"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-battery"
    >
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
      <line x1="23" y1="13" x2="23" y2="11"></line>
    </svg>
  );
};

const BatteryChargingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fafafa"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-battery-charging"
    >
      <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path>
      <line x1="23" y1="13" x2="23" y2="11"></line>
      <polyline points="11 6 7 12 13 12 9 18"></polyline>
    </svg>
  );
};

const rightContainer = css`
  position: fixed;
  right: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  margin-right: 12px;
`;

const splitLayout = css`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 6px;
  margin: 0 auto;
`;

export const render = ({ output }) => {
  let parsed = JSON.parse(output);
  const { time, batteryLevel, powerSource, currentlyPlaying } = parsed;
  return (
    <div className={`${baseStyles} ${rightContainer}`}>
      {currentlyPlaying && <div className={blockStyle}>{currentlyPlaying}</div>}
      <div className={blockStyle}>
        <div className={splitLayout}>
          <div>
            {powerSource === 'charging' ? (
              <BatteryChargingIcon />
            ) : (
              <BatteryIcon />
            )}
          </div>
          <div>{batteryLevel}</div>
        </div>
      </div>
      <div className={blockStyle}>{time}</div>
    </div>
  );
};
