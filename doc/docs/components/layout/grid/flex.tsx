import { Col, Grid, Row } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid>
      <Row>
        <Col className={styles.col} flex="0 0 100px"> 0 0 100px </Col>
        <Col className={styles['col--deep']} flex="0 1 auto"> flex: auto </Col>
      </Row>
    </Grid>
  )
}