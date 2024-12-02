import { Col, Grid, Row } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid className={styles.grid}>
      <Row gap={16} className={styles.row} wrap>
        <Col span="12"> <div className={styles.col}>12 - 50% </div></Col>
        <Col span="12"> <div className={styles.col}>12 - 50% </div></Col>
        <Col span="12"> <div className={styles.col}>12 - 50% </div></Col>
        <Col span="12"> <div className={styles.col}>12 - 50% </div></Col>
      </Row>
    </Grid>
  )
}