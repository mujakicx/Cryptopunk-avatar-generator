import React from 'react'
import * as svg from 'save-svg-as-png';

function DownloadAvatarButton() {
    const handleOnClick = () => {
        svg.saveSvgAsPng(document.getElementById("avatar-export"), "cryptopunk-avatar.png", {
            scale: 0.5,
            backgroundColor: '#648595'
        });
    }

    return <button className='download-avatar-button' onClick={handleOnClick}>Download avatar</button>;
}

export default DownloadAvatarButton
