import {useState} from 'react'
import "./CustomButtons.css"

const CustomButton = (props) => {

    const [buttonClassLike, setButtonClassLike] = useState('inactive');

        function handleClick(){
            if(buttonClassLike === 'inactive'){
                setButtonClassLike('active');
            }
            // else if(buttonClassDislike === 'inactive'){
            //     setButtonClassDislike('active');
            // }
            else{
                setButtonClassLike('inactive');
                // setButtonClassDislike('inactive');
            }
        }
            return(
                <div>
                    <button className={buttonClassLike} onClick={handleClick}>{props.message}</button>
                    {/* <button className={buttonClassDislike} onClick={handleClick}>{props.message}</button> */}
                </div>
            )
    }



    // const DislikeButton = (props) => {

    //     const [buttonClass, setButtonClass] = useState('inactive');

    //     function handleClick(){
    //         if(buttonClass === 'inactive'){
    //             setButtonClass('active');
    //         }
    //         else{
    //             setButtonClass('inactive');
    //         }
    //     }
    //         return(
    //             <div>
    //                 <button className={buttonClass} onClick={handleClick}>{props.message}</button>
    //             </div>
    //         )
    // }

export default CustomButton