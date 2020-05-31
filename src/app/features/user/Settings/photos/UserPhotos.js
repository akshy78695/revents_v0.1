import React, { Fragment } from "react";
import { Card, Image } from "semantic-ui-react";

const UserPhotos = ({ photos, profile, deletePhoto, setMainPhoto }) => {
    let filteredPhotos;
    if (photos) {
        filteredPhotos = photos.filter(
            (photo) => photo.url !== profile.photoURL
        );
    }
    console.log("filtered photos", filteredPhotos);
    console.log("profile image", profile);
    return (
        <Fragment>
            <div className="h3 my-2">ALL PHOTOS</div>
            <div className="row mx-1">
                <div
                    className="col mx-1 float-left p-0"
                    style={{ width: "fit-content" }}
                >
                    <Card
                        style={{
                            width: "auto",
                            // minWidth: "150px",
                            maxWidth: "180px",
                            margin: "0",
                        }}
                    >
                        <Image
                            src={profile.photoURL || "/assets/user.png"}
                            wrapped
                            ui={false}
                        />
                        <Card.Content style={{ padding: "0rem 1rem" }}>
                            <div className="row">
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example"
                                    style={{ width: "100%" }}
                                >
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        disabled
                                    >
                                        Profile
                                    </button>
                                    {/* <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                    >
                                        <span>
                                            <svg
                                                className="bi bi-trash"
                                                width="1.6em"
                                                height="1.6em"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                />
                                            </svg>
                                        </span>
                                    </button> */}
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
                {photos &&
                    filteredPhotos.map((photo) => (
                        <div
                            className="col mx-1 float-left p-0"
                            style={{ width: "fit-content" }}
                            key={photo.id}
                        >
                            <Card
                                style={{
                                    width: "auto",
                                    // minWidth: "150px",
                                    maxWidth: "180px",
                                    margin: "0",
                                }}
                            >
                                <Image src={photo.url} wrapped ui={false} />
                                <Card.Content style={{ padding: "0rem 1rem" }}>
                                    <div className="row">
                                        <div
                                            className="btn-group"
                                            role="group"
                                            aria-label="Basic example"
                                            style={{ width: "100%" }}
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary"
                                                onClick={() =>
                                                    setMainPhoto(photo)
                                                }
                                            >
                                                main
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => {
                                                    deletePhoto(photo);
                                                }}
                                            >
                                                <span>
                                                    <svg
                                                        className="bi bi-trash"
                                                        width="1.6em"
                                                        height="1.6em"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                    ))}
                {/* <div
                    className="col mx-1 float-left p-0"
                    style={{ width: "fit-content" }}
                >
                    {photos &&
                        photos.map((photo) => (
                            <Card
                                style={{
                                    width: "auto",
                                    maxWidth: "150px",
                                    margin: "0",
                                }}
                                key={photo.id}
                            >
                                <Image src={photo.url} wrapped ui={false} />
                                <Card.Content style={{ padding: "0rem 1rem" }}>
                                    <div className="row">
                                        <div
                                            className="btn-group"
                                            role="group"
                                            aria-label="Basic example"
                                            style={{ width: "100%" }}
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary"
                                            >
                                                Main
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                            >
                                                <span>
                                                    <svg
                                                        className="bi bi-trash"
                                                        width="1.6em"
                                                        height="1.6em"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </Card.Content>
                            </Card>
                        ))}
                </div> */}
            </div>
        </Fragment>
    );
};

export default UserPhotos;
