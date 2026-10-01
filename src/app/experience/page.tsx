import { getSiteInfo } from "@/lib/data";
import { error } from "node:console";

export default async function ExperiencePage() {
    const { experience } = await getSiteInfo();

    return (
        <div className="page-frame my-auto max-w-lg space-y-4">
            <h3 className="heading-20">experience</h3>
            <ul className="*:border-t *:border-t-neutral-800 *:last:border-b *:last:border-b-neutral-800">
                {experience.map((item) => (
                    <li
                        key={`${item.role}-${item.company}`}
                        className="flex flex-col gap-y-1 py-3 sm:flex-row sm:items-center sm:gap-x-4"
                    >
                        <div className="inline-flex flex-wrap items-baseline gap-x-2">
                            <h3 className="copy-14 font-medium">{item.role}</h3>
                            <p className="text-foreground-secondary copy-14">
                                {item.company}
                            </p>
                        </div>
                        <p className="text-foreground-secondary copy-14 whitespace-nowrap tabular-nums sm:ml-auto">
                            {item.from} - {item.to}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
