import React from 'react';

export async function getStaticProps() {
  const response = await fetch(
    'https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json'
  );
  const jsonData = await response.json();

  return {
    props: {
      jsonData,
    },
  };
}

export default function Home({ jsonData }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">JSON Data</h1>
      {jsonData.employees.map((employee) => (
        <div
          key={employee.id}
          className="bg-white rounded-lg shadow-lg p-4 mb-4"
        >
          <h2 className="text-xl font-bold mb-2 text-purple-600">
            {employee.name}
          </h2>
          <p className="mb-2">
            Designation: {employee.designation || 'Not specified'}
          </p>
          <p className="mb-2">Skills: {employee.skills.join(', ')}</p>
          <h3 className="text-lg font-bold mt-4 text-blue-600">Projects:</h3>
          {employee.projects ? (
            <ul className="list-disc list-inside ml-4 mb-4 space-y-4">
              {employee.projects.map((project, index) => (
                <li key={index} className="mb-4">
                  <h4 className="text-md font-bold mb-2 text-green-600">
                    {project.name}
                  </h4>
                  <p className="mb-2">
                    {project.description || 'No description'}
                  </p>
                  <h5 className="text-md font-bold mt-2 text-yellow-600">
                    Team:
                  </h5>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    {project.team.map((teamMember, index) => (
                      <li key={index}>
                        {teamMember.name ? (
                          <>
                            <span className="font-bold text-pink-600">
                              {teamMember.name}
                            </span>
                            {' - '}
                            <span>{teamMember.role}</span>
                          </>
                        ) : (
                          <span>{teamMember.role}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {project.tasks && (
                    <>
                      <h5 className="text-md font-bold mt-2 text-yellow-600">
                        Tasks:
                      </h5>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        {project.tasks.map((task, index) => (
                          <li key={index}>
                            <span className="font-bold text-pink-600">
                              Task {task.id}:{' '}
                            </span>
                            {task.name ? (
                              <span>{task.name}</span>
                            ) : (
                              <span>No name</span>
                            )}
                            {' - '}
                            <span>{task.status || 'Not specified'}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No projects available</p>
          )}
        </div>
      ))}
    </div>
  );
}
