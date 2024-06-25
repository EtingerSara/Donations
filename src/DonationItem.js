import "./NavBar.css";
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import * as React from 'react';
import RecommendIcon from '@mui/icons-material/Recommend';

const DonationItem = ({ c }) => {

    return (
        <>
            <div className="donationItem">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 110 }}
                        image="https://www.patients-rights.org/webfiles/images/cache/220X220/zcX1/webfiles/associations/c076f16d86214b1d9a73c6cedacf8e47.jpg"
                        title="ezer miziyon "/>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {c.name}
                        </Typography>
                        <Typography variant="h3" color="text.secondary">
                            {c.sum + "₪ "}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {c.delection}
                        </Typography>
                    </CardContent>
                    <CardActions>
                            <Button variant="outlined" startIcon={< RecommendIcon  />}>
                                Like
                            </Button>
                            <a href="https://www.ami.org.il/" target="_blank">אתר עזר מציון</a>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}

export default DonationItem;
