import React from "react";
import DownloadAvatarButton from "./DownloadAvatarButton";
import Avatar from "./Avatar";
import Palette from "./Palette";

function AvatarPreview() {
    return (
        <div className="avatar-preview">
            <div>
                <Avatar></Avatar>
                <DownloadAvatarButton></DownloadAvatarButton>
            </div>
            <h4>Suggested palette:</h4>
            <Palette></Palette>
            <small>Copy hex code by clicking on color.</small>
        </div>);
}

export default AvatarPreview;
