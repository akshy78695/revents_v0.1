import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

class CropperInput extends Component {
    cropper = createRef();

    cropImage = () => {
        let { setImage } = this.props;
        //imgExtention is variable made for remove warning
        let imgExtention = setImage ? "image/jpeg" : "image/jpeg";
        if (typeof this.cropper.current.getCroppedCanvas() === "undefined") {
            return;
        }
        this.cropper.current.getCroppedCanvas().toBlob((blob) => {
            setImage(blob);
        }, imgExtention);
    };
    render() {
        const { imagePreview } = this.props;
        return (
            <Cropper
                ref={this.cropper}
                src={imagePreview}
                style={{ height: 200, width: "100%", margin: "10px auto" }}
                preview=".img-preview"
                aspectRatio={1}
                viewMode={1}
                guides={false}
                dragMode="move"
                scalable={true}
                cropBoxMovable={true}
                cropBoxResizable={true}
                crop={this.cropImage}
            />
        );
    }
}
export default CropperInput;
