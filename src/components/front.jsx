import React from 'react'
import Collect from './collecton'

import { BrowserRouter as Router , Route, Link, Redirect , Switch   } from 'react-router-dom'
const Front=()=>{
    return(  
        
        <>
            <section>

                <div className="contain">

                    <div className='photo'>
                        <div>
                            <img src="" alt="iamge now "/>
                        </div>
                    </div>
                    <div className='info'>
                        <h4>backmeup </h4>
                        <span>
                            <p>
                                save and backup your files to the cloud in the speed of light 
                            
                            </p>
                        </span>
                        <button>
                           <Link to="collection"> Get started</Link>
                        </button>
                       
                    </div>

                </div>

            </section>
        </>
    )
}
export default Front;