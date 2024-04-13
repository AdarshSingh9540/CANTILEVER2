import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Shimmer from './Shimmer'; // Import the shimmer component
import { Link } from '@mui/material';

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export default function Body() {
  const [expanded, setExpanded] = React.useState<number | null>(null);
  const [news, setNews] = React.useState<ApiResponse | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cb5869b1c2bb49b2aeaabaaf9e98c62d");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 bg-black m-4">
      {!news ? (
        Array.from({ length: 8 }).map((_, index) => (
          <Shimmer key={index} />
        ))
      ) : (
        news.articles.map((article, index) => (
       
          article.urlToImage && (
           <Link href={article.url} style={{textDecoration:"none" , cursor:"pointer"}}>
             <Card key={index} sx={{ maxWidth: 345, marginBottom: '20px', background:"black" , color:"white" , border:"2px solid gray",transition: 'transform 0.3s ease',
              '&:hover': {transform: 'scale(1.05)',  },
            }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {article.author ? article.author.charAt(0) : ''}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon style={{ color: 'white' }} />
                  </IconButton>
                }
                title={article.source.name}
                subheader={
                  <Typography variant="subtitle2" sx={{ color: 'white' }}>
                    {article.publishedAt}
                  </Typography>
                }
              />
              <CardMedia 
                component="img"
                style={{ height: '220px', width: '90%', justifySelf: 'center' , marginLeft:"15px" }}
                image={article.urlToImage}
                alt="Article Image"
              />
              <CardContent >
                <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
                  {article.title}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{color:"white"}}> 
                <IconButton aria-label="add to favorites" style={{color:"white"}}>
                  <FavoriteIcon style={{color:"white"}} />
                </IconButton>
                <IconButton aria-label="share" style={{color:"white"}}>
                  <ShareIcon />
                </IconButton>
                <IconButton
                  style={{color:"white"}}
                  aria-expanded={expanded === index}
                  onClick={() => handleExpandClick(index)}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography style={{color:"white"}}  paragraph>Description:</Typography>
                  <Typography style={{color:"white"}} paragraph>{article.description}</Typography>
                </CardContent>
              </Collapse>
            </Card>
           
           </Link>
          )
        ))
      )}
    </div>
  );
}
