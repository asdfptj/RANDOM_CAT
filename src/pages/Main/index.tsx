import { Link } from "react-router-dom";

import Button from "../../components/Button";
import { Container, Title } from "./styled";

function Main() {
  return (
    <Container>
      <Title>랜덤 고양이 사진 만들기</Title>
      <Link to="/cats">
        <Button bgColor="#0fa0e4" pointer color="#fff">
          시작!
        </Button>
      </Link>
    </Container>
  );
}

export default Main;
