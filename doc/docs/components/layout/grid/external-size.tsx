import { Grid, useScreenSize,Range } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  const externalSize:{
    [x:string]: Range
  } = {
    xxs: [0,320] as const
  } as const;
  const {currentSize} = useScreenSize({
    externalSize,
  })
  return (
    <Grid externalSizes={externalSize} class={styles}>
      <Grid.Row gap={16}>
        <Grid.Col span={8}>
          <div className={styles.col}>
            当前断点: {currentSize}
          </div>
        </Grid.Col>
        <Grid.Col span={8} xxs={0}>
          <div className={styles.col}>
            Col - 8 
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}