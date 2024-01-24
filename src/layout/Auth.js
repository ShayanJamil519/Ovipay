import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = props => {
	const history = useHistory();
    const { uid } = useSelector((state) => state.authUser);

    useEffect(() => {
        if (uid) {
            history.push("/");
        }
    }, [uid]);
	return (
		<>
			{props.children}
		</>
	);
};

export default Auth;
