import { getSiteInfo } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
    const { about, summary, navigation, socials } = await getSiteInfo();

    return (
        <div className="page-frame my-auto space-y-4 sm:space-y-5">
            <header className="inline-flex items-baseline gap-x-2">
                <h3 className="heading-20">{about.name}</h3>
                <p className="copy-14 text-foreground-secondary">
                    {about.role}
                </p>
            </header>
            <div className="space-y-2">
                {summary.map((item) => (
                    <p
                        key={item.id}
                        className="copy-14 text-foreground-secondary"
                    >
                        {item.content}
                    </p>
                ))}
            </div>
            <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <ul className="flex items-center gap-x-2">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link className="link-14" href={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center gap-x-2">
                    {socials.map((item) => (
                        <li key={item.platform}>
                            <Link className="link-14" href={item.url}>
                                {item.platform}
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    );
}
