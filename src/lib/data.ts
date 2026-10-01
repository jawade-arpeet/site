import { get } from "@vercel/blob";

export type SiteInfo = {
    about: {
        name: string;
        role: string;
    };
    summary: {
        id: string;
        content: string;
    }[];
    navigation: {
        name: string;
        url: string;
    }[];
    socials: {
        platform: string;
        url: string;
    }[];
    experience: {
        role: string;
        company: string;
        from: string;
        to: string;
    }[];
};

export async function getSiteInfo(): Promise<SiteInfo> {
    const result = await get("info.json", { access: "private" });

    if (!result || result.statusCode !== 200) {
        throw new Error("failed to retrieve info.json from blob");
    }

    const text = await new Response(result.stream).text();
    return JSON.parse(text) as SiteInfo;
}
