import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Card from './Components/Card';
import './css/App.css';
import 'victormono';

export default function App(): JSX.Element {
  const repos = ['suta', 'suta-docs'];
  const cards = repos.map((repo) => <Card title={repo} />);

  return (
    <main>
      <div className="container">
        <div className="flex">
          <div className="left">
            <figure className="image is-128x128">
              <img src="https://cdn.discordapp.com/avatars/283312847478325251/fc2b6fc5c1580e030efad955ebbfb306.png?size=1024" alt="placeholder" className="rounded image is-128x128" />
            </figure>
            <h1 className="title is-size-3 has-text-white mt-5 mb-0">duro</h1>
            <p className="subtitle is-size-5 has-text-white mt-1 mb-3">i make stuff</p>
            <a href="https://github.com/durocodes">
              <span className="icon-text has-text-light py-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <span>duro</span>
              </span>
            </a>
            <br />
            <a href="https://discord.com/users/283312847478325251">
              <span className="icon-text has-text-light py-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faDiscord} />
                </span>
                <span>duro#5232</span>
              </span>
            </a>
            <br />
            <a href="https://suta.tk">
              <span className="icon-text has-text-light py-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>suta.tk</span>
              </span>
            </a>
            <br />
          </div>
          <div className="right">
            <h1 className="title is-size-4 has-text-white mt-5">
              Recent Works on Github
            </h1>
            <div className="repos">{cards}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
