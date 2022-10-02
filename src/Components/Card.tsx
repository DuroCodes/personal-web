import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../css/App.css';

const defaultProps = {
  starred: false,
};

type Language = 'TypeScript' | 'JavaScript' | 'HTML' | 'CSS' | 'Java' | 'Python' | 'Astro';

interface Props {
  title: string;
  starred?: boolean;
}

interface State {
  description: string;
  full_name: string;
  language: Language;
}

function Card({
  title, starred,
}: Props): JSX.Element {
  const colors: Record<Language, string> = {
    TypeScript: '#2b7489',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    Python: '#3572A5',
    Astro: '#ec672c',
  };

  const [data, setData] = React.useState<State>({ description: 'Loading...', full_name: 'Loading', language: 'TypeScript' });

  async function getData(tit: string) {
    const repoData = await axios.get(`https://api.github.com/repos/durocodes/${tit}`);
    const langData = await axios.get(`https://api.github.com/repos/durocodes/${tit}/languages`);
    const language = Object.keys(langData)[0];

    setData({ language, ...repoData.data });
  }

  useEffect(() => {
    getData(title);
  });

  const style = {
    backgroundColor: colors[data.language],
  };

  return (
    <div className="has-background-black repo-card p-4 my-4">
      <a href={`https://github.com/${data?.full_name}`}>
        <span className="icon-text has-text-link">
          <span className="icon">
            <FontAwesomeIcon icon={starred ? faStar : faBookBookmark} className="fa fa-book-bookmark" />
          </span>
          <span className="is-size-5">{title}</span>
        </span>
      </a>
      <p className="subtitle has-text-white is-size-6 mt-1 mb-3">{data?.description}</p>
      <div className="is-flex is-align-items-center">
        <div className="language-circle" style={style} />
        <p className="has-text-white ml-2">{data?.language}</p>
      </div>
    </div>
  );
}

Card.defaultProps = defaultProps;

export default Card;
