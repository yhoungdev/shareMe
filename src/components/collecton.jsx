import React from 'react'
import FaAmazon from 'react-icons/fa'
import { Link } from 'react-router-dom'

import '../css/bootstrap.css'
import '../css/media.css'
const Collect=()=>{
    return (
       
            <>

                <div className="container">

                    <span>
                        <h5>arrow</h5>
                        <h5>menu</h5>
                    </span>

                    <h4 className='text-muted'>cloud collection</h4>

                    <div className="row">
                        <div className='col-4'>
                            <Link to="photo">
                                <button className='btn'>
                                    <span>icon</span>
                                    <p>images</p>
                                </button>
                            </Link>

                        </div>

                       <div className='col-4'>
                        <Link to="/music">
                        <button className='btn'>
                                
                                    <div>
                                    <span>icon</span>
                                        <p>images</p>
                                    </div>
                            
                            </button>
                         </Link>
                       </div>
                        <div className='col-4'>
                            <Link to="/pdf">
                                <button className='btn'>
                                    <span>icon</span>
                                    <p>images</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* next section */}
                    <div className="next">
                        <h6 className="text-muted mt-4">Action</h6>

                        <div className="card mt-4 mb-4">
                            <h5 className="text-center">extra</h5>
                        </div>
                        {/* overview aspect */}

                        <div className="card mt-5 ">
                            <span id="span">
                                <h6 className='text-muted'>overview</h6>
                                <h6 className="text-muted">more </h6>
                            </span>

                            {/* list items */}
                            <span>
                               <ul style={{display:'flex',justifyContent:'space-between'}}>
                                   <li>user </li>
                                   <li> code </li>
                                   <li>test </li>
                               </ul>
                            </span>
                        </div>

                    </div>

                </div>
                   
            </>
       
    )
}
export default Collect;