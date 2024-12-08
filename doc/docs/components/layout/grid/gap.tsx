import { Grid } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid className={styles.grid}>
      <Grid.Row gap={16} className={styles.row} wrap>
        <Grid.Col span="12"> <div className={styles.col}>12 - 50% </div></Grid.Col>
        <Grid.Col span="12"> <div className={styles.col}>12 - 50% </div></Grid.Col>
        <Grid.Col span="12"> <div className={styles.col}>12 - 50% </div></Grid.Col>
        <Grid.Col span="12"> <div className={styles.col}>12 - 50% </div></Grid.Col>
      </Grid.Row>
    </Grid>
  )
}