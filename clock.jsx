import { css } from 'uebersicht';

export const command = 'bash minima/scripts/time.sh';

export const refreshFrequency = 30000;

const clockContainer = css`
  position: fixed;
  right: 0;
  margin-top: 12px;
  margin-right: 12px;
  font-family: 'SF Mono';
  font-size: 12px;
`;

const clock = css`
  background-color: #111;
  border-radius: 4px;
  color: #fff;
  padding: 4px 8px;
`;

export const render = ({ output }) => {
  return (
    <div className={clockContainer}>
      <div className={clock}>{output}</div>
    </div>
  );
};
