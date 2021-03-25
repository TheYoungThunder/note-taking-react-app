import Note from "./Note";
import CreateArea from "./CreateArea";
import Header from "./Header";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const notes = useSelector((state) => state.notesReducer);

  return (
    <div className="App">
      <Header />
      <main>
        <Container fluid>
          <CreateArea />
          <Row>
            {notes.map((note, index) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
