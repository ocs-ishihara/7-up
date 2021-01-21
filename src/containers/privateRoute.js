import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../slices/auth";

// true = 子要素へ, false = ログインへ戻る
const PrivateRoute = props => {
    const auth = useSelector(isAuthSelector);
    if(auth) {
        return props.children;
        //return <Redirect to="/" />;
    }
    else {
        return <Redirect to="/" />;
        //return props.children;
    };
};

export default PrivateRoute;
//*/
