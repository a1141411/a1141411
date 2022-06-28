import { useState } from "react";
// peops 不是自己的， 是传过来的
function Notification({n}) {
    // console.log(props);
    return (
        <div>
            {n > 0 ? `有(${n})条未读消息`: '没有未读消息'}
        </div>
    )
}

export default Notification