import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";

let arr = [
  {
    id: 1,
    title: "Latismus Dorsi 1",
    paragraph: "aciklama 1",
  },
  {
    id: 2,
    title: "Latismus Dorsi 2",
    paragraph: "aciklama 2",
  },
  {
    id: 3,
    title: "Latismus Dorsi 3",
    paragraph: "aciklama 3",
  },
];

const App = () => {
  const [lesson, setLesson] = useState(11);
  return (
    <div>
      <h1>Get Started</h1>
      <h4> Ders {lesson}</h4>
      <button
        onClick={() => {
          setLesson(lesson + 1);
        }}
      >
        Change
      </button>
      <button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        Minus
      </button>
      <p>Latismus Dorsi</p>
      <div className="Cards">
        {arr.map(({ id, title, paragraph }) => (
          <Card key={id} paragraph={paragraph} title={title} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default App;
