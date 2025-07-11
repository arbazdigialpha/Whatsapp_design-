import React from 'react'

type BgOverlayProps = {
    onClick : () => void,
    isVisible : boolean
}

const BgOverlay = ( { onClick , isVisible } : BgOverlayProps ) => {
    return (
        <div className={`bg-overlay ${isVisible ? 'show-overlay' : 'hide-overlay'}`} onClick={onClick}></div>
    )
}

export default BgOverlay