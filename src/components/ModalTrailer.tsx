import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import { IMovieVideo } from "../interface/movie";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  video: IMovieVideo;
}

const ModalTrailer: FC<Props> = ({ isOpen, onClose, video }) => {
  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
      <ModalContent bg="none" height="400px">
        <ModalCloseButton right="4" top="-20px" />
        <ModalBody>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalTrailer;
