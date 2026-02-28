import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Achievements from './components/Achievements';
import DailyBonus from './components/DailyBonus';
import InstallPrompt from './components/InstallPrompt';
import ConfettiEffect from './components/ConfettiEffect';
import useProgress from './hooks/useProgress';
import lessons from './data/lessons';
import './index.css';

function App() {
  const {
    progress,
    getLevel,
    getXpForNextLevel,
    completeLesson,
    checkDailyLogin,
    claimDailyBonus,
    canClaimDailyBonus,
    DAILY_BONUS_XP,
  } = useProgress();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [showAchievements, setShowAchievements] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  // Check daily login on mount
  useEffect(() => {
    checkDailyLogin();
  }, []);

  const level = getLevel();
  const xpForNext = getXpForNextLevel();

  const filteredLessons = useMemo(() => {
    return lessons.filter(lesson => {
      const matchesSearch =
        lesson.title.toLowerCase().includes(search.toLowerCase()) ||
        lesson.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || lesson.difficulty === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const handleComplete = (lessonId, xpReward) => {
    if (progress.completedLessons.includes(lessonId)) return;
    completeLesson(lessonId, xpReward);
    setConfettiTrigger(t => t + 1);
  };

  return (
    <div className="app">
      <Header
        xp={progress.xp}
        level={level}
        xpForNext={xpForNext}
        streak={progress.streak}
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
        completedCount={progress.completedLessons.length}
        totalCount={lessons.length}
        onShowAchievements={() => setShowAchievements(true)}
      />

      <Feed
        lessons={filteredLessons}
        completedLessons={progress.completedLessons}
        currentLevel={level}
        onComplete={handleComplete}
      />

      {showAchievements && (
        <Achievements
          unlockedAchievements={progress.unlockedAchievements}
          onClose={() => setShowAchievements(false)}
        />
      )}

      <DailyBonus
        canClaim={canClaimDailyBonus}
        onClaim={claimDailyBonus}
        bonusXP={DAILY_BONUS_XP}
        streak={progress.streak}
      />

      <InstallPrompt />
      <ConfettiEffect trigger={confettiTrigger} />
    </div>
  );
}

export default App;
