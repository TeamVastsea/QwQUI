import { Grid } from "@qwqui/core";
import styles from './common.module.scss';
import { useState } from "react";

export default function App(){
  const [currentSize, setSize] = useState('');
  return (
    <Grid className={styles.grid} onBreakPoint={setSize}>
      <Grid.Row wrap gap={8}>
        <Grid.Col span={{sm: 0, base: 8}}>
          <div className={styles.col}>
            {currentSize}
          </div>
        </Grid.Col>

        <Grid.Col span={12}>
          <div className={styles['col--deep']}>
            {currentSize}
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}