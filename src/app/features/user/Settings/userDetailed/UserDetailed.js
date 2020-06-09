import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import UserDetailedInfo from "./UserDetailedInfo";
import UserDetailedHeader from "./UserDetailedHeader";
import UserDetailedPhotos from "./UserDetailedPhotos";
import UserDetailedEvents from "./UserDetailedEvents";
import { userDetailedQuery } from "../../UserQueries";
import LoadingComponent from "../../../../layout/LoadingComponent";
import { getUserEvents } from "../../../user/userActions";

const mapState = (state, ownProps) => {
    let userUid = null;
    let profile = {};

    if (ownProps.match.params.id === state.auth.id) {
        profile = state.firebase.profile;
    } else {
        profile =
            !isEmpty(state.firestore.ordered.profile) &&
            state.firestore.ordered.profile[0];
        userUid = ownProps.match.params.id;
    }
    return {
        profile,
        userUid,
        auth: state.firebase.auth,
        events: state.events,
        eventsLoading: state.async.loading,
        photos: state.firestore.ordered.photos,
        requesting: state.firestore.status.requesting,
    };
};

const actions = {
    getUserEvents,
};

class UserDetailed extends Component {
    async componentDidMount() {
        await this.props.getUserEvents(this.props.userUid);
    }
    render() {
        let {
            photos,
            profile,
            auth,
            match,
            requesting,
            events,
            eventsLoading,
        } = this.props;
        const currentUser = auth.uid === match.params.id;
        const loading = Object.values(requesting).some((a) => a === true);
        if (loading)
            return (
                <LoadingComponent
                    loadingMessage={"Loading user.."}
                    loaderWidth={"80px"}
                />
            );
        return (
            <div>
                <UserDetailedHeader profile={profile} />
                <UserDetailedInfo profile={profile} currentUser={currentUser} />
                {photos && photos.length > 0 && (
                    <UserDetailedPhotos photos={photos} />
                )}
                <UserDetailedEvents
                    profile={profile}
                    events={events}
                    eventsLoading={eventsLoading}
                />
            </div>
        );
    }
}

export default connect(
    mapState,
    actions
)(
    firestoreConnect((authInfo, userUid) =>
        userDetailedQuery(authInfo, userUid)
    )(UserDetailed)
);
