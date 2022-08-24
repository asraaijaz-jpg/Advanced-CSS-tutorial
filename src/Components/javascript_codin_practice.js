import React from 'react';
import { func } from 'prop-types';

function Javascript()
{
    function adding(a,b)
    {
    return a+b;
    }
// ////////////////////////////////////////////////////////////////////////////////////////
    function arraysum(array)
    {
    const sum=array.reduce((x, y) => x + y);
    return sum;
    }
// //////////////////////////////////////////////////////////////////////////////////
    function Dynamicarray(Dvalue)
    {
  var Darray=new Array();
  for(var j=0; j<Dvalue; j++)
  {
      Darray.push(j);
  }
  var lenOfDynamicarray=Darray.length;
//   console.log(lenOfDynamicarray);
  return Darray.toString();
    }
    // ///////////////////////////////////////////////////////////////////////////////////
   function CompareArrvalue(arr1,arr2) 
   {
   var i=0;
   var j=0;
   var k=0;

   var arr3 = new Array();

   for(var m=0; m<arr1.length; m++)
   {
       if(arr1[m]>arr2[m])
       {
           i++;
       }
       else if(arr1[m]<arr2[m])
       {
           j++;
       }
       if(arr1[m]=arr2[m])
       {
           k=0;
       }
   }
   arr3.push(i); 
   arr3.push(j);
   arr3.push(k);

return arr3.toString();
   }
// ////////////////////////////////////////////////////////////////////////

function diagonal(diagonalarr , diagonalarr2)
{
    // console.log(diagonalarr.length);
    var digsum=0;
    var temp=0;

    var digsum2=0;
    var temp2=0;

    var digsum3=0;
    var temp3=0;

    var digsum4=0;
    var temp4=0;

    var z=diagonalarr.length-1;

    for(var a=0; a<diagonalarr.length; a++)
    {
        for(var b=a; b<a+1; b++)
        {
        // console.log(diagonalarr[b][b]);
           temp=diagonalarr[b][b];
           temp2=diagonalarr2[b][b];

           temp3=diagonalarr[a][z];
           temp4=diagonalarr2[a][z];

        //    console.log(temp3);
        }
           digsum=digsum+temp; 
           digsum2=digsum2+temp2; 
           digsum3=digsum3+temp3; 
           digsum4=digsum4+temp4; 

           z--;
    }

    // console.log(digsum);
    // console.log(digsum2);
    // console.log(digsum3);
    // console.log(digsum4);

    var digvalue=digsum-digsum3;
    // console.log(Math.abs(digvalue));

    var digvalue2=digsum2-digsum4;
    // console.log(Math.abs(digvalue2));

    var digarr=new Array();
    digarr.push(digvalue,"");
    digarr.push(digvalue2);

return  digarr.toString();

}

// /////////////////////////////////////////////////////////////////////////

function makepropotion(proarray)
{
// console.log(proarray.length);
var propotionarray=new Array();

var p1=0 , p2=0 , p3=0;

for(var p=0; p<proarray.length; p++)
{
   if(proarray[p]>0)
   {
       p1++;
   }
   else if(proarray[p]<0)
   {
       p2++;
   }
   else if(proarray[p]=0)
   {
       p3++;
   }
}
propotionarray.push(p1/6 , "");
propotionarray.push(p2/6 , "");
propotionarray.push(p3/6);

// console.log(propotionarray);

return propotionarray.toString();
}

// ////////////////////////////////////////////////////////////////////////////////////

function printsquarestars(n)
{
    let string = "";
for(var r=0; r<n ; r++)
{
    for(var m=0; m<n ; m++)
    {
        string += "*";
    }  
    string += "\n";
}
// console.log(string);
return string;
}

// /////////////////////////////////////////////////////////////////////////////

function addonebyonestar(n)
{
    let string = "";
    for(var r=0; r<n ; r++)
    {
        for(var m=0; m<r+1 ; m++)
        {
            string += "*";
        }  
        string += "\n";
    }
    // console.log(string);
    return string;
}

// ////////////////////////////////////////////////////////////////////////////////////

function Hollowsquarepattern(n)
{
let string="";
for(var a=0; a<n; a++)
{

    if(a>0 && a<n-1)
    {
    for (var c=0; c<n; c++)
    {
        if(c==0 || c==n-1)
        {
        string+="*";
        }
        else{
            string+=" ";
        }
    }
    }

    else if(a==0 || a==n-1)
    {
    for (var b=0; b<n; b++)
    {
        string+="*";
    }
    }
    string+='\n';
}
// console.log(string);
return string;
}

// ///////////////////////////////////////////////////////////////////////

function rightanglepattern(n)
{
    let string = "";
    let incre=n-1;

    for(var r=0; r<n ; r++)
    {
        for(var m=0; m<n ; m++)
        {
            if(m>=incre)
            {
            string += "*";
           }
           else{
            string += " ";  
           }
        } 
        incre--;  
        string += "\n";
    }
    // console.log(string);
    return string;
}

// ///////////////////////////////////////////////////////////////////////////////////

function leftanglepattern(n)
{
    let string = "";
    for(var r=0; r<n ; r++)
    {
        for(var m=0; m<r+1 ; m++)
        {
            string += "*";
        }  
        string += "\n";
    }
    // console.log(string);
    return string;
}

// //////////////////////////////////////////////////////////////////////////////////

function downwardpattern(n)
{
    let string = "";
    var dec=n;
    for(var r=0; r<n ; r++)
    {
        for(var m=0; m<dec ; m++)
        {
            string += "*";
        }  
        dec--;
        string += "\n";
    }
    // console.log(string);
    return string;
}

// ////////////////////////////////////////////////////////////////

function Hollowtriangle(n)
{
    let string = "";
    for(var r=0; r<n ; r++)
    {
        for(var m=0; m<r+1 ; m++)
        {
            if (r<=1)
            {
            string += "*";
            }

            else if(r>1 && r<n-1)
            {
                if(m==0 || m==r)
                {
                string += "*"; 
                }
                else
                {
                string+=" ";
                }
            }
            else if(r<n)
            {
               string += "*"; 
            }
        }  
        string += "\n";
    }
    // console.log(string);
    return string;
}

// ////////////////////////////////////////////////////////////////////
////////////////////////////////// Too toughest////////////////////////////////////////

function pyramidpattern(n)
{
    let string = "";
    var dec=4;
    var inc=4;

    for (let i=0; i<n; i++) 
    {
    for(let j=0; j<9; j++) 
    {
      if(j>=dec && j<=inc)
        {
      string+="*";
        }
      else{
      string+=" ";
        } 
    }  
    string+='\n';
    dec=dec-1;
    inc=inc+1;
    }
    // console.log(string);
    return string;
}


// ///////////////////////////////////////////////////////////////////////////

function Reversedpyramid(n)
{
    let string = "";
    var dec=8;
    var inc=0;

    for (let i=0; i<n; i++) 
    {
    for(let j=0; j<9; j++) 
    {
      if(j<=dec && j>=inc)
        {
      string+="*";
        }
      else{
      string+=" ";
        } 
    }  
    string+='\n';
    dec=dec-1;
    inc=inc+1;
    }
    // console.log(string);
    return string;
}

function HollowPyramid(n)
{
    let string = "";
    var dec=4;
    var inc=4;

    var dec1=5;
    var inc1=3;

    for (let i=0; i<n; i++) 
    {
    for(let j=0; j<9; j++) 
    {
      if(j>=dec && j<=inc)
        {
            if(i!=0 && i!=n-1 && (j>=dec1 && j<=inc1))
            {
                string+=" ";
            }
            else{
                string+="*";
            }
        }
      else{
      string+=" ";
        } 
    }  
    string+='\n';
    dec=dec-1;
    inc=inc+1;
    dec1=dec1-1;
    inc1=inc1+1;
    }
    // console.log(string);
    return string;
}


// ////////////////////////////////////////////////////////////////////////////

function Dymond(n)
{
    let string = "";
    var dec=4;
    var inc=4;
    var dec1=8;
    var inc1=0;

    for (let i=0; i<n+n; i++) 
    {

    if(i<=n-1)
    {
    for(let j=0; j<9; j++) 
    {
      if(j>=dec && j<=inc)
        {
      string+="*";
        }
      else{
      string+=" ";
        } 
    }  
    string+='\n';
    dec=dec-1;
    inc=inc+1;
    }

    else
    { 
        for(let f=0; f<9; f++) 
        {
          if(f<=dec1 && f>=inc1)
            {
          string+="*";
            }
          else{
          string+=" ";
            } 
        }  
        string+='\n';
        dec1=dec1-1;
        inc1=inc1+1; 
    }
    }

    // console.log(string);
    return string;
}










// var Dynamicvalue=prompt('Enter Dynamic array value');
var Dynamicvalue=5;

    return(       
    <div>
<h1>Javascript Coding Tasks</h1><br></br>

<h2>Add two numbers</h2>{adding(2,3)}
<h2>Array sum</h2>{arraysum([1,2,3,4,5])}
<h2>Dynamic array creation</h2>{Dynamicarray(Dynamicvalue)}
<h2>Compare two values of arrays whether G , L , E </h2>{CompareArrvalue([1,2,3,4,7],[2,1,3,5,4])}
<h2>Subtract Digonal Value from L to R and then from R to L</h2>{diagonal([[11,2,4],[4,5,6],[10,8,-12]] , [[7,5,0],[1,3,6],[2,1,3]])}
<h2>Make propotion of positive value in array</h2> {makepropotion([-4, 3, -9, 0, 4, 1])}  
<h1>Check all stars patterns in console</h1> 
<h2>Print stars on square format</h2>{printsquarestars(6)}
<h2>Add stars one by one</h2>{addonebyonestar(6)}
<h2>Hollowsquarepattern</h2>{Hollowsquarepattern(5)}
<h2>Right angle pattern</h2>{rightanglepattern(7)}
<h2>Left angle pattern</h2>{leftanglepattern(7)}
<h2>Downward triangle style pattern</h2>{downwardpattern(5)}
<h2>Hollow Triangle</h2>{Hollowtriangle(7)}
<h2>pyramidpattern</h2>{pyramidpattern(5)}
<h2>Reversedpyramid</h2>{Reversedpyramid(5)}
<h2>HollowPyramid</h2>{HollowPyramid(5)}
<h2>Dymond</h2>{Dymond(5)}

    
    </div>
    )
}
export default Javascript


// //////////////////////////////////////For Diamond and Pyramid Understanding/////////////////////////////

// 9 =              4
// 9 =            3 4 5
// 9 =          2 3 4 5 6
// 9 =        1 2 3 4 5 6 7
// 9 =      0 1 2 3 4 5 6 7 8


// 9 =      0 1 2 3 4 5 6 7 8
// 9 =        1 2 3 4 5 6 7
// 9 =          2 3 4 5 6
// 9 =            3 4 5
// 9 =              4


