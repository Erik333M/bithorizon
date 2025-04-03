import { useNavigate } from 'react-router-dom';
import './Card.css';

interface ICard {
  title: string;
  text: string;
  image?: string;
  linkUrl: string;
  reverse: boolean;
  logo: React.ReactNode;
}

const Card = ({ title, text, image, linkUrl, reverse, logo }: ICard) => {
  const navigate = useNavigate();

  return (
    <div className={`card ${reverse ? 'reverse' : ''}`}>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <button
          onClick={() => navigate(`${linkUrl}`)}
          className="opacity-button"
        >
          LEARN MORE
          <span className="hover-background"></span>
        </button>
      </div>
      <div className="card-image">
        {logo ? logo : <img src={image} alt={title} />}
      </div>
    </div>
  );
};
export default Card;
