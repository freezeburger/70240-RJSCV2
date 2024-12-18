import {
    MuiAvatar,
    MuiCard,
    MuiCardActions,
    MuiCardContent,
    MuiCardHeader,
    MuiCardMedia,
    MuiColorRed,
    MuiFavoriteIcon,
    MuiIconButton,
    MuiShareIcon,
    MuiTypography
} from "@/libs/mui";
import { useCallback } from "react";

export const CardWrapper = (props) => {
    const { title, children, imageUrl, subheader, avatar, onShare, onLike } = props;

    const noop = useCallback(() => {}, []);

    return (
        <MuiCard sx={{ maxWidth: 345 }}>
            <MuiCardHeader
                avatar={
                    <MuiAvatar sx={{ bgcolor: MuiColorRed[500] }} aria-label="recipe">
                        {avatar || "A"}
                    </MuiAvatar>
                }
                title={ title || "Default Card title "}
                subheader={ subheader || "Default Card Subheader"}
            />
            <MuiCardMedia
                onError={(e) => e.target.src = "https://place-hold.it/300x500"}
                component="img"
                height="194"
                image={imageUrl || "https://place-hold.it/300x500"}
                alt={title}
            />
            <MuiCardContent>
                <MuiTypography variant="body2" sx={{ color: 'text.secondary' }}>
                    {children || "Default Card Content"}
                </MuiTypography>
            </MuiCardContent>
            <MuiCardActions disableSpacing>
                <MuiIconButton aria-label="add to favorites" onClick={ onLike || noop }>
                    <MuiFavoriteIcon />
                </MuiIconButton>
                <MuiIconButton aria-label="share" onClick={ onShare || noop }>
                    <MuiShareIcon />
                </MuiIconButton>
            </MuiCardActions>
        </MuiCard>
    );
}

