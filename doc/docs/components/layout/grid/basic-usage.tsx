import { Col, Grid, Row } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid className={styles.grid} rowGap={8}>
      <Row> <Col className={styles.col}> 24 - 100% </Col> </Row>
      <Row>
        <Col className={styles.col} span="12"> 12 - 50% </Col>
        <Col className={styles['col--deep']} span="12"> 12 - 50% </Col>
      </Row>
      <Row>
        <Col className={styles.col} span="6"> 6 - 25% </Col>
        <Col className={styles['col--deep']} span="6"> 6 - 25% </Col>
        <Col className={styles.col} span="6"> 6 - 25% </Col>
        <Col className={styles['col--deep']} span="6"> 6 - 25% </Col>
      </Row>
    </Grid>
  )
}