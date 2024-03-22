import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";
import { Button, Grid, Input, Textarea, Container, Stack } from "@mantine/core";
import "@mantine/core/styles.css";

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
  {
    id: 4,
    title: "Latismus Dorsi 4",
    paragraph: "aciklama 4",
  },
];

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState(arr);
  const [lesson, setLesson] = useState(11);
  const click = () => {
    setTitle("");
    setParagraf("");
    const copyList = [...list];
    copyList.push({
      id: 5,
      title: title,
      paragraph: paragraf,
    });
    setList(copyList);
  };
  return (
    <Container>
      <h1>Card Create Application</h1>
      <Stack>
        <Input.Wrapper label="Header">
          <Input
            placeholder="Write Header"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>

        <Textarea
          label="Paragraph"
          placeholder="Write Paragraph"
          value={paragraf}
          onChange={(e) => setParagraf(e.target.value)}
        />

        <Button variant="filled" onClick={click}>
          Create
        </Button>
      </Stack>

      <h2>Cards:</h2>
      <Grid>
        {list.map(({ id, title, paragraph }) => (
          <Grid.Col span={3} key={id}>
            <Card paragraph={paragraph} title={title} lesson={lesson} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
