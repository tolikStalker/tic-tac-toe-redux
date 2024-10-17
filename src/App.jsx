import './App.css'
import {Field} from "./Field.jsx";
import {reducer} from "./reducer.jsx";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({reducer});

function App() {
  return (
        <Provider store={store}>
        <h1>Крестики-нолики</h1>
            <Field/>
        </Provider>
  )
}

export default App
