

import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';


// arrow function can be used instead of function
export default (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color}/>
            </Sparklines>   
        </div>

    )
}