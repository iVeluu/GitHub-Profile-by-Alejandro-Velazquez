import { z } from "zod";

export const profileResponse = z.object({
    avatar_url: z.string(),
    name: z.string(),
    location: z.string().nullable(),
    bio: z.string().nullable(),
    followers: z.number(),
    following: z.number()
})

export type Profile = z.infer<typeof profileResponse>
export type nameUser = string