import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Alert from '../src/alert';
import ImageLibrary from '../src/image-library';

const stories = storiesOf('Image Library', module);

let imageIdCounter = 0;
const makeLibraryImage = (width: number, height: number) => ({
  id: 'abcd-ef01-' + imageIdCounter++,
  name: 'name_abcd-ef01-' + imageIdCounter,
  created: 100000,
  originalUrl: `https://via.placeholder.com/${width}x${height}`,
  thumbnailUrl: `https://via.placeholder.com/${width}x${height}`,
  width,
  height,
});

const images = [
  makeLibraryImage(100, 300),
  makeLibraryImage(300, 300),
  makeLibraryImage(300, 100),
  makeLibraryImage(25, 25),
  makeLibraryImage(50, 400),
  makeLibraryImage(400, 50),
];

const fileReader = new FileReader();
class ExampleContainer extends Component<any, any> {
  state: any = {
    uploadingImage: null,
  };

  componentDidMount () {
    fileReader.onload = (e: any) => {
      this.setState({
        uploadingImage: { url: e.target.result, name: 'file.jpg', uploadPercent: 0 }
      });
    };
  }

  render () {
    const { uploadingImage } = this.state;

    return (
      <ImageLibrary
        maximumImageBytes={4 * (1 << 20) /* 4 MB */}
        onUpload={this.handleUpload}
        onUploadFailure={action('invalid upload')}
        images={[]}
        uploadingImages={uploadingImage ? [uploadingImage] : []}
        {...this.props}
      />
    );
  }

  handleUpload = (file: File) => {
    fileReader.readAsDataURL(file);

    const uploadIllusion = () => {
      this.setState((prevState: any) => {
        const { uploadingImage } = prevState;
        const uploadPercent = uploadingImage.uploadPercent + 1;

        if (uploadPercent < 100) {
          setTimeout(uploadIllusion, 18);
        }

        return { uploadingImage: { ...uploadingImage, uploadPercent } };
      });
    };

    setTimeout(uploadIllusion, 18);
  };
}

stories.add('without upload alert, with images', () => (
  <ExampleContainer
    images={images}
  />
));

stories.add('with upload alert, no images', () => (
  <ExampleContainer
    uploadAlert={
      <Alert type="danger">
        The image you're attempting to upload exceeds our per-image size limit.
      </Alert>
    }
    images={[]}
  />
));
