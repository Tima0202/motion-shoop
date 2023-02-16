import React, {useState} from 'react';

const ShoesPage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div>
            <button
                style={{
                    backgroundColor: isActive ? 'salmon' : '',
                    color: isActive ? 'white' : '',
                }}
                onClick={handleClick}
            >
                Click
            </button>
        </div>
    );
};

export default ShoesPage;