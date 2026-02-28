import { useState, useEffect } from 'react';

function DailyBonus({ canClaim, onClaim, bonusXP, streak }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (canClaim) {
            const timer = setTimeout(() => setShow(true), 800);
            return () => clearTimeout(timer);
        }
    }, [canClaim]);

    if (!show) return null;

    const handleClaim = () => {
        onClaim();
        setShow(false);
    };

    return (
        <div className="modal-overlay" onClick={handleClaim}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-icon">🎁</div>
                <h2 className="modal-title">Daily Bonus!</h2>
                <p className="modal-text">
                    Welcome back! You've earned <strong style={{ color: '#f59e0b' }}>+{bonusXP} XP</strong> for
                    logging in today.
                    {streak > 1 && (
                        <>
                            <br />
                            <span style={{ color: '#f59e0b' }}>🔥 {streak}-day streak! Keep it up!</span>
                        </>
                    )}
                </p>
                <button className="btn btn-primary" onClick={handleClaim} style={{ width: '100%' }}>
                    🎉 Claim Bonus
                </button>
            </div>
        </div>
    );
}

export default DailyBonus;
