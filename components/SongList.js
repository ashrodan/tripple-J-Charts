import Layout from './Layout'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const listItems = ({ image, title, artist }) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar src={image} />
        </ListItemAvatar>
        <ListItemText primary={title} secondary={artist} />
    </ListItem>
)

export default function SongList({ songs }) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {songs.map(row => listItems(row))}
        </List>
    );
}