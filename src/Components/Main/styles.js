import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // It's the equivalent to 16:9 resolution
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cartContent: {
        paddingTop: 0,
    },
    divider: {
        margin: '20px 0',
    },
}));