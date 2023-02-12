import React from 'react';

const Modal = ({open}) => {
    if (!open) return null
    return (
        <div className='modal'>
            Пожалуйста, выберите размер!
        </div>
    );
};

export default Modal;