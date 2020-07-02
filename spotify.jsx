import { css } from 'uebersicht';
import { baseStyles } from './lib/styles.jsx'

export const command = 'bash minima/scripts/spotify.sh';

export const refreshFrequency = 20000;

const spotifyContainer = css`
  position: fixed;
  right: 128px;
  margin-right: 12px;
`;

const spotify = css`
  background-color: #111;
  border-radius: 4px;
  color: #fff;
  padding: 4px 8px;
`;

export const render = ({ output }) => {
  return output && (
    <div className={`${baseStyles} ${spotifyContainer}`}>
      <div className={spotify}>{output}</div>
    </div>
  )
};
