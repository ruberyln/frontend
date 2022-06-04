import React from 'react';
import useSate from 'react';
import { IconButton }from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function Like() {
const [like, SetLike] = useSate(1000)

function decreaseLike() {
    SetLike(prevLike=>prevLike -1) }

function increaseLike() {
    SetLike(prevLike=>prevLike +1) }

    return (
<>
        <IconButton onClick = {decreaseLike} > 
            <span> {like}
<FavoriteBorderOutlinedIcon/>
</span>
<IconButton onClick = {increaseLike}>
<FavoriteOutlinedIcon/>
</IconButton>
        </IconButton>
        </>
    )
}

export default Like;