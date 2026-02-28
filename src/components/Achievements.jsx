import achievements from '../data/achievements';

function Achievements({ unlockedAchievements, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: 420 }}>
                <div className="modal-icon">🏅</div>
                <h2 className="modal-title">Achievements</h2>
                <p className="modal-text">
                    {unlockedAchievements.length} / {achievements.length} unlocked
                </p>

                <div className="achievements-grid">
                    {achievements.map(a => {
                        const unlocked = unlockedAchievements.includes(a.id);
                        return (
                            <div
                                key={a.id}
                                className={`achievement-card ${unlocked ? 'unlocked' : 'locked'}`}
                            >
                                <div className="achievement-icon">{a.icon}</div>
                                <div className="achievement-title">{a.title}</div>
                                <div className="achievement-desc">{a.description}</div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="btn btn-primary"
                    onClick={onClose}
                    style={{ marginTop: 20, width: '100%' }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Achievements;
