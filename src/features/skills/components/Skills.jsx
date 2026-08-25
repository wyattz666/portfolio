import SectionTitle from '../../../components/SectionTitle';
import SkillBar from './SkillBar';
import styles from './Skills.module.css';

const getIcon = (name) => (
  <img 
    src={`https://cdn.jsdelivr.net/gh/xandemon/developer-icons/icons/${name}.svg`} 
    alt={name} 
    width="24" 
    height="24" 
    style={{ display: 'inline-block' }} 
  />
);

const skills = [
  { name: 'HTML / CSS', icon: <div style={{ display: 'flex', gap: '4px' }}>{getIcon('html5')}{getIcon('css3')}</div>, level: 85 },
  { name: 'JavaScript', icon: getIcon('javascript'), level: 78 },
  { name: 'React', icon: getIcon('reactjs'), level: 65 },
  { name: 'Git & GitHub', icon: <div style={{ display: 'flex', gap: '4px' }}>{getIcon('git')}{getIcon('github-dark')}</div>, level: 70 },
  { name: 'REST API', icon: getIcon('json'), level: 72 },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className={`container ${styles.wrapper}`}>
        <SectionTitle
          eyebrow="⭐ Bảng năng lực"
          title="Kỹ năng đang tu luyện"
          subtitle="Vẫn đang là sinh viên năm nhất, nhưng mình học bằng cách làm dự án thật mỗi ngày."
        />

        <div className={styles.panel}>
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
