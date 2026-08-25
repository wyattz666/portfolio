import SectionTitle from '../../../components/SectionTitle';
import { useLanguage } from '../../../contexts';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow={t("proj_eyebrow")}
          title={t("proj_title")}
          subtitle={t("proj_subtitle")}
        />

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
