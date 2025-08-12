import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
}

export default function useGithubRepos(username: string) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data: Repo[] = await res.json();
        
        const sorted = data.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setRepos(sorted);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}
