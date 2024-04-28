import styles from './tag.module.css';

export interface tagProps {
  name?: string;
}

export function tag({ name = '------' }: tagProps) {
  return <div className={styles.tag}>tag {name}</div>;
}
