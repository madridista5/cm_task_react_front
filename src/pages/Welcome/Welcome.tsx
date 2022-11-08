import React, {useEffect, useRef} from "react";

import './Welcome.css';

export const Welcome = () => {
    const vidRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        vidRef.current?.play();
    }, []);

    return(
        <div className="app__welcome">
            <video
                src={require('../../assets/video.mp4')}
                ref={vidRef}
                loop
                controls={false}
                muted
                className="app__welcome-video"
            />
        </div>
    );
}