import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import useGithubRepos from '../Hooks/useGit'

export default function Projects() {
  const { repos, loading, error } = useGithubRepos("vladcirlugea10");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex-col items-center p-4 sm:grid-cols-2 grid lg:grid-cols-3 gap-3'>
      {repos.map(repo => (
        <ProjectCard
          key={repo.id}
          title={repo.name}
          description={repo.description}
          link={repo.html_url}
        />
      ))}
    </div>
  )
}
