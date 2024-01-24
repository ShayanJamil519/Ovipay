import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Main = props => {
	const history = useHistory();
    const { uid } = useSelector((state) => state.authUser);

    useEffect(() => {
        if (!uid) {
            history.push("/auth");
        }
    }, [uid]);

	return (
		<>

				<div className="min-h-[100vh] ">
					


					{props.children}
				</div>



		</>
	);
};

export default Main;
