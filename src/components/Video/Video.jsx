import './Video.css'
import video from './../../assets/images/video.mp4'
export default function Video() {
    return (
        <>
            <div className='video container'>
                <video controls src={video}></video>
            </div>
        </>
    )
}
