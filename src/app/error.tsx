"use client";

type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
    return (
        <div className="page-frame my-auto space-y-3">
            <div className="space-y-1">
                <h2 className="heading-20">something went wrong</h2>
                <p className="copy-14 text-foreground-secondary">
                    the page could not be loaded. please try again.
                </p>
            </div>
            <button
                className="link-14 cursor-pointer border-0 bg-transparent p-0 text-left"
                onClick={reset}
                type="button"
            >
                try again
            </button>
        </div>
    );
}
