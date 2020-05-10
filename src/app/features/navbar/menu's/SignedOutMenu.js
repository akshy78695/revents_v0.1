import React from "react";

const SignedOutMenu = ({onSignedIn, register}) => {
    return (
        <div className="ml-auto" style={{ fontFamily: "serif" }}>
            <button className="font-weight-bold btn btn-outline-light" onClick={onSignedIn}>
                Sign In
            </button>
            <button onClick={register} className="font-weight-bold btn btn-outline-light mx-3" >
                Register
            </button>
        </div>
    );
};

export default SignedOutMenu;
