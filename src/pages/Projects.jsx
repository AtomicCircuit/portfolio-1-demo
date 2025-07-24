
import HeroSection from '../components/HeroSection';

export default function Projects() {
  const projects = [
    {
      title: 'Astrological Blog',
      description: 'Weekly articles on astrology, cosmic events, and personal growth insights.',
      link: '#',
      type: 'Content'
    },
    {
      title: 'Monthly Workshops',
      description: 'Group sessions focusing on specific astrological topics and techniques.',
      link: '#',
      type: 'Education'
    },
    {
      title: 'Astrology Podcast',
      description: 'Discussions with fellow astrologers and spiritual practitioners.',
      link: '#',
      type: 'Media'
    },
    {
      title: 'Community Events',
      description: 'Local meetups and online events for astrology enthusiasts.',
      link: '#',
      type: 'Community'
    }
  ];

  return (
    <div className="page-projects">
      <HeroSection
        title="Projects & Initiatives"
        subtitle="Explore my ongoing projects and community contributions in the world of astrology."
        backgroundVariant="secondary"
      />

      <section className="section">
        <div className="container">
          <div className="projects-grid grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="project-card card">
                <div className="project-type">{project.type}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link btn btn-secondary">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section resources-section">
        <div className="container">
          <h2 className="section-title">Free Resources</h2>
          <div className="resources-grid grid grid-3">
            <div className="resource-card card text-center">
              <div className="resource-icon">📚</div>
              <h3 className="resource-title">Beginner's Guide</h3>
              <p className="resource-description">
                Essential astrology basics for newcomers to the practice.
              </p>
              <button className="btn btn-secondary">Download PDF</button>
            </div>
            
            <div className="resource-card card text-center">
              <div className="resource-icon">🌙</div>
              <h3 className="resource-title">Moon Phases Calendar</h3>
              <p className="resource-description">
                Track lunar cycles and their influence on your daily life.
              </p>
              <button className="btn btn-secondary">View Calendar</button>
            </div>
            
            <div className="resource-card card text-center">
              <div className="resource-icon">💫</div>
              <h3 className="resource-title">Daily Insights</h3>
              <p className="resource-description">
                Subscribe to receive daily astrological guidance via email.
              </p>
              <button className="btn btn-secondary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-grid {
          margin-bottom: var(--space-2xl);
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .project-type {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-lg);
          font-size: 0.85rem;
          font-weight: 600;
          width: fit-content;
        }

        .project-title {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          flex-grow: 1;
        }

        .project-link {
          align-self: flex-start;
        }

        .resources-section {
          background: var(--bg-secondary);
        }

        .resource-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .resource-icon {
          font-size: 2.5rem;
          margin-bottom: var(--space-sm);
        }

        .resource-title {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .resource-description {
          color: var(--text-secondary);
          line-height: 1.6;
          flex-grow: 1;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
