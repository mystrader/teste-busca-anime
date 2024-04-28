import styles from './tag.module.css';

export interface tagProps {
  name?: string;
}

export function Tag({ name = '------' }: tagProps) {
  return <div className={styles.tag}>{name}</div>;
}
export default Tag;
