import React from 'react'

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({title, description, link} : ProjectCardProps ) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer ">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{description || "No description provided"}</p>
      <a href={link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
}
