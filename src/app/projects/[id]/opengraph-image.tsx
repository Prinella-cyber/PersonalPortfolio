import { ImageResponse } from 'next/og';
import { projects } from '../../../data/projects';

// Define the size for the OpenGraph image
export const size = {
  width: 1200,
  height: 630,
};

// Define the content type
export const contentType = 'image/png';

// This function generates the image
export default async function og({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id.toString() === params.id);
  const title = project ? project.title : 'Project';
  
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 128,
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 48,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 600, color: '#6c5ce7' }}>
          {title}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: '#636e72', maxWidth: '80%', textAlign: 'center' }}>
          {project?.description ? project.description.substring(0, 100) + '...' : ''}
        </div>
        <div style={{ fontSize: 24, marginTop: 48, color: '#2d3436' }}>
          Prisca Onyebuchi - Portfolio
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}