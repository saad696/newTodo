import React, { Component } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";

import { Alert } from '@material-ui/lab'

import styles from "./TodoForm.module.css";
class TodoForm extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.add}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            className={styles.outerGrid}
          >
            <Grid item xs={11}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="component-outlined">Enter Todo</InputLabel>
                <OutlinedInput
                  label="Enter Todo"
                  onChange={this.props.change}
                  id="todoInput"
                  type="text"
                  value={this.props.todo}
                />
              </FormControl>
            </Grid>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
              >
                Add Todo
              </Button>
            </Grid>
            <Grid item xs={8} sm={5}>
              <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">Filter Tasks</InputLabel>
        <Select
          native
          onChange={this.props.filter}
          label="Filter Tasks"
        >
          <option aria-label="None"/>
          <option value="all">All tasks</option>
          <option value="done">Done tasks</option>
          <option value="undone">Undone tasks
          </option>
        </Select>
      </FormControl>
            </Grid>
          </Grid>
        </form>
        <Container maxWidth="sm" className={styles.lists}>
          <Typography variant="h3">Todo List</Typography>
          <Alert severity="info" style={{marginTop:".5rem"}}>
            Deletes the completed todo's one per click — <strong>CLEAR DONE (Button)</strong>
          </Alert>
          <Alert severity="info" style={{marginTop:".5rem"}}>
            To edit todo's just click on the specific todo you want to edit
          </Alert>
          {/* <Container maxWidth="sm" style={{textAlign: "center", marginTop: "1rem"}}> */}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={this.props.clear}
            style={{marginTop:"1rem"}}
          >
            Clear done
          </Button>
          {/* </Container> */}
        <Typography variant="body2" style={{marginTop: ".5rem"}}>
          <b>Total tasks -</b> [ <strong>{this.props.totalTodo}</strong> ]
        </Typography>
        </Container>
      </>
    );
  }
}

export default TodoForm;
