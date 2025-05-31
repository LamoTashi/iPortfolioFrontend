import React, { useState } from 'react';
import Modal from './Modal';

function Footer() {
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
            <footer className="w-full fixed bottom-0 z-50 bg-black text-white">
                <div className="flex justify-between items-center px-8 py-3 text-sm">
                    <p>&copy; {new Date().getFullYear()} Tashi Lamo. All rights reserved.</p>

                    <div className="flex gap-6">
                        <button
                            onClick={() => setShowPrivacy(true)}
                            className="hover:text-gray-300 transition duration-300"
                        >
                            Privacy
                        </button>
                        <button
                            onClick={() => setShowTerms(true)}
                            className="hover:text-gray-300 transition duration-300"
                        >
                            Terms
                        </button>
                    </div>
                </div>
            </footer>

            {/* Privacy Modal */}
            <Modal show={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
                <p>
                    We do not collect personal data from visitors. Any contact details submitted through the contact form
                    are used solely to respond to your query and are not shared with third parties.
                </p>
                <p className="mt-4">
                    If any third-party services are added in the future, this policy will be updated accordingly.
                </p>
            </Modal>

            {/* Terms Modal */}
            <Modal show={showTerms} onClose={() => setShowTerms(false)} title="Terms & Conditions">
                <p>
                    The content, images, and code on this website are owned by Tashi Lamo and may not be reproduced without permission.
                </p>
                <p className="mt-4">
                    This site is intended for showcasing personal projects and skills only.
                </p>
            </Modal>
        </>
    );
}

export default Footer;