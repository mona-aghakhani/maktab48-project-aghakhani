import React from 'react'
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import {
    Box, Container, Grid
    // , Link
} from "@material-ui/core";
import { useStyles } from "./styles";
import { NavLink } from "react-router-dom"

const CategoryComponent = ({ title, categorydata }) => {
    const { img, headerCategory, box, boxContainer, cardItem, link, headerTitle } = useStyles()
    return (
        <Container
            //   className={container}
            //   className={classes.cardGrid}
            maxWidth="xl">
            {/* <Paper className={paper}> */}
            <NavLink exact to={`/listProducts/${title}`} className={link}>
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
                            <Box className={boxContainer}>
                                <Box className={box}>
                                    <img className={img} src={card.image} alt="کالا" />
                                </Box>
                            </Box>

                            <CardContent >
                                <Typography gutterBottom variant="h5" component="h5">
                                    {/* Heading */}
                                    {card.title}
                                </Typography>
                                <Typography color="primary" variant="h5">
                                    {(Number(card.price)).toLocaleString()}   تومان

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
