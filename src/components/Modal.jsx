import React from 'react';

export default function Modal({ show, onClose, title, children }) {
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[999]"
            onClick={onClose}
        >
            <div
                className="bg-white text-black rounded-lg shadow-lg p-6 max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
            >
                <h2 className="text-xl font-semibold mb-4">{title}</h2>

                <div className="max-h-96 overflow-y-auto text-sm leading-relaxed">
                    {children}
                </div>

                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-xl font-bold"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}