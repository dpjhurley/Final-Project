import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SizeGuideModal = ({
    adult,
    hiddenSizeGuide,
    handleHiddenSizeGuide
}) => {
    return (  
        <CSSTransition
            in={!hiddenSizeGuide}
            timeout={400}
            classNames="default-transition"
            unmountOnExit
            onEnter={()=>handleHiddenSizeGuide}
            onExited={()=>handleHiddenSizeGuide}
            appear
        >
            <div className="hiddenOverlay" onClick={handleHiddenSizeGuide}>
                <img className="sizeGuideModal" src={`/images/size-guide-${adult}.PNG`} alt={adult}/>
            </div>
        </CSSTransition>
        
    );
}
 
export default SizeGuideModal;