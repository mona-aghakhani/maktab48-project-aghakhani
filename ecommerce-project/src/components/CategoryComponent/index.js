import React from 'react'
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import { Box, Container, Grid
    // , Link
} from "@material-ui/core";
import { useStyles } from "./styles";
import {NavLink} from "react-router-dom"
// import image1 from "../../../assets/images/shop3.jpg"
// import image2 from '../../../assets/images/dairy1 (3).jpg';
const CategoryComponent = ({ title, categorydata }) => {
    const { img,  headerCategory, box, boxContainer, cardItem,link,headerTitle } = useStyles()
    return (
        <Container
            //   className={container}
            //   className={classes.cardGrid}
            maxWidth="xl">
            {/* <Paper className={paper}> */}
            <NavLink exact  to={`/listProducts/${title}`} className={link}>
                <div className={headerCategory}>
                    <Typography variant="h4" className={headerTitle}>کالاهای  گروه {title}</Typography>
                </div>
            </NavLink>
            <Grid container spacing={8}>
                {categorydata?.map((card) => (
                    <Grid item key={card} xs={12} sm={4} md={4}
                    //  lg={3}
                    >
                        <Card className={cardItem}>
                            <Box className={boxContainer}
                            //                     style={{    background: rgb(237 200 162 / 30%);
                            // padding: 5px;
                            // margin: 5px 5px;
                            // box-sizing: border-box;
                            // border-radius: 5px;}}
                            >
                                <Box className={box}>
                                    <img className={img}
                                        //  style={{ width: "80%", height: "100Px" ,margin:"auto"}}
                                        src={card.image} alt="کالا" />
                                </Box>
                            </Box>
                            {/* <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          /> */}
                            <CardContent
                            //   className={classes.cardContent}
                            >
                                <Typography gutterBottom variant="h5" component="h5">
                                    {/* Heading */}
                                    {card.title}
                                </Typography>
                                <Typography color="primary" variant="h5">
                                    {(Number(card.price)).toLocaleString()}   تومان
              {/* This is a media card. You can use this section to describe the content. */}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* </Paper> */}
        </Container>
    )
}

export default CategoryComponent
