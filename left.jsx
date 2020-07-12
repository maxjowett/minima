import { css } from 'uebersicht';
import { baseStyles, blockStyle } from './lib/styles.jsx';

export const command = 'bash minima/scripts/left.sh';

export const refreshFrequency = 30000;

const leftContainer = css`
  position: fixed;
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 4px;
  margin-left: 12px;
`;

const inactive = css`
  color: #666;
`;

export const render = ({ output, error }) => {
  let data = JSON.parse(output);
  return (
    <div className={`${baseStyles} ${leftContainer}`}>
      {data &&
        data.map((w, i) => (
          <div
            key={i}
            className={`${blockStyle} ${w.focused === 0 && inactive}`}
          >
            {w.index}
          </div>
        ))}
    </div>
  );
};
