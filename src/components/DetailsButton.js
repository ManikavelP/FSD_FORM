import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetailsButton({ child, to }) {
    const [focus, setFocus] = useState(false);

    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => navigate(to)}
                style={focus ? buttonStyle : nonButtonStyle}
                onMouseEnter={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
            >
                {child}
            </button>
        </div>
    );
}

const buttonStyle = {
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    color: 'white',
    borderRadius: '8px',
    padding: '10px 20px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    outline: 'none',
};

const nonButtonStyle = {
    background: 'linear-gradient(135deg, #9c88ff 0%, #515ada 100%)',
    color: 'white',
    borderRadius: '8px',
    padding: '10px 20px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    outline: 'none',
};

export default DetailsButton;
