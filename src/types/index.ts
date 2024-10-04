import { z } from "zod";

export const profileResponse = z.object({
    avatar_url: z.string(),
    name: z.string(),
    location: z.string().nullable(),
    bio: z.string().nullable(),
    followers: z.number(),
    following: z.number(),
    repos_url: z.string()
})

export const reposSchema = z.array(z.object({
    id: z.number(),
    html_url: z.string(),
    updated_at: z.string(),
    stargazers_count: z.number(),
    forks_count: z.number(),
    license: z.object({
        name: z.string()
    }).nullable()
}))

export type Profile = z.infer<typeof profileResponse>
export type Repos = z.infer<typeof reposSchema>
export type nameUser = string