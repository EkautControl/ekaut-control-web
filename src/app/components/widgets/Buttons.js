import withStyles from "@material-ui/core/styles/withStyles";

//Base components
import Button from "@material-ui/core/Button";

const ButtonAlert = withStyles( (theme) => ({
    root: {
        backgroundColor: theme.palette.warning.main,
        margin: '0px 15px',
        fontSize: '10px',
        '&:hover': {
            backgroundColor: theme.palette.warning.dark,
        },
    }
}))(Button)

const ButtonPrimary = withStyles( (theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        padding: '6px 18px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    }
}))(Button)

export {ButtonAlert, ButtonPrimary}
