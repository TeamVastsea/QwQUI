import {Grid} from '@qwqui/core';
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid rowGap={8}>
      <Grid.Col className={styles.col} span={6}> 6 - 25% </Grid.Col>
      <Grid.Col className={styles.col}> 24 - 100% </Grid.Col>
    </Grid>
  )
}