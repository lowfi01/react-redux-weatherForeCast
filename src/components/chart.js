

import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


// arrow function can be used instead of function
export default (props) => {
    function average(arrData){
        return(
            //use lodash to help calculate average 
            // get the sum of all numbers in data .sum(array)
            // divide sum by length of array /data.length
            // round number to prevent decimal numbers _.round

            _.round(_.sum(arrData)/arrData.length)
        )
    }

    return(
        <div>
            {/* // svgHeight & svgWidth are dynamically sized values & easier to read */}
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                    <SparklinesLine color={props.color}/>
                    <SparklinesReferenceLine type="avg" />
            </Sparklines>   
            {/* // find average sum total of array divide by length of array */}
            <div>
                {average(props.data)} <b><i><small>{props.units}</small></i></b>
            </div>
        </div>

    )
}