import { Repo } from "../types"
import { timeAgo } from "../utils/UpdatedAt"

type RepoCardProps = {
    repo: Repo
}

export default function RepoCard({ repo }: RepoCardProps) {
    return (
        <a 
            target="_blank" rel="noopener noreferrer"
            href={repo.html_url} 
            className="bg-gradient-to-l from-[#1D1B48]  to-[#111729] p-6 rounded-lg text-white mt-5 space-y-3 flex flex-col justify-between"
        >
            <p>{repo.name}</p>
            <p className="text-p">{repo.description ? repo.description : 'No description'}</p>
            <div className="flex text-p items-center justify-start gap-2">
                {repo.license && (
                    <>
                        <img src="/Chield_alt.svg" alt="nesting svg" />
                        <p>{repo.license.name}</p>
                    </>
                )}
                <img src="/Nesting.svg" alt="nesting svg" />
                <p>{repo.forks_count}</p>
                <img src="/Star.svg" alt="nesting svg" />
                <p>{repo.stargazers_count}</p>
                <p>{timeAgo(repo.updated_at)}</p>
            </div>
        </a>
    )
}
