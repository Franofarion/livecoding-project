import React from 'react';

export default function Todo({ label, done, functionOnCheck }) {
    return (
        <p>
            <input
                type="checkbox"
                checked={done}
                onChange={() => functionOnCheck(label)}
            />
            <span>{label}</span>
        </p>
    );
}
