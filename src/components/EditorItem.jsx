import React from "react";

function EditorItem({ facialAttribute, variants, currentColor, canChangeColor, onVariantChange, onColorChange }) {
    const listVariants = variants.map((variant, index) => {
        return (
            <option key={index} value={variant}>
                {variant}
            </option>
        );
    });

    const handleVariantChange = (event) => {
        onVariantChange(facialAttribute, event.target.value)
    }

    const handleColorChange = (event) => {
        onColorChange(facialAttribute, event.target.value)
    }

    return (
        <tr>
            <td>{facialAttribute}</td>
            <td>
                {variants.length > 2 ? <select onChange={handleVariantChange}>{listVariants}</select> : '❌'}
            </td>
            <td>
                {canChangeColor ? <div className="current-color-box" style={{ backgroundColor: currentColor }}></div> : '❌'}
            </td>
            <td>
                {canChangeColor ? <input className="new-color-input" type="text" placeholder="#FFF" onChange={handleColorChange}/> : '❌'}
            </td>
        </tr>
    );
}

export default EditorItem;
