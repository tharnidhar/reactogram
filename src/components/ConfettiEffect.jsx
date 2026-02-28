import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function ConfettiEffect({ trigger }) {
    useEffect(() => {
        if (trigger === 0) return;

        // Fire burst from multiple positions
        const fire = (x, angle) => {
            confetti({
                particleCount: 80,
                angle,
                spread: 60,
                origin: { x, y: 0.7 },
                colors: ['#7c3aed', '#06b6d4', '#f59e0b', '#10b981', '#ec4899'],
                disableForReducedMotion: true,
            });
        };

        fire(0.25, 60);
        fire(0.75, 120);

        // Secondary delayed burst
        setTimeout(() => {
            confetti({
                particleCount: 50,
                spread: 100,
                origin: { x: 0.5, y: 0.5 },
                colors: ['#7c3aed', '#06b6d4', '#f59e0b'],
                disableForReducedMotion: true,
            });
        }, 250);
    }, [trigger]);

    return null;
}

export default ConfettiEffect;
