import { Grid } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid>
      <Grid.Row>
        <Grid.Col className={styles.col} flex="0 0 100px"> 0 0 100px </Grid.Col>
        <Grid.Col className={styles['col--deep']} flex="0 1 auto"> flex: auto </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}