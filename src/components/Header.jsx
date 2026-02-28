function Header({
    xp, level, xpForNext, streak,
    search, onSearchChange,
    filter, onFilterChange,
    completedCount, totalCount,
    onShowAchievements,
}) {
    const prevLevelXp = level * level * 10;
    const progressPercent = xpForNext > prevLevelXp
        ? Math.min(((xp - prevLevelXp) / (xpForNext - prevLevelXp)) * 100, 100)
        : 100;

    const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-logo">
                    <span className="logo-icon">⚛️</span>
                    <h1>ReactOgram</h1>
                </div>
                <div className="header-stats">
                    <div className="stat-badge" onClick={onShowAchievements} title="View achievements">
                        <span className="stat-icon">🏅</span>
                        <span className="stat-value">{completedCount}/{totalCount}</span>
                    </div>
                    <div className="stat-badge streak-badge" title="Login streak">
                        <span className="stat-icon">🔥</span>
                        <span className="stat-value">{streak}</span>
                    </div>
                </div>
            </div>

            <div className="progress-section">
                <div className="progress-info">
                    <span className="level-label">⭐ Level {level}</span>
                    <span>{xp} / {xpForNext} XP</span>
                </div>
                <div className="progress-bar-track">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            <div className="search-container">
                <span className="search-icon">🔍</span>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search lessons..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="filter-pills">
                {filters.map(f => (
                    <button
                        key={f}
                        className={`filter-pill${filter === f ? ' active' : ''}`}
                        onClick={() => onFilterChange(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </header>
    );
}

export default Header;
