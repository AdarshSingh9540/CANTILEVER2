import React from 'react';
import { Card, CardHeader, Avatar, IconButton, Typography, CardMedia, CardContent, CardActions, Collapse, Link } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { fetchNewsData } from './Helper';

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export default function Body() {
  const [expanded, setExpanded] = React.useState<number | null>(null);
  const [news, setNews] = React.useState<ApiResponse | null>(null);
  const [likes, setLikes] = React.useState<number[]>([]);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  React.useEffect(() => {
    const data1: ApiResponse | null = fetchNewsData(); 
    setNews(data1);
    setLikes(new Array(data1?.articles.length || 0).fill(0)); 
  }, []);

  const handleLike = (index: number) => {
    setLikes(prevLikes => {
      const newLikes = [...prevLikes];
      newLikes[index] += 1;
      return newLikes;
    });
  };

  const handleShare = async (articleUrl: string, articleTitle: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: articleTitle,
          url: articleUrl,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
     
      console.log('Web Share API not supported');
     
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 bg-black m-6">
      {!news ? (
        Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>Loading...</div>
        ))
      ) : (
        news.articles.map((article, index) => (
          article.urlToImage && (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-1000 max-w-345 mb-20 text-white shadow-md transition-transform ease-in duration-300 hover:scale-105 transform hover:duration-300"
              style={{
                background: 'linear-gradient(180deg, var(--slate-800), var(--slate-1000))',
                maxWidth: 345,
                marginBottom: '20px',
                color: "white",
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
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
                subheader={<Typography variant="subtitle2" sx={{ color: 'white' }}>{article.publishedAt}</Typography>}
              />
              <CardMedia
                component="img"
                style={{ height: '220px', width: '90%', justifySelf: 'center', marginLeft: "15px" }}
                image={article.urlToImage}
                alt="Article Image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" style={{ color: "white" }}>
                  {article.title}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{ color: "white" }}>
                <IconButton onClick={() => handleLike(index)} aria-label="add to favorites" style={{ color: "white" }}>
                  <FavoriteIcon style={{ color: likes[index] > 0 ? "red" : "white" }} />
                  {likes[index] > 0 && <div className='text-white'>{likes[index]}</div>}
                </IconButton>
                <IconButton aria-label="share" style={{ color: "white" }} onClick={() => handleShare(article.url, article.title)}>
                  <ShareIcon />
                </IconButton>
                <IconButton
                  style={{ color: "white" }}
                  aria-expanded={expanded === index}
                  onClick={() => handleExpandClick(index)}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>

              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <Link key={index} href={article.url} style={{ textDecoration: "none", cursor: "pointer" }}>               
                  <CardContent>
                    <Typography style={{ color: "white" }} paragraph>Description:</Typography>
                    <Typography style={{ color: "white" }} paragraph>{article.description}</Typography>
                    <Typography style={{ color: "#39CCCC" }} paragraph> By - {article.author} <span className='text-white'>|</span> {article.publishedAt}</Typography>
                  </CardContent>
                </Link>
              </Collapse>
            </Card>
          )
        ))
      )}
    </div>
  );
}
