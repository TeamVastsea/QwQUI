import { Grid} from "@qwqui/core";
import styles from './common.module.scss';

export default function App(){
  return (
    <Grid>
      <Grid.Row gap="12">
        <Grid.Col span="12">
          <h1>Justify Start</h1>
          <Grid>
            <Grid.Row className={styles.xrow} justify="start">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>
          <h1>Justify Center</h1>
          <Grid>
            <Grid.Row className={styles.xrow} justify="center">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>
          <h1>Justify End</h1>
          <Grid>
            <Grid.Row className={styles.xrow} justify="end">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>

          <h1>Justify space-around</h1>
          <Grid>
            <Grid.Row className={styles.xrow} justify="space-around">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>

          <h1>Justify space-between</h1>
          <Grid>
            <Grid.Row className={styles.xrow} justify="space-between">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>
        </Grid.Col>

        <Grid.Col span="12">
          <h1>Align Start</h1>
          <Grid>
            <Grid.Row className={styles.hrow} align="start">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>
          <h1>Align Center</h1>
          <Grid>
            <Grid.Row className={styles.hrow} Align="center">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>
          <h1>Align End</h1>
          <Grid>
            <Grid.Row className={styles.hrow} align="end">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>

          <h1>Justify stretch</h1>
          <Grid>
            <Grid.Row className={styles.hrow} align="stretch">
              <Grid.Col className={styles.col} span="6"> col </Grid.Col>
            </Grid.Row>
          </Grid>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}