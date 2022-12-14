import { Container } from "react-bootstrap";
import Loginform from "../components/Loginform"

export default () => {
    return (
      <Container className="pt-5">
        <h1 className="mb-4">Cuentanos ¿Cómo Podemos ayudarte? </h1>
        <Loginform />
      </Container>
    );
  };