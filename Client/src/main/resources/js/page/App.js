import React from "react"
import Input from "Js/component/input/Input"
import Result from "Js/component/result/Result"
import rootReducer from "Js/store/reducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { Container, CssBaseline, Grid } from "@material-ui/core"

const store = createStore(rootReducer)

export default class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Container>
                    <Grid container>
                        <Input />
                        <Result />
                    </Grid>
                </Container>
            </Provider>
        )
    }
}