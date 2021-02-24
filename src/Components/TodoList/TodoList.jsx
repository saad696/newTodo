import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { Component } from "react";

import styles from "./TodoList.module.css";

class TodoList extends Component {
  render() {
    let listItem;
    const items = this.props.filter;
    items.length === 0
      ? (listItem = (
          <div className={styles.nothing}>
            <Paper elevation={6} style={{ padding: "2rem", color: "gray" }} className={styles.todo}>
              <h1>Nothing to display :(</h1>
            </Paper>
          </div>
        ))
      : (listItem = items.map((item, index) => {
          return (
            <Container
              maxWidth="sm"
              style={{ marginTop: "2rem" }}
              key={item.key}
            >
              <Paper
              className={styles.todo}
                elevation={6}
                style={{ padding: "1rem"}}
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                  style={{
                    margin: "0.4rem",
                  }}
                >
                  <Grid item xs={1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={item.done}
                          onChange={() => this.props.check(item.key)}
                        />
                      }
                      style={{ marginTop: "1rem" }}
                    />
                  </Grid>

                  <Grid item xs={7}>
                    <Typography
                      variant="body1"
                      style={{ marginTop: "0.6rem", padding: "1rem" }}
                      className={item.done ? styles.done : null}
                    >
                      <input
                        disabled={item.isDisabled}
                        className={styles.edit}
                        type="text"
                        value={item.todo}
                        onChange={(e) =>
                          this.props.edit(e.target.value, item.key)
                        }
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={2} md={2} style={{ marginTop: "1rem" }}>
                    <Button
                      style={{ flexGrow: 1 }}
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => this.props.delete(index)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          );
        }));
    return <>{listItem}</>;
  }
}

export default TodoList;
