import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

//Base Component
import {DialogTitle as _DialogTitle,
        Dialog,
        DialogContent as _DialogContent} from "@material-ui/core";

const DialogTitle = withStyles(() => ({
    root: {
        margin:'30px 50px 5px 50px',
        padding: '10px 0 0 0 ',
        '& > h2': {
            color: '#475198',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '27px',
            textTransform: 'uppercase',
        }
    }
}))(_DialogTitle)

const DialogContent = withStyles(() => ({
    root: {
        margin:'20px 50px 30px 50px',
        padding: '10px 0',
        overflow:'hidden'
    }
}))(_DialogContent)

class FormDialog extends React.Component{

    render() {
        const {props} = this

        return (
            <Dialog open={props.open}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    {
                        props.children
                    }
                </DialogContent>
            </Dialog>
        )
    }

}

export {FormDialog}
