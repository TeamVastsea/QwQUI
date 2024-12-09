import { Grid } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  const spans = [
    [24],[12,12],[6,6,6,6],[4,4,4,4,4,4]
  ]
  return (
    <Grid className={styles.grid} verticalSpcing={8} horizontalSpacing={8}>
      {
        spans.map((span,idx) => {
          return (
            <Grid.Row key={`${span}-${idx}`}>
              {
                span.map((val, idx) => {
                  return (
                    <Grid.Col span={val} key={idx}>
                      <div className={idx % 2 ? styles['col--deep'] : styles.col}>
                        {val}
                      </div>
                    </Grid.Col>
                  )
                })
              }
            </Grid.Row>
          )
        })
      }
    </Grid>
  )
}