import { css } from 'uebersicht';

export const command = 'bash minima/scripts/workspaces.sh';

export const refreshFrequency = 6000;

const workspacesContainer = css`
  position: fixed;
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 4px;
  margin-top: 12px;
  margin-left: 12px;
  font-family: 'SF Mono';
  font-size: 12px;
`;

const workspace = css`
  background-color: #111;
  border-radius: 4px;
  color: #fff;
  padding: 4px 8px;
`;

const active = css`
  color: #fff;
`;

const inactive = css`
  color: #666;
`;

export const render = ({ output }) => {
  let data = JSON.parse(output);
  return (
    <div className={workspacesContainer}>
      {data && data.map((w, i) => (
        <div
          key={i}
          className={`${workspace} ${w.focused ? active : inactive}`}
        >
          {w.index}
        </div>
      ))}
    </div>
  );
};
