import Link from "next/link";
import type { CSSProperties } from "react";

const MAX_BLOCKS = 10;

const hoverColors = [
    { background: "#ff2fb3", foreground: "#050505" },
    { background: "#ff7a00", foreground: "#050505" },
    { background: "#00d1ff", foreground: "#050505" },
    { background: "#d7ff00", foreground: "#050505" },
    { background: "#7b2cff", foreground: "#ffffff" },
    { background: "#00f5a0", foreground: "#050505" },
    { background: "#ffe600", foreground: "#050505" },
    { background: "#ff4d2e", foreground: "#050505" },
    { background: "#214cff", foreground: "#ffffff" },
    { background: "#f04cff", foreground: "#050505" },
] as const;

const blocks = [
    {
        title: "jawade",
        label: "profile",
        note: "arpeet",
        href: "#profile",
    },
    {
        title: "github",
        label: "code",
        note: "repos",
        href: "#github",
    },
    {
        title: "linkedin",
        label: "work",
        note: "cv",
        href: "#linkedin",
    },
    {
        title: "twitter",
        label: "notes",
        note: "feed",
        href: "#twitter",
    },
    {
        title: "blogs",
        label: "write",
        note: "posts",
        href: "#blogs",
    },
    {
        title: "gear",
        label: "setup",
        note: "tools",
        href: "#gear",
    },
    {
        title: "stack",
        label: "uses",
        note: "dev",
        href: "#stack",
    },
    {
        title: "work",
        label: "ship",
        note: "apps",
        href: "#work",
    },
    {
        title: "email",
        label: "reach",
        note: "hello",
        href: "#email",
    },
    {
        title: "now",
        label: "status",
        note: "2026",
        href: "#now",
    },
] satisfies {
    title: string;
    label: string;
    note: string;
    href: string;
}[];

type TileStyle = CSSProperties & {
    "--hover-bg": string;
    "--hover-fg": string;
};

export default function Home() {
    const visibleBlocks = blocks.slice(0, MAX_BLOCKS);

    return (
        <main className="bento-page" aria-label="Profile links">
            <section className="bento-frame" aria-labelledby="profile-title">
                <div className="bento-grid">
                    {visibleBlocks.map((block, index) => (
                        <Link
                            key={block.title}
                            href={block.href}
                            className={`bento-card ${
                                    index === 0 ? "is-profile" : ""
                            }`}
                            data-slot={index + 1}
                            style={
                                {
                                    "--hover-bg": hoverColors[index].background,
                                    "--hover-fg": hoverColors[index].foreground,
                                } as TileStyle
                            }
                            aria-label={
                                index === 0
                                    ? `Profile: ${block.title}`
                                    : `Open ${block.title}`
                            }
                        >
                            <span className="bento-card__meta">
                                {block.label}
                            </span>
                            <span
                                className="bento-card__title"
                                id={index === 0 ? "profile-title" : undefined}
                            >
                                {block.title}
                            </span>
                            <span className="bento-card__note">
                                {block.note}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
