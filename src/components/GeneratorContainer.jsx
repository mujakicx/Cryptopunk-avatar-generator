import React from 'react';
import AvatarPreview from './AvatarPreview';
import Editor from './Editor';

function GeneratorContainer() {
    return (
        <div className='generator-container'>
            <AvatarPreview></AvatarPreview>
            <Editor></Editor>
        </div>
    );
}

export default GeneratorContainer;
