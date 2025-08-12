import React from 'react'
import eu from '../Images/eu.jpg'

export default function Home() {
  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto mb-6 rounded-lg border p-4 shadow">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={eu}
            alt="Vlad Cirlugea"
            className="w-24 h-24 rounded-full shadow"
          />
          <div className="flex-1">
            <h1 className="font-bold text-xl">Vlad Cirlugea</h1>
            <h2 className="text-sm">Fullstack Developer</h2>
            <p className="text-sm mt-2 text-center leading-relaxed">
              I am a developer who enjoys building clean UIs and practical web apps.
              This site showcases a few projects, skills, and ways to get in touch.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-6 rounded-lg border p-4 shadow">
        <h3 className="font-bold text-xl mb-3 text-center">Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {[
            'TypeScript',
            'React',
            'Node.js',
            'Express',
            'Tailwind CSS',
            'HTML',
            'CSS',
            'PostgreSQL',
          ].map((tech) => (
            <div key={tech} className="border rounded px-3 py-1 text-sm text-center">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
