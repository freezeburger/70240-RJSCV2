import { createPortal } from 'react-dom';

/**
 * https://mui.com/material-ui/getting-started/installation/
 * 
 * Material UI uses the Roboto font by default. 
 */

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/**
 * Insertion of Material Icons
 * Insertion of Material Icons is required for the Material UI components to work properly.
 */
export const MuiMaterialIcons = () => (
    <>
        {createPortal(
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />,
            document.querySelector('head'),
        )}
    </>
)

/**
 * Material UI use components.
 */
export { default as MuiCard } from '@mui/material/Card';
export { default as MuiCardHeader } from '@mui/material/CardHeader';
export { default as MuiCardMedia } from '@mui/material/CardMedia';
export { default as MuiCardContent } from '@mui/material/CardContent';
export { default as MuiCardActions } from '@mui/material/CardActions';
export { default as MuiCollapse } from '@mui/material/Collapse';
export { default as MuiAvatar } from '@mui/material/Avatar';
export { default as MuiIconButton } from '@mui/material/IconButton';
export { default as MuiTypography } from '@mui/material/Typography';
export { default as MuiFavoriteIcon } from '@mui/icons-material/Favorite';
export { default as MuiShareIcon } from '@mui/icons-material/Share';
export { default as MuiExpandMoreIcon } from '@mui/icons-material/ExpandMore';
export { default as MuiMoreVertIcon } from '@mui/icons-material/MoreVert';

export { red as MuiColorRed } from '@mui/material/colors';