import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

export const ButtonAlert = withStyles( (theme) => ({
    root: {
        backgroundColor: theme.palette.warning.main,
        margin: '0px 15px',
        fontSize: '10px',
        '&:hover': {
            backgroundColor: theme.palette.warning.dark,
        },
    }
}))(Button)

export const ButtonPrimary = withStyles( (theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    }
}))(Button)
