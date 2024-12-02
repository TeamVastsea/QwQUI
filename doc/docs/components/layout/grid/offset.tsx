import { Col, Grid, Row } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid className={styles.grid}>
      <Row style={{
        background: "var(--rp-c-bg-mute)",
        padding: 8,
        borderRadius: 8
      }}>
        <Col className={styles.col} span="12"> 12 - 50% </Col>
        <Col className={styles.col} span="6" offset="6"> 12 - 50% </Col>
      </Row>
    </Grid>
  )
}