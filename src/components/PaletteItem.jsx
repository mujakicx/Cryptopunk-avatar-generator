import React from 'react'

function PaletteItem({ color }) {
    return (
        <div className='palette-item' style={{ backgroundColor: color }} title='Copy hex code' onClick={() => {
            navigator.clipboard.writeText(color)
        }}></div>
    )
}

export default PaletteItem
