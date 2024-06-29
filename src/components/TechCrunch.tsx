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

export default function TechCrunch() {
  const [expanded, setExpanded] = React.useState<number | null>(null);
  const [news, setNews] = React.useState<ApiResponse | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bec4aae11a2d4dc2b97c5220c373f271");
        const data = await response.json();
        setNews(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <h1 className='text-white font-bold text-4xl m-6 p-4'>Top headlines from TechCrunch :</h1>
    <div style={{color:"white"}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 bg-black m-8">
      {news && news.articles.map((article, index) => ( article.urlToImage && (
        <Card  style={{background: 'linear-gradient(180deg, var(--slate-800), var(--slate-700)'}} key={index} sx={{ maxWidth: 345, marginBottom: '20px', background:"black" , color:"white" ,transition: 'transform 0.3s ease',
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
              {/* <Typography style={{color:"white"}} paragraph>Content:</Typography>
              <Typography style={{color:"white"}} paragraph>{article.content}</Typography> */}
            </CardContent>
          </Collapse>
        </Card>
      )
      ))}
    </div>
    </>
  );
}
