import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MUICard = () => {
  return (
    <Box width={300}>
      <Card>
        <CardMedia component="img" height="140" alt="Hello"/>
        <CardContent>
          <Typography variant="h5" component="div">
            Hello People
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque non
            deserunt debitis dicta porro repellendus officia reiciendis
            similique, voluptas nemo iure eum corporis quia officiis nihil
            blanditiis quae omnis aut!
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Sahre</Button>
            <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MUICard;
