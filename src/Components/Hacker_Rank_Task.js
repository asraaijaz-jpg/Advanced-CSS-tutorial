import React from 'react';

function HackerRank()
{
    // /////////////////////////////////////////////////////////////////////////////

    function min_max_sum_from_array(array)
    {
    const asc=array.sort();
    let maxsum=0;
    let minsum=0;
    let fmaxsum=0;
    let fminsum=0;

    let length=array.length;

    for(let i=0; i<array.length; i++)
    {
     maxsum=maxsum+array[i];
     minsum=minsum+array[i];
    }
    
    fmaxsum=maxsum-array[0];
    fminsum=minsum-[array[length-1]]
    
    return [ "Maximum value:" , fmaxsum ,"    ", 'Minimum value:', fminsum] ;
    }


// ////////////////////////////////////////////////////////////////////////

function Candleheight(candle)
{
let height=candle.sort();
let tallest=candle.reverse();
alert(tallest);
}



    return(
        <div>
            <h1>HackerRank</h1>
            <h2>min_max_sum_from_array</h2>{min_max_sum_from_array([1,3,5,7,9])}<br></br>
            <h2>Guess_the_height_of_Candle</h2>{Candleheight[4,4,1,3]}
        </div>
    )
}
export default HackerRank;