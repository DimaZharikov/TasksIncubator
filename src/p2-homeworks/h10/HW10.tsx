import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import './HW10Style.css'

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)),2000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <div className='HW10'>
            {loading
                ? (
                    <div className='windows8-wrapper'>
                    <div className="windows8">
                        <div className="wBall" id="wBall_1">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_2">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_3">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_4">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_5">
                            <div className="wInnerBall"></div>
                        </div>
                    </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
            </div>
        </div>
    );
}

export default HW10;
