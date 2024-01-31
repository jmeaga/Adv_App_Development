import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import './AllEvents.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from './SharedState';

const Home = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='nn'style={{backgroundImage: 'url("https://images.pexels.com/photos/1682462/pexels-photo-1682462.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover', minHeight: '100vh',height:'1000px',paddingLeft:'20px'}}>
    
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Birthday event
          </Typography>
          <Typography variant="body2" color="text.secondary">
          On your special day, may the candles on your cake shine as brightly as the smiles on the faces of your loved ones. May every moment be a reminder of the incredible person you are and the wonderful journey that lies ahead
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
            Book
          </Button>
          </Link>
        </CardActions>
      </Card>

      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1587292/pexels-photo-1587292.jpeg?auto=compress&cs=tinysrgb&w=600"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agriculture & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘Kisan Bhagidari Prathmikta Campaign’ as a Jan Bhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
            Book
          </Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with Kisan Credit Cards (KCC).
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
            Book
          </Button>
          </Link>
        </CardActions>
      </Card>
      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible Animal Husbandry and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
            Book
          </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of <a>Kisan Credit Card</a> (KCC) saturation drive, titled as Kisan Bhagidari Prathmikta Humaari (KBPH),from April 24 to May 1
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>

      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1587292/pexels-photo-1587292.jpeg?auto=compress&cs=tinysrgb&w=600"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agriculture & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘Kisan Bhagidari Prathmikta Campaign’ as a Jan Bhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>
      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with Kisan Credit Cards (KCC).
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>
      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible Animal Husbandry and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of <a>Kisan Credit Card</a> (KCC) saturation drive, titled as Kisan Bhagidari Prathmikta Humaari (KBPH),from April 24 to May 1
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>

      <Card className='vvv'  sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1587292/pexels-photo-1587292.jpeg?auto=compress&cs=tinysrgb&w=600"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agriculture & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘Kisan Bhagidari Prathmikta Campaign’ as a Jan Bhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>
      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with Kisan Credit Cards (KCC).
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>
      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible Animal Husbandry and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '20px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/3863/firework-new-year-s-eve-december-31-fireworks.jpg?auto=compress&cs=tinysrgb&w=600"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50% of the cost of the seed subject to a maximum of Rs.1200/-per Quintal whichever is less
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
          
        </CardActions>
      </Card>

      <Card className='vvv' sx={{ maxWidth: 345, marginRight: '2px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/3863/firework-new-year-s-eve-december-31-fireworks.jpg?auto=compress&cs=tinysrgb&w=600"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soil health card will be distributed to all the farmers who have offered the soil sample for testing by paying prescribed fee of Rs.5/- each for Macro and Micro nutrient testing

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
          
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50 farmers / Agricultural labourers will be trained in a cluster with the financial assistance of Rs.5000/- per training.
          </Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
          </WhatsappShareButton>
          <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
          Book
        </Button>
        </Link>
      
        
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="green iguana"
        />
        <CardContent>
        
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          20% on power consumption charges for 36 months from Date of Commence -ment of Production or date of power connection whichever is later.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Link to ="/Booking"><Button style={{ color: 'green' }} size="small">
         Book
       </Button>
       </Link>
   
        </CardActions>
      </Card>
    </div>
    </div>
  );
}
export default Home;