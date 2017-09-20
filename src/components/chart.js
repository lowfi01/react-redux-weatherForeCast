

import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';


// arrow function can be used instead of function
export default (props) => {
    return(
        <div>
            {/* // svgHeight & svgWidth are dynamically sized values & easier to read */}
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                    <SparklinesLine color={props.color}/>
            </Sparklines>   
        </div>

    )
}