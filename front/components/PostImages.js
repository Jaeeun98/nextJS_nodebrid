import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';  //폴더를 불러오면 자동으로 index도 같이 불러와짐

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
      setShowImagesZoom(true);
      console.log('click');
    }, []);
  
    const onClose = useCallback(() => {
      setShowImagesZoom(false);
    }, []);
  
    if (images.length === 1) {
      return (
        <>
          <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
      );
    }
    if (images.length === 2) {
      return (
        <>
          <div>
            <img role="presentation" src={images[0].src} alt={images[0].src} width="50%" onClick={onZoom} />
            <img role="presentation" src={images[1].src} alt={images[1].src} width="50%" onClick={onZoom} />
          </div>
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
      );
    }
    return (
      <>
        <div>
          <img role="presentation" src={images[0].src} alt={images[0].src} width="50%" onClick={onZoom} />
          <div
            role="presentation"
            style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
            onClick={onZoom}
          >
            <PlusOutlined />
            <br />
            {images.length - 1}
            개의 사진 더보기
          </div>
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  };

PostImages.propTypes = {
    //shape 사용하면 그 안에 있는 것들도 자세하게 적어줄 수 있음
    images:PropTypes.arrayOf(PropTypes.object),
  };

export default PostImages;