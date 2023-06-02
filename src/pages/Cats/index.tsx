import { useEffect, useState, Fragment } from "react";
import { getCats } from "../../api/getCats";
import type { GetCatsResponse } from "../../api/getCats";
import { Container, List, Item, Image } from "./styled";
import Button from "../../components/Button";
import { useQuery } from "react-query";
import Modal from "react-modal";

Modal.setAppElement("#root");
function Cats() {
  const [cats, setCats] = useState<GetCatsResponse[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalImgUrl, setModalImgUrl] = useState<string>("");

  const { data, isLoading, refetch } = useQuery(["cats"], getCats, {
    refetchOnWindowFocus: false,
  });

  const refresh = () => refetch();

  const handleOpenModal = (url: string) => {
    setModalImgUrl(url);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalImgUrl("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (!data) return;
    setCats(data);
    console.log({ data });
  }, [data]);

  if (isLoading) {
    return <div>로딩중입니다</div>;
  }

  return (
    <Container>
      <h2>고양이</h2>
      {isLoading && <div>로딩중입니다...</div>}
      {!isLoading && (
        <List>
          {cats.map(({ id, url }, index) => {
            if (index > 8) return <Fragment key={id} />;
            const itemClick = () => handleOpenModal(url);
            return (
              <Item key={id} onClick={itemClick}>
                <Image src={url} alt={id} objectFit="cover" />
              </Item>
            );
          })}
        </List>
      )}
      <Button bgColor="#0fa0e4" color="#fff" pointer={true} onClick={refresh}>
        고양이 새로고침
      </Button>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            overflow: "hidden",
          },
        }}
      >
        <Image src={modalImgUrl} alt="modal-img" objectFit="contain"></Image>
      </Modal>
    </Container>
  );
}
export default Cats;
