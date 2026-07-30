import "dotenv/config";

import { createCorsair } from "corsair";
import { github } from "@corsair-dev/github";
import { connectionPool } from "@/db/index";

export const corsair = createCorsair({
    kek: process.env.CORSAIR_KEK!,
    database: connectionPool, // your app's database instance
    hub: {
        projectApiKey: process.env.CORSAIR_DEV_API_KEY!,
        signingSecret: process.env.CORSAIR_DEV_SIGNING_SECRET!,
    },
    plugins: [github({ authType: "managed" })],
});

