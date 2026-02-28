import { useState, useEffect } from 'react';

function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    if (!deferredPrompt || dismissed) return null;

    const handleInstall = async () => {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        if (result.outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    };

    return (
        <div className="install-banner">
            <div className="install-banner-text">
                <strong>📲 Install ReactOgram</strong>
                <br />
                Add to home screen for the best experience
            </div>
            <div className="install-banner-actions">
                <button className="btn btn-primary" onClick={handleInstall} style={{ padding: '8px 14px', fontSize: 13 }}>
                    Install
                </button>
                <button className="btn-dismiss" onClick={() => setDismissed(true)}>
                    ✕
                </button>
            </div>
        </div>
    );
}

export default InstallPrompt;
