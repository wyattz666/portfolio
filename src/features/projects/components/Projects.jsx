import SectionTitle from '../../../components/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="🗺️ Nhật ký nhiệm vụ"
          title="Những dự án mình đã hoàn thành"
          subtitle="Từ những dòng code đầu tiên đến nền tảng đang được dùng thật — mỗi dự án là một chặng hành trình."
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
