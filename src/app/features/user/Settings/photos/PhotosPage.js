import React, { useState, useEffect, Fragment } from "react";
import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import { Button } from "semantic-ui-react";
import {
    uploadProfileImage,
    deletePhoto,
    setMainPhoto,
} from "../../userActions";
import { connect } from "react-redux";
// import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import UserPhotos from "./UserPhotos";

const query = ({ auth }) => {
    console.log("auth in qurey function", auth);
    if (auth.uid) {
        return [
            {
                collection: "users",
                doc: auth.uid,
                subcollections: [{ collection: "photos" }],
                storeAs: "photos",
            },
        ];
    } else {
        return [];
    }
};

const actions = {
    uploadProfileImage,
    deletePhoto,
    setMainPhoto,
};
const mapState = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    photos: state.firestore.ordered.photos,
    loading: state.async.loading,
});

const PhotosPage = ({
    auth,
    photos,
    profile,
    uploadProfileImage,
    deletePhoto,
    setMainPhoto,
    loading
}) => {
    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(() => {
        return () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        };
    }, [files]);

    const handleUploadImage = async () => {
        try {
            let temp = await uploadProfileImage(image, files[0].name);
            console.log(temp);
            // if(temp === "success"|| temp === "error"){setUploadButton(false)}
            console.log("uske niche");
            handleCancelCrop();
            toastr.success("success", "Photo has been uploaded");
        } catch (e) {
            console.log(e);
            toastr.error("oops", "Something went wrong");
        }
    };

    const handleCancelCrop = () => {
        setFiles([]);
        setImage(null);
    };

    const handleDeletePhoto = async (photo) => {
        try {
            await deletePhoto(photo);
            toastr.success("success", "photo has been deleted");
        } catch (e) {
            toastr.error("oops", e.message);
        }
    };

    const handleSetPhoto = async (photo) => {
        try {
            await setMainPhoto(photo);
        } catch (e) {
            console.log(e);
            toastr.error("oops", e.message);
        }
    };
    return (
        <div>
            <div className="h3">Your Photos</div>
            <hr />
            <div className="row">
                <div className="col-md-4 my-3">
                    <div
                        className="text-center"
                        style={{ fontSize: "18px", color: "teal" }}
                    >
                        <span>Step 1 - Add Photo</span>
                        <div
                            style={{
                                width: "fit-content",
                                margin: "10px auto",
                            }}
                        >
                            <DropzoneInput setFiles={setFiles} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div
                        className="text-center"
                        style={{ fontSize: "18px", color: "teal" }}
                    >
                        <span>Step 2 - Resize image</span>
                    </div>
                    {files.length > 0 && (
                        <CropperInput
                            setImage={setImage}
                            imagePreview={files[0].preview}
                        />
                    )}
                </div>
                <div className="col-md-4 my-3">
                    <div
                        className="text-center"
                        style={{
                            fontSize: "18px",
                            color: "teal",
                            margin: "auto",
                        }}
                    >
                        <span>Step 3 - Preview and Upload</span>
                        {files.length > 0 && (
                            <Fragment>
                                <div
                                    className="img-preview"
                                    style={{
                                        minHeight: "200px",
                                        minWidth: "200px",
                                        overflow: "hidden",
                                        margin: "10px auto",
                                    }}
                                />
                                <Button.Group style={{ width: "200px" }}>
                                    <Button
                                        inverted
                                        color="green"
                                        loading={loading}
                                        onClick={handleUploadImage}
                                    >
                                        <span>
                                            <svg
                                                className="bi bi-check2"
                                                width="1.6em"
                                                height="1.6em"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                                                />
                                            </svg>
                                        </span>
                                    </Button>
                                    <Button disabled={loading} onClick={handleCancelCrop} inverted color="red">
                                        <span>
                                            <svg
                                                className="bi bi-x"
                                                width="1.6em"
                                                height="1.6em"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                                                />
                                            </svg>
                                        </span>
                                    </Button>
                                </Button.Group>
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
            <hr className="mt-3 mb-5" />
            <UserPhotos
                photos={photos}
                profile={profile}
                deletePhoto={handleDeletePhoto}
                setMainPhoto={handleSetPhoto}
            />
        </div>
    );
};

export default connect(
    mapState,
    actions
)(firestoreConnect((authInfo) => query(authInfo))(PhotosPage));
