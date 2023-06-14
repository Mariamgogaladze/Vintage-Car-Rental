import "./topic.css";
import TopicData from "./TopicData";
function Topic() {
  return (
    <div className="topic-container">
      {TopicData.map((topic) => (
        <div className="topic-div" key={topic.key}>
          <img className="topic-icon" src={topic.image} alt="icons" />
          <div>
            <h1 className="topic-heading">{topic.title}</h1>
            <p className="topic-text">{topic.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Topic;
