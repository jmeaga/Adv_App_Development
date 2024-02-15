import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';

import './Home.css'
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
      <NavBar />
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

       

      <Card sx={{ maxWidth: 1745, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 640 }}
          image="https://images.pexels.com/photos/1587292/pexels-photo-1587292.jpeg?auto=compress&cs=tinysrgb&w=600"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Gala Glitz
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Thinking out of the box it’s not easy every time and for everyone. It requires hard work, courage, and budget juggling. However, the results can exceed our expectations. If you have a very special request from a client, or you are going for innovation to give a boost to your results, have a sip of inspiration from these authors.

          “If you can visualize it, if you can dream it, there’s some way to do it.” Walt Disney
          Walt Disney always invites us not to consider it impossible, yet. Think again: how could you make it work? Event professionals are experts on turning dreams into reality. If you can relate to this quote, maybe it’s not the time yet to call it quits on those crazy ideas, give them a try! If they don’t work we have a quote section about setbacks to help you to go through that.
          
          “The most important thing in life is to stop saying ‘I wish’ and start saying ‘I will.’ Consider nothing impossible, then treat possibilities as probabilities.” Charles Dickens
          It’s a good thing that we can see right away the difficulties and constraints of implementing what seems an impossible idea. It means that we are connected to reality, and we can acknowledge the constraints of a situation. But staying there without considering the possibility to make it happen, will limit your growth. Let’s follow Charles Dicken’s advice, and let our events wow everyone, ourselves included.
          
          “Innovation is the ability to see change as an opportunity – not a threat” Steve Jobs
          Easier said than done, right? Change brings an uncomfortable adaptation period to most of us. But if you consider that the fundamentals always stay the same (our core values, our human needs, fears, and aspirations), you’ll see that the only things that change are external forms and not the common ground.
          “To do the impossible, you need to ignore the popular.”  Tim FerrissIt’s tempting to follow the trends and do the same thing as everyone else. However, it may happen that the popular it’s not what your event audience needs. Don’t be afraid to build what you believe it’s right for your audience, even if not on the “best practices book”.


          </Typography>
        </CardContent>
        <CardActions>
        
        </CardActions>
      </Card>
  
      
    </div>
    </div>
  );
}
export default Home;