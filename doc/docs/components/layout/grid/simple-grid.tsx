import {Grid,Col} from '@qwqui/core';
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid rowGap={8}>
      <Col className={styles.col} span={6}> 6 - 25% </Col>
      <Col className={styles.col}> 24 - 100% </Col>
    </Grid>
  )
}