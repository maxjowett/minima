import { css } from 'uebersicht';
import { baseStyles, blockStyle } from './lib/styles.jsx';

export const command = 'bash minima/scripts/right.sh';

export const refreshFrequency = 15000;

const rightContainer = css`
  position: fixed;
  right: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  margin-right: 12px;
`;

export const render = ({ output }) => {
  let parsed = JSON.parse(output);
  const { time, batteryLevel, powerSource, currentlyPlaying } = parsed;
  return (
    <div className={`${baseStyles} ${rightContainer}`}>
      {currentlyPlaying && <div className={blockStyle}>{currentlyPlaying}</div>}
      <div className={blockStyle}>{batteryLevel}</div>
      <div className={blockStyle}>{time}</div>
    </div>
  );
};
