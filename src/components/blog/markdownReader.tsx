import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MarkdownRendererProps {
    content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="markdown-content">
            <Markdown
                options={{
                    overrides: {
                        // Code blocks with syntax highlighting
                        code: ({ className, children }) => {
                            if (className) {
                                const language = className.replace('lang-', '');
                                return (
                                    <SyntaxHighlighter
                                        language={language}
                                        style={tomorrow}
                                        showLineNumbers
                                        wrapLines
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                );
                            }
                            // Inline code
                            return <code className="inline-code">{children}</code>;
                        },

                        // Images with responsive styling
                        img: ({ src, alt, title }) => (
                            <figure className="markdown-image">
                                <img
                                    src={src}
                                    alt={alt}
                                    title={title}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        borderRadius: '4px',
                                        margin: '16px 0'
                                    }}
                                />
                                {title && <figcaption>{title}</figcaption>}
                            </figure>
                        ),

                        // Links with security attributes
                        a: ({ href, children }) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="markdown-link"
                            >
                                {children}
                            </a>
                        ),

                        // Optional: Add custom styling for other elements
                        h1: ({ children }) => <h1 className="markdown-h1">{children}</h1>,
                        h2: ({ children }) => <h2 className="markdown-h2">{children}</h2>,
                        blockquote: ({ children }) => (
                            <blockquote className="markdown-blockquote">
                                {children}
                            </blockquote>
                        ),
                    },
                }}
            >
                {content}
            </Markdown>
        </div>
    );
};