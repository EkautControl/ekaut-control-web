import React from 'react'

import withStyles from "@material-ui/core/styles/withStyles";

//Base components
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";


const InputLabelBase = withStyles((theme) => ({
    root:{
        color: "#475198",
        fontWeight: 'bold',
        fontSize: '19px',
        lineHeight: '19px'
    }
}))(InputLabel)

const TextInputBase = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        backgroundColor: '#F8F8F8',
        borderRadius: '5px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        fontSize: 16,
        padding: '10px 12px',
    },
}))(InputBase);

const TextInput = (props) => {
    return (
        <FormControl fullWidth="true">
            <InputLabelBase shrink htmlFor="text-input">{props.children}</InputLabelBase>
            <TextInputBase id="text-input"/>
        </FormControl>
    )
}

const SelectInput = (props) => {
    return (
        <FormControl fullWidth="true">
            <InputLabelBase shrink htmlFor="text-input">{props.children}</InputLabelBase>
            <Select input={<TextInputBase id="text-input"/>}/>
        </FormControl>
    )
}

export {TextInput, SelectInput}
