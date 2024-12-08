import { Grid } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid className={styles.grid} rowGap={8}>
      <Grid.Row> <Grid.Col className={styles.col}> 24 - 100% </Grid.Col> </Grid.Row>
      <Grid.Row>
        <Grid.Col className={styles.col} span="12"> 12 - 50% </Grid.Col>
        <Grid.Col className={styles['col--deep']} span="12"> 12 - 50% </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col className={styles.col} span="6"> 6 - 25% </Grid.Col>
        <Grid.Col className={styles['col--deep']} span="6"> 6 - 25% </Grid.Col>
        <Grid.Col className={styles.col} span="6"> 6 - 25% </Grid.Col>
        <Grid.Col className={styles['col--deep']} span="6"> 6 - 25% </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}