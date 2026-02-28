import { useState, useEffect, useRef, useCallback } from 'react';
import LessonCard from './LessonCard';

const BATCH_SIZE = 6;

function Feed({ lessons, completedLessons, currentLevel, onComplete }) {
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
    const [loading, setLoading] = useState(false);
    const sentinelRef = useRef(null);

    // Reset visible count when lessons list changes (search/filter)
    useEffect(() => {
        setVisibleCount(BATCH_SIZE);
    }, [lessons]);

    const loadMore = useCallback(() => {
        if (visibleCount >= lessons.length) return;
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + BATCH_SIZE, lessons.length));
            setLoading(false);
        }, 400);
    }, [visibleCount, lessons.length]);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    loadMore();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [loadMore, loading]);

    const visibleLessons = lessons.slice(0, visibleCount);

    if (lessons.length === 0) {
        return (
            <div className="feed-empty">
                <div className="empty-icon">🔎</div>
                <p>No lessons found. Try a different search or filter.</p>
            </div>
        );
    }

    return (
        <div className="feed">
            {visibleLessons.map((lesson, idx) => (
                <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    isCompleted={completedLessons.includes(lesson.id)}
                    isLocked={lesson.levelRequired > currentLevel}
                    onComplete={onComplete}
                    style={{ animationDelay: `${(idx % BATCH_SIZE) * 60}ms` }}
                />
            ))}

            {visibleCount < lessons.length && (
                <>
                    {loading && (
                        <div className="loading-more">
                            <div className="spinner" />
                        </div>
                    )}
                    <div ref={sentinelRef} style={{ height: 1 }} />
                </>
            )}

            {visibleCount >= lessons.length && lessons.length > 0 && (
                <div className="feed-end">🎉 You've reached the end! Keep learning!</div>
            )}
        </div>
    );
}

export default Feed;
