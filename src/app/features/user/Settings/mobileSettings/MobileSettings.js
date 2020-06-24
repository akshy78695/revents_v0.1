import SettingNavbar from "../SettingNavbar";
import { withRouter } from "react-router-dom";
import { withGetScreen } from "react-getscreen";

import React, { Component } from "react";

export class MobileSettings extends Component {
    render() {
        // const { isMobile, history } = this.props;
        // if (!isMobile()) {
        //     history.push("/settings");
        // }
        return <SettingNavbar />;
    }
}

export default withRouter(withGetScreen(MobileSettings));
