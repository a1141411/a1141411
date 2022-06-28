import { useState } from "react";
// peops 不是自己的， 是传过来的
function Screen({logo, showContent}) {
    // console.log(props);
    return (
        <div>
            Screen {logo} {showContent}
        </div>
    )
}

export default Screen