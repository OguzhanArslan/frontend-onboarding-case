import styles from './Tabs.module.scss';

export type TabsProps = {
  children: React.ReactNode;
};

function List({ children }: TabsProps) {
  return <div className={styles.list}>{children}</div>;
}

function Item({ children }: TabsProps) {
  return <div className={styles.item}>{children}</div>;
}

export default { List, Item };
