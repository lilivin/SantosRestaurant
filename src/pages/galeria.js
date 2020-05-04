import React, { useState, useCallback } from "react";
import '../styles/aboutUs.css';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: "https://cdn.pixabay.com/photo/2016/11/21/16/02/bar-1846137_960_720.jpg",
    width: 5,
    height: 3
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/04/17/12/49/barista-5055060_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/03/26/09/54/restaurant-690569_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_960_720.jpg",
    width: 5,
    height: 4
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/08/30/17/25/restaurant-2697945_960_720.jpg",
    width: 5,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/03/26/09/42/breakfast-690128_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/08/10/21/52/restaurant-3597677_960_720.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/06/08/15/02/breakfast-801827_960_720.jpg",
    width: 3,
    height: 2
  }
];


const Lottery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
    <Gallery photos={photos} onClick={openLightbox} />
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={photos.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  </div>
  );
}

export default Lottery;