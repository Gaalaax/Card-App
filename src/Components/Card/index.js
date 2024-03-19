import "./Card.css";

const Card = ({ title, paragraph, lesson }) => {
  return (
    <div className="Card">
      <h4>{title}</h4>
      <div>{paragraph}</div>
      {lesson > 20 && <div>Expert</div>}
      <button>Read More</button>
    </div>
  );
};

export default Card;
