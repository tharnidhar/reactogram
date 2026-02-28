import { useState, useEffect, useCallback } from 'react';
import achievements from '../data/achievements';

const STORAGE_KEY = 'reactogram_progress';
const DAILY_BONUS_XP = 15;

function getToday() {
    return new Date().toISOString().slice(0, 10);
}

function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch { }
    return null;
}

const defaultProgress = {
    xp: 0,
    completedLessons: [],
    streak: 0,
    lastLoginDate: null,
    unlockedAchievements: [],
    sessionCompleted: 0,
    dailyBonusClaimed: null,
};

export default function useProgress() {
    const [progress, setProgress] = useState(() => loadProgress() || { ...defaultProgress });

    // Persist to localStorage whenever progress changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }, [progress]);

    const getLevel = useCallback(() => Math.floor(Math.sqrt(progress.xp / 10)), [progress.xp]);

    const getXpForNextLevel = useCallback(() => {
        const currentLevel = Math.floor(Math.sqrt(progress.xp / 10));
        return ((currentLevel + 1) ** 2) * 10;
    }, [progress.xp]);

    const completeLesson = useCallback((lessonId, xpReward) => {
        setProgress(prev => {
            if (prev.completedLessons.includes(lessonId)) return prev;
            const updated = {
                ...prev,
                xp: prev.xp + xpReward,
                completedLessons: [...prev.completedLessons, lessonId],
                sessionCompleted: prev.sessionCompleted + 1,
            };
            // Check achievements
            const newAchievements = achievements
                .filter(a => !updated.unlockedAchievements.includes(a.id) && a.condition(updated))
                .map(a => a.id);
            if (newAchievements.length > 0) {
                updated.unlockedAchievements = [...updated.unlockedAchievements, ...newAchievements];
            }
            return updated;
        });
    }, []);

    const checkDailyLogin = useCallback(() => {
        const today = getToday();
        setProgress(prev => {
            if (prev.lastLoginDate === today) return prev;
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().slice(0, 10);

            const newStreak = prev.lastLoginDate === yesterdayStr ? prev.streak + 1 : 1;
            const updated = {
                ...prev,
                lastLoginDate: today,
                streak: newStreak,
                sessionCompleted: 0,
            };
            // Check streak achievements
            const newAchievements = achievements
                .filter(a => !updated.unlockedAchievements.includes(a.id) && a.condition(updated))
                .map(a => a.id);
            if (newAchievements.length > 0) {
                updated.unlockedAchievements = [...updated.unlockedAchievements, ...newAchievements];
            }
            return updated;
        });
    }, []);

    const claimDailyBonus = useCallback(() => {
        const today = getToday();
        setProgress(prev => {
            if (prev.dailyBonusClaimed === today) return prev;
            return {
                ...prev,
                xp: prev.xp + DAILY_BONUS_XP,
                dailyBonusClaimed: today,
            };
        });
    }, []);

    const canClaimDailyBonus = progress.dailyBonusClaimed !== getToday();

    const resetProgress = useCallback(() => {
        setProgress({ ...defaultProgress });
    }, []);

    return {
        progress,
        getLevel,
        getXpForNextLevel,
        completeLesson,
        checkDailyLogin,
        claimDailyBonus,
        canClaimDailyBonus,
        resetProgress,
        DAILY_BONUS_XP,
    };
}
