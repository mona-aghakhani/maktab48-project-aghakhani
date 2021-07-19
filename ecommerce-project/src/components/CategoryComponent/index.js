import React from 'react'
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Container, Grid, Toolbar } from "@material-ui/core";
import { useStyles } from "./styles";
// import image1 from "../../../assets/images/shop3.jpg"
// import image2 from '../../../assets/images/dairy1 (3).jpg';
const CategoryComponent = ({title,categorydata}) => {
    const { img, root, card, item, imgContainer, content, container, headerCategory,paper } = useStyles()
    return (
        <Container
        //   className={container}
        //   className={classes.cardGrid}
        maxWidth="lg">
        <Paper className={paper}>
            <div className={headerCategory}>
                <Typography variant="h5">کالاهای  گروه {title}</Typography>
            </div>
            <Grid container spacing={2}>
                {categorydata.map((card) => (
                <Grid item key={card} xs={12} sm={4} md={4}>
                    <Card className={card}>
                        <img style={{ width: "100px", height: "100px" }} src={card.image} alt="کالا" />
                        {/* <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          /> */}
                        <CardContent
                        //   className={classes.cardContent}
                        >
                            <Typography gutterBottom variant="h5" component="h2">
                                {/* Heading */}
              {card.title}
                            </Typography>
                            <Typography>
                                {card.price}
              {/* This is a media card. You can use this section to describe the content. */}
            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
               ))} 
            </Grid>
        </Paper>
    </Container>
    )
}

export default CategoryComponent
