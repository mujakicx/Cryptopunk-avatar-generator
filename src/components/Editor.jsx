import React, { useState } from "react";
import EditorItem from "./EditorItem";

function Editor() {
    const [currentHairStyleColor, setCurrentHairStyleColor] = useState('#135921');
    const [currentFacialHairColor, setCurrentFacialHairColor] = useState('#A56D33');
    const [currentSkinColor, setCurrentSkinColor] = useState('#83DBD9');
    const [currentEyesColor, setCurrentEyesColor] = useState('#FD90BE');
    const [currentEyebrowColor, setCurrentEyebrowColor] = useState('#703E21');
    const [currentNoseColor, setCurrentNoseColor] = useState('#703E21');
    const [currentMouthColor, setCurrentMouthColor] = useState('#E4571C');
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState('#648595');

    const hairStyleVariants = ["Bald", "Shaved head", "Mohawk", "Messy", "Wild", "Bob", "Half shaved", "Pigtails", "Straight", "Stringy"];
    const headwearVariants = ["None", "Cap", "Hat", "Knitted cap", "Headband", "Bandana", "Do rag", "Beanie"];
    const facialHairVariants = ["None", "Normal beard", "Big beard", "Front beard", "Goat", "Chinstrap", "Mustache"];
    const eyesVariants = ["Regular", "Clown eyes"];
    const eyewearVariants = ["None", "Regular shades", "VR headset", "3D glasses", "Eye patch", "Eye mask"];
    const noseVariants = ["Small", "Wide", "Nostrils", "Clown"];
    const mouthVariants = ["Regular", "Wide", "Medical mask", "Cigarette", "Pipe", "Vape", "Buck teeth", "Smile", "Frown"];

    const onVariantChange = (facialAttribute, variant) => {
        const facialAttributeFormatted = facialAttribute.split(' ').join('-').toLowerCase();
        const variantFormatted = variant.split(' ').join('-').toLowerCase();
        const elements = Array.from(document.getElementsByClassName(facialAttributeFormatted));
        const element = document.getElementsByClassName(`${facialAttributeFormatted} ${facialAttributeFormatted}-${variantFormatted}`)[0];

        if (variantFormatted.includes('none')) {
            elements.map(e => e.style.display = 'none');
            return;
        }

        elements.filter(e => !e.className.baseVal.includes(variantFormatted)).map(e => e.style.display = 'none');
        element.style.display = 'inline';
    };

    const onColorChange = (facialAttribute, color) => {
        const facialAttributeFormatted = facialAttribute.split(' ').join('-').toLowerCase();
        const elements = Array.from(document.getElementsByClassName(facialAttributeFormatted));

        switch (facialAttributeFormatted) {
            case 'hair-style':
                setCurrentHairStyleColor(color);
                break;
            case 'facial-hair-style':
                setCurrentFacialHairColor(color);
                break;
            case 'skin':
                setCurrentSkinColor(color);
                break;
            case 'eyes':
                setCurrentEyesColor(color);
                break;
            case 'eyebrow':
                setCurrentEyebrowColor(color);
                break;
            case 'nose':
                setCurrentNoseColor(color);
                break;
            case 'mouth':
                setCurrentMouthColor(color);
                break;
            case 'background':
                setCurrentBackgroundColor(color);
                break;

            default:
                break;
        }

        for (let i = 0; i < elements.length; i++) {
            for (let j = 0; j < elements[i].children.length; j++) {
                const el = Array.from(elements[i].children);

                el.forEach(e => {
                    e.style.fill = color;
                    e.style.backgroundColor = color;
                });
            }
        }
    };

    return (
        <div className="editor">
            <table>
                <thead>
                    <tr>
                        <th>Facial attribute</th>
                        <th>Variant</th>
                        <th>Current color</th>
                        <th>New color</th>
                    </tr>
                </thead>
                <tbody>
                    <EditorItem
                        facialAttribute={"Hair style"}
                        variants={hairStyleVariants}
                        currentColor={currentHairStyleColor}
                        canChangeColor={true}
                        onVariantChange={onVariantChange}
                        onColorChange={onColorChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Headwear"}
                        variants={headwearVariants}
                        canChangeColor={false}
                        onVariantChange={onVariantChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Facial hair"}
                        variants={facialHairVariants}
                        currentColor={currentFacialHairColor}
                        canChangeColor={true}
                        onVariantChange={onVariantChange}
                        onColorChange={onColorChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Skin"}
                        variants={[]}
                        currentColor={currentSkinColor}
                        canChangeColor={true}
                        onColorChange={onColorChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Eyes"}
                        variants={eyesVariants}
                        currentColor={currentEyesColor}
                        canChangeColor={true}
                        onVariantChange={onVariantChange}
                        onColorChange={onColorChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Eyewear"}
                        variants={eyewearVariants}
                        onVariantChange={onVariantChange}
                        canChangeColor={false}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Eyebrow"}
                        variants={[]}
                        currentColor={currentEyebrowColor}
                        canChangeColor={true}
                        onColorChange={onColorChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Nose"}
                        variants={noseVariants}
                        currentColor={currentNoseColor}
                        canChangeColor={true}
                        onVariantChange={onVariantChange}
                        onColorChange={onColorChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Mouth"}
                        variants={mouthVariants}
                        currentColor={currentMouthColor}
                        canChangeColor={true}
                        onVariantChange={onVariantChange}
                        onColorChange={onColorChange}
                    ></EditorItem>

                    <EditorItem
                        facialAttribute={"Background"}
                        variants={[]}
                        currentColor={currentBackgroundColor}
                        canChangeColor={true}
                        onVariantChange={onVariantChange}
                        onColorChange={onColorChange}
                    ></EditorItem>
                </tbody>
            </table>
        </div>
    );
}

export default Editor;
