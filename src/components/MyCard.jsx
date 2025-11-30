import React from "react";
import { img_300 } from "../utils.js";
import { img_500 } from "../utils.js";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const MyCard = ({
  title,
  overview,
  release_date,
  vote_average,
  poster_path,
}) => {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
      <CardContent>
        <CardMedia
          component="img"
          image={`${img_500}${poster_path}`}
          sx={{maxWidth: 200}}
        ></CardMedia>
        <CardHeader variant="h5" component="div">
          {title}
        </CardHeader>
        <Typography variant="body2" sx={{fontSize: 12}}>{overview}</Typography>
        <Typography>{release_date}</Typography>
        <Typography>{vote_average}</Typography>
      </CardContent>
    </Card>
  );
};
