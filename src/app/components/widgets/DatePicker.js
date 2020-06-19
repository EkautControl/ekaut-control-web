import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {TextInput} from "./Input";
import TextField from "@material-ui/core/TextField";

const DatePicker = (props) => {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                {...props}
                clearable
                format="DD/MM/yyyy"
                TextFieldComponent={(props)=> <TextInput {...props}/>}/>
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
