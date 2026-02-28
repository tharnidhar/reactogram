import { useState } from 'react';
import CodeEditor from './CodeEditor';

function LessonCard({ lesson, isCompleted, isLocked, onComplete, style }) {
    const [expanded, setExpanded] = useState(false);

    if (isLocked) {
        return (
            <div className="lesson-card locked" style={style}>
                <div className="card-header">
                    <div className="card-meta">
                        <span className={`difficulty-tag ${lesson.difficulty}`}>{lesson.difficulty}</span>
                        <span className="xp-tag">+{lesson.xpReward} XP</span>
                    </div>
                    <h3 className="card-title">🔒 {lesson.title}</h3>
                    <p className="card-description">{lesson.shortDescription}</p>
                    <div className="locked-overlay">
                        <div className="lock-icon">🔐</div>
                        <p>Reach Level {lesson.levelRequired} to unlock</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`lesson-card${isCompleted ? ' completed' : ''}`} style={style}>
            <div className="card-header" onClick={() => setExpanded(!expanded)}>
                <div className="card-meta">
                    <span className={`difficulty-tag ${lesson.difficulty}`}>{lesson.difficulty}</span>
                    <span className="xp-tag">+{lesson.xpReward} XP</span>
                </div>
                <h3 className="card-title">
                    {isCompleted && <span className="completed-check">✅</span>}
                    {lesson.title}
                </h3>
                <p className="card-description">{lesson.shortDescription}</p>

                {!expanded && (
                    <>
                        <div className="code-preview">
                            <span className="code-preview-label">Preview</span>
                            <pre>{lesson.exampleCode.slice(0, 120)}...</pre>
                        </div>
                        <div className="card-expand-hint">
                            {expanded ? '▲ Collapse' : '▼ Tap to expand & try it'}
                        </div>
                    </>
                )}
            </div>

            {expanded && (
                <div className="card-body">
                    <div className="card-explanation">{lesson.fullExplanation}</div>

                    <CodeEditor code={lesson.exampleCode} />

                    <div className="card-actions">
                        {isCompleted ? (
                            <button className="btn btn-completed">✅ Completed</button>
                        ) : (
                            <button
                                className="btn btn-success"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onComplete(lesson.id, lesson.xpReward);
                                }}
                            >
                                🎯 Mark Complete
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default LessonCard;
