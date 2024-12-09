import { Grid } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid className={styles.grid} cols={{sm: 12,xxl:12}}>
      <Grid.Row wrap gap={8}>
        <Grid.Col span={8}>
          <div className={styles.col}>
            Col - 8         
          </div>
        </Grid.Col>
        <Grid.Col span={12}>
          <div className={styles.col}>
            Col - 12
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}