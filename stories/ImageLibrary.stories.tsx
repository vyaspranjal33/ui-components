import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Alert from '../src/alert';
import ImageLibrary, { SGLibraryImage } from '../src/image-library';

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

interface ExampleContainerState {
  images: Array<SGLibraryImage>;
  uploadingImage?: SGLibraryImage;
}

// some stuff i did in here might be dubious but this was done mostly for me to
// better understand the requirements of the ui-components designed
class ExampleContainer extends Component<any, ExampleContainerState> {
  public state: ExampleContainerState = {
    images: [],
    uploadingImage: null,
  };

  public componentDidMount () {
    fileReader.onload = (e: any) => {
      this.setState((prevState) => {
        const { uploadingImage } = prevState;
        return {
          uploadingImage: { ...uploadingImage, thumbnailUrl: e.target.result }
        };
      });
    };
  }

  public render () {
    const images = this.getImages();

    return (
      <ImageLibrary
        maximumImageBytes={4 * (1 << 20) /* 4 MB */}
        onUpload={this.handleUpload}
        onUploadFailure={action('invalid upload')}
        {...this.props}

        images={images}
      />
    );
  }

  private getImages = () => {
    const { uploadingImage } = this.state;
    const images = this.state.images.concat(this.props.images);

    if (!uploadingImage || !uploadingImage.thumbnailUrl) {
      return images;
    }

    return [uploadingImage].concat(images);
  };

  private handleUpload = (file: File) => {
    fileReader.readAsDataURL(file);

    const uploadIllusion = () => {
      this.setState((prevState: any) => {
        const { uploadingImage } = prevState;
        const uploadPercent = uploadingImage.uploadPercent + 1;

        if (uploadPercent < 100) {
          setTimeout(uploadIllusion, 18);
        } else {
          this.handleUploadComplete();
        }

        return { uploadingImage: { ...uploadingImage, uploadPercent } };
      });
    };

    setTimeout(uploadIllusion, 18);
    this.setState({ uploadingImage: { id: file.name, name: file.name, uploadPercent: 0 }});
  };

  private handleUploadComplete = () => {
    this.setState((prevState) => {
      const { images, uploadingImage } = prevState;
      return {
        images: [uploadingImage].concat(images),
        uploadingImage: null,
      };
    });
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