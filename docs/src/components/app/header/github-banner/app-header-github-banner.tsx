import React, { useGlobal } from 'reactn';
import './app-header-github-banner.scss';



const arm: string =
  'M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 ' +
  '15 9 16';

const BACKGROUND_COLOR: string = '#202020';

const body: string =
  'M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 ' +
  '12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 ' +
  '6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z';

const SIZE: number = 69; // nice



export default function AppHeaderGitHubBanner() {
  const [ fill ] = useGlobal('rainbow');
  return (
    <a
      className="app-header-github-banner"
      href="https://github.com/CharlesStover/reactn"
      rel="nofollower nofollower noopener"
      target="_blank"
      title="ReactN on GitHub"
    >
      <svg
        fill={BACKGROUND_COLOR}
        height={SIZE}
        width={SIZE}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 250"
      >
        <path
          className="app-header-github-banner-background"
          d="M0 0l115 115h15l12 27 108 108V0z"
          style={{ fill }}
        />
        <path className="app-header-github-banner-arm" d={arm} />
        <path d={body} />
      </svg>
    </a>
  );
}
