import React from "react";
import Clock from "./Clock";

function HW9() {
    return (
        <div>
            <hr/>
            homeworks 9
            <div className='wrapper-hw6'>
                {/*should work (должно работать)*/}
                <Clock/>

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeClock/>*/}
                <hr/>
            </div>
        </div>
    );
}

export default HW9;
