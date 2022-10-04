import React from 'react'

function ConditionalRend() {
    const age = 18;
    // if(age>=18){
    //     return <h3>you are eligible to vote</h3>
    // }else{
    //     return <h3>you are not eligible to vote</h3>
    // }

        // const getthedata = (data)=>{
        //     switch(data){
        //         case 'logedin':
        //             return "welcome"
        //             break;
        //         case 'logout':
        //         return 'thankyou'

        //     }
        // }

    return(
        <div>
            {age>=18 ? 
            (<h3>you are eligible to vote</h3>)
            :(<h3>you are not eligible </h3>)}
        </div>
    )

//   return (
//     <div>
//         <h2 className="text-center">Conditional Rendering</h2>
//         {/* <p>{[1,2,3,4,5]}</p> */}
//     </div>
//   )
}

export default ConditionalRend