import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';

const theme = {
    plain: {
        color: '#f0f0f5',
        backgroundColor: '#1a1a35',
    },
    styles: [
        { types: ['comment', 'prolog'], style: { color: '#6b7280' } },
        { types: ['keyword', 'tag', 'deleted'], style: { color: '#c084fc' } },
        { types: ['builtin', 'changed', 'attr-name'], style: { color: '#7c3aed' } },
        { types: ['number', 'inserted'], style: { color: '#f59e0b' } },
        { types: ['constant'], style: { color: '#06b6d4' } },
        { types: ['string', 'char', 'attr-value'], style: { color: '#10b981' } },
        { types: ['variable'], style: { color: '#f0f0f5' } },
        { types: ['operator'], style: { color: '#ec4899' } },
        { types: ['function', 'class-name'], style: { color: '#06b6d4' } },
        { types: ['punctuation'], style: { color: '#9ca3af' } },
    ],
};

function CodeEditor({ code }) {
    return (
        <div className="editor-section">
            <div className="editor-label">
                <span>🧪</span> Try It — Edit the code below
            </div>
            <LiveProvider code={code} noInline theme={theme}>
                <div className="live-editor-wrapper">
                    <LiveEditor />
                </div>
                <div className="live-preview-wrapper">
                    <div className="live-preview-label">Output</div>
                    <LivePreview />
                </div>
                <LiveError className="live-error-wrapper" />
            </LiveProvider>
        </div>
    );
}

export default CodeEditor;
