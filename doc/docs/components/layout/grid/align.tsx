import { Col, Grid, Row } from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <>
    <Grid>
      <Row gap="12">
        <Col span="12">
          <h1>Justify Start</h1>
          <Grid>
            <Row className={styles.xrow} justify="start">
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>
          <h1>Justify Center</h1>
          <Grid>
            <Row className={styles.xrow} justify="center">
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>
          <h1>Justify End</h1>
          <Grid>
            <Row className={styles.xrow} justify="end">
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>

          <h1>Justify space-around</h1>
          <Grid>
            <Row className={styles.xrow} justify="space-around">
              <Col className={styles.col} span="6"> col </Col>
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>

          <h1>Justify space-between</h1>
          <Grid>
            <Row className={styles.xrow} justify="space-between">
              <Col className={styles.col} span="6"> col </Col>
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>
        </Col>

        <Col span="12">
          <h1>Align Start</h1>
          <Grid>
            <Row className={styles.hrow} align="start">
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>
          <h1>Align Center</h1>
          <Grid>
            <Row className={styles.hrow} Align="center">
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>
          <h1>Align End</h1>
          <Grid>
            <Row className={styles.hrow} align="end">
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>

          <h1>Justify stretch</h1>
          <Grid>
            <Row className={styles.hrow} align="stretch">
              <Col className={styles.col} span="6"> col </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
    </Grid>
    </>
  )
}