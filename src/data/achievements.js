const achievements = [
    { id: 'first_lesson', title: 'First Steps', description: 'Complete your first lesson', icon: '🐣', condition: (p) => p.completedLessons.length >= 1 },
    { id: 'five_lessons', title: 'Getting Hooked', description: 'Complete 5 lessons', icon: '🎣', condition: (p) => p.completedLessons.length >= 5 },
    { id: 'ten_lessons', title: 'Double Digits', description: 'Complete 10 lessons', icon: '🔟', condition: (p) => p.completedLessons.length >= 10 },
    { id: 'all_lessons', title: 'React Master', description: 'Complete all 46 lessons', icon: '👑', condition: (p) => p.completedLessons.length >= 46 },
    { id: 'level_2', title: 'Rising Star', description: 'Reach Level 2', icon: '⭐', condition: (p) => Math.floor(Math.sqrt(p.xp / 10)) >= 2 },
    { id: 'level_5', title: 'Pro Coder', description: 'Reach Level 5', icon: '💎', condition: (p) => Math.floor(Math.sqrt(p.xp / 10)) >= 5 },
    { id: 'level_10', title: 'Legend', description: 'Reach Level 10', icon: '🏆', condition: (p) => Math.floor(Math.sqrt(p.xp / 10)) >= 10 },
    { id: 'streak_3', title: 'On Fire', description: '3-day login streak', icon: '🔥', condition: (p) => p.streak >= 3 },
    { id: 'streak_7', title: 'Week Warrior', description: '7-day login streak', icon: '⚔️', condition: (p) => p.streak >= 7 },
    { id: 'xp_100', title: 'XP Hunter', description: 'Earn 100 XP', icon: '💰', condition: (p) => p.xp >= 100 },
    { id: 'xp_500', title: 'XP Machine', description: 'Earn 500 XP', icon: '🤖', condition: (p) => p.xp >= 500 },
    { id: 'speed_demon', title: 'Speed Demon', description: 'Complete 3 lessons in one session', icon: '⚡', condition: (p) => p.sessionCompleted >= 3 },
];

export default achievements;
