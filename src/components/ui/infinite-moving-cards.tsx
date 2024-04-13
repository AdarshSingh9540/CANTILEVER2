import * as React from 'react';
import { cn } from '../../utils/cn';
import { useEffect ,useState } from 'react';
import { Link } from '@mui/material';

export const InfiniteMovingCards = ({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  const [news, setNews] = React.useState<ApiResponse | null>(null);

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

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bec4aae11a2d4dc2b97c5220c373f271'
        );
        const data: ApiResponse = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {news &&
          news.articles.map((article, idx) => (
            <Link key={idx} href={article.url} target="_blank" rel="noopener noreferrer" className="link">
              <li
                className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                style={{
                  background:
                    'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                  maxWidth: '350px',
                  maxHeight: '480px',
                }}
              >
                <blockquote>
                  <img src={article.urlToImage} alt="" className="w-[100%]" />
                  <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {article.title}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                    <span className=" text-sm leading-[1.1] text-gray-400 font-normal">
                              {truncateDescription(article.description, 100)}
                              {article.description.length > 100 && <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More...</a>}
                            </span>

                      <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', color: 'white', alignItems: 'flex-end' }}>
                        <p>{article.author}</p>
                        <p>{article.publishedAt}</p>
                      </div>
                    </span>
                  </div>
                </blockquote>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
