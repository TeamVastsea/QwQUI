import { Col, Grid, Row } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid className={styles.grid}>
      <Row gap={16}>
        <Col className={styles.col} span="12"> 12 - 50% </Col>
        <Col className={styles.col} span="12"> 12 - 50% </Col>
        <Col className={styles.col} span="12"> 12 - 50% </Col>
        <Col className={styles.col} span="12"> 12 - 50% </Col>
      </Row>
    </Grid>
  )
}