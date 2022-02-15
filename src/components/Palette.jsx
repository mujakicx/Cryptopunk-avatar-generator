import React from 'react';
import PaletteItem from './PaletteItem';

function Palette() {
    return (
        <div className='palette'>
            <PaletteItem color={'#C68642'}></PaletteItem>
            <PaletteItem color={'#E0AC69'}></PaletteItem>
            <PaletteItem color={'#F1C27D'}></PaletteItem>
            <PaletteItem color={'#FFDBAC'}></PaletteItem>
            <PaletteItem color={'#142F43'}></PaletteItem>
            <PaletteItem color={'#6E3BC6'}></PaletteItem>
            <PaletteItem color={'#4D189D'}></PaletteItem>
            <PaletteItem color={'#E8813A'}></PaletteItem>
            <PaletteItem color={'#F1D448'}></PaletteItem>
            <PaletteItem color={'#142F43'}></PaletteItem>
            <PaletteItem color={'#FFAB4C'}></PaletteItem>
            <PaletteItem color={'#FF5F7E'}></PaletteItem>
            <PaletteItem color={'#B000B9'}></PaletteItem>
            <PaletteItem color={'#000000'}></PaletteItem>
        </div>
    );
}

export default Palette;