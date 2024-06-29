// import * as React from 'react';
// import { cn } from '../../utils/cn';
// import { useEffect ,useState } from 'react';

// export const InfiniteScrolling = ({
 
//   direction = 'left',
//   speed = 'fast',
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     quote: string;
//     name: string;
//     title: string;
//   }[];
//   direction?: 'left' | 'right';
//   speed?: 'fast' | 'normal' | 'slow';
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);

//   useEffect(() => {
//     addAnimation();
//   }, []);

//   const [start, setStart] = useState(false);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === 'left') {
//         containerRef.current.style.setProperty('--animation-direction', 'forwards');
//       } else {
//         containerRef.current.style.setProperty('--animation-direction', 'reverse');
//       }
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === 'fast') {
//         containerRef.current.style.setProperty('--animation-duration', '20s');
//       } else if (speed === 'normal') {
//         containerRef.current.style.setProperty('--animation-duration', '40s');
//       } else {
//         containerRef.current.style.setProperty('--animation-duration', '80s');
//       }
//     }
//   };

//   const [news, setNews] = React.useState<ApiResponse | null>(null);

//   interface Article {
//     source: {
//       id: string | null;
//       name: string;
//     };
//     author: string;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     content: string;
//   }

//   interface ApiResponse {
//     status: string;
//     totalResults: number;
//     articles: Article[];
//   }

  
//   const truncateDescription = (description: string, maxLength: number) => {
//     if (description.length > maxLength) {
//       return `${description.slice(0, maxLength)}...`;
//     }
//     return description;
//   };


//   React.useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=cb5869b1c2bb49b2aeaabaaf9e98c62d'
//         );
//         const data: ApiResponse = await response.json();
//         setNews(data);
//         console.log(data)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className={cn(
//           'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
//           className
//         )}
//       >
//         <ul
//           ref={scrollerRef}
//           className={cn(
//             ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
//             start && 'animate-scroll ',
//             pauseOnHover && 'hover:[animation-play-state:paused]'
//           )}
//         >
//           {news && (
//             <>
//               {news.articles.map((article, idx) => (
//                 article.urlToImage && (
//                   <a key={idx} href={article?.url} target="_blank" rel="noopener noreferrer" className="link ">
//                     <li
//                       className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
//                       style={{
//                         background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
//                         maxWidth: '350px',
//                         maxHeight: '480px',
//                       }}
//                     >
//                       <blockquote>
//                         <img src={article?.urlToImage} alt="" className="w-[100%]" />
//                         <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
//                           {article?.title}
//                         </span>
//                         <div className="relative z-20 mt-6 flex flex-row items-center">
//                           <span className="flex flex-col gap-1">
//                           <span className=" text-sm leading-[1.1] text-gray-400 font-normal">
//                               {truncateDescription(article.description, 100)}
//                               {article?.description?.length > 100 && <a href={article?.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More...</a>}
//                             </span>

//                             <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', color: 'white', alignItems: 'flex-end' }}>
//                               <p>{article?.author}</p>
//                               <p>{article?.publishedAt}</p>
//                             </div>
//                           </span>
//                         </div>
//                       </blockquote>
//                     </li>
//                   </a>
//                 )
//               ))}
//             </>
//           )}
//         </ul>
//       </div>
//     </>
//   );
  
// };


import { cn } from '../../utils/cn';
import { useEffect, useRef, useState } from 'react';

export const InfiniteScrolling = ({
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
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

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

  const news = {
    articles: [
      {
        author: "Ben Glickman",
        content: "A trade group representing carmakers is pushing back on a rule that requires automated emergency-braking systems in future vehicles, arguing the requirements are nearly impossible to meet and would b… [+418 chars]",
        description: "Industry says using the technology at higher speeds is impractical and too costly; regulators say the move would reduce accidents",
        publishedAt: "2024-06-24T20:29:34Z",
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal"
        },
        title: "Carmakers File Challenge to Parts of New Automatic-Braking Rule",
        url: "https://www.wsj.com/business/autos/carmakers-file-challenge-to-parts-of-new-automatic-braking-rule-ebb653e9",
        urlToImage: "https://images.wsj.net/im-973059/social"
      },
      {
        author: "Dalvin Brown and Katherine Hamilton",
        content: "Artificial intelligence is making scammers tougher to spot.\r\nGone are the poorly worded messages that easily tipped off authorities as well as the grammar police. The bad guys are now better writers … [+6695 chars]",
        description: "Your “spidey sense” is no match for the new wave of scammers.",
        publishedAt: "2024-06-22T09:30:00Z",
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal"
        },
        title: "AI is helping scammers outsmart you and your bank",
        url: "https://www.wsj.com/tech/cybersecurity/ai-is-helping-scammers-outsmart-youand-your-bank-23bbbced",
        urlToImage: "https://s.yimg.com/ny/api/res/1.2/acKydOhkcMvbgM.yY5db1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/21e7efc0aea5c3b1caf01f3d592c2a6c"
      },
      {
        author: "David Uberti and Nick Timiraos",
        content: "Wednesdays inflation report was better than many investors expectations. - Richard B. Levine/Zuma Press\r\nU.S. inflation slowed in May, an ease in price pressures that should boost the likelihood of i… [+3743 chars]",
        description: "The consumer-price index, a measure of goods and service costs across the economy, rose 3.3% annually last month, the Labor Department said.",
        publishedAt: "2024-06-12T13:03:00Z",
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal"
        },
        title: "Inflation Eased to 3.3% in May, Slightly Lower Than Expected",
        url: "https://www.wsj.com/economy/central-banking/cpi-report-fed-meeting-interest-rate-ef93c8b0",
        urlToImage: "https://s.yimg.com/ny/api/res/1.2/MQ2IN8h7LygvL1ShbuIRHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/1cae6e07480042bda7bff5f02cf76482"
      },
      {
        author: null,
        content: "The NBA is nearing completion of a combined 11-year, $76 billion set of deals with Disney, NBC and Amazon. The deals average out to $6.9 billion per season for the NBA, which is more than 2.5 times h… [+1748 chars]",
        description: "The NBA is nearing completion of a combined 11-year, $76 billion set of deals with Disney, NBC and Amazon. The deals average out to $6.9 billion per season for the NBA, which is more than 2.5 times higher than its existing deals. The NFL recently doubled its …",
        publishedAt: "2024-06-05T15:23:19Z",
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal"
        },
        title: "NBA Close To Finalizing 11-Year, $76 Billion Combined Deals With Disney, NBC, Amazon",
        url: "https://www.wsj.com/business/media/nba-nears-76-billion-tv-deal-a-defining-moment-for-media-and-sports",
        urlToImage: "https://basketball.realgm.com/images/nba/4.2/wiretap/photos/2006/Silver_Adam_nba_240515.jpg"
      },
      {
        "source": {
          "id": null,
          "name": "MakeUseOf"
        },
        "author": "Dreamchild Obari",
        "title": "These Features Make the ChatGPT Desktop App Better Than the Website",
        "description": "ChatGPT's desktop version is here and is well worth using instead of the website.",
        "url": "https://www.makeuseof.com/features-make-chatgpt-desktop-app-better-than-website/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/06/chatgpt-desktop-version-on-macos.jpg",
        "publishedAt": "2024-06-28T15:30:12Z",
        "content": "Key Takeaways\r\n<ul><li>\r\n The ChatGPT app for macOS introduces Voice Mode and a convenient launcher, allowing users to access ChatGPT from any window on their Mac.\r\n </li><li>\r\n The macOS app include… [+5006 chars]"
      },
    ]
  };

  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
            start && 'animate-scroll',
            pauseOnHover && 'hover:[animation-play-state:paused]'
          )}
        >
          {news.articles.map((article, idx) => (
            article.urlToImage && (
              <a key={idx} href={article.url} target="_blank" rel="noopener noreferrer" className="link">
                <li
                  className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                  style={{
                    background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                    maxWidth: '350px',
                    maxHeight: '480px',
                  }}
                >
                  <blockquote>
                    <img src={article.urlToImage} alt="" className="w-[100%] h-40"  />
                    <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                      {article.title}
                    </span>
                    <div className="relative z-20 mt-6 flex flex-row items-center">
                      <span className="flex flex-col gap-1">
                        <span className="text-sm leading-[1.1] text-gray-400 font-normal">
                          {article.description && article?.description.length > 100
                            ? `${article.description.slice(0, 100)}...`
                            : article.description}
                          {article?.description && article?.description.length > 100 && (
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                              Read More...
                            </a>
                          )}
                        </span>
                        <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', color: 'white', alignItems: 'flex-end' }}>
                          <p>{article.author}</p>
                          <p>{article.publishedAt}</p>
                        </div>
                      </span>
                    </div>
                  </blockquote>
                </li>
              </a>
            )
          ))}
        </ul>
      </div>
    </>
  );
};
