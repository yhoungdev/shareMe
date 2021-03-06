import React, { useState } from 'react';
import '../css/bootstrap.css'
const Music=()=>{
    const  style={
        display:"none",
        color:'red'
    }
    const label={
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
        cursor:'pointer'
    }

    //declear states 
    const [upload , setUpload ]=useState('')
    const [err , setErr]=useState('')
        const form=e => e.preventDefault();
        const uploadSong= e => {
            let obj=e.target;
            let file=e.target.files[0];
            let name=file.name;
            
            if(obj !== null ) {
                let matchMp3=new RegExp(/.\mp3/);
                 if (name.match(matchMp3)) {
                   setUpload(`name : ${name}`)
                 } else {
                     setErr('it must be an MP3 format ')
                 }
            } else {
                console.log('empty')        
            }
        }
    return(
        <>
            <div className="container">

                <div className="parent">
                    <h3 className="text-center text-muted">
                        Upload your musics here
                    </h3>
                        <form action="" onSubmit={form} >
                            <label htmlFor="music" style={label}>upload song</label>
                            <input type="file" name="upload " id="music" style={style} onChange={uploadSong}/>
                                
                                <h6 className="text-muted"> {upload}</h6>
                                <h6>{err}</h6>
                                {upload === '' ? <p>share your music</p>:<button className="btn btn-primary">upload</button>}
                        </form>

                </div>

            </div>
        </>
    )
}
export default Music;