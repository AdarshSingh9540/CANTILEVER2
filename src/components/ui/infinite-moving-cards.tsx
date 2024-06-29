import * as React from 'react';
import { cn } from '../../utils/cn';
import { useEffect, useRef } from 'react';

export const InfiniteMovingCards = ({
  direction = 'left',
  speed = 'slow',
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

  const [start, setStart] = React.useState(false);

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

  const truncateDescription = (description: string, maxLength: number) => {
    if (description?.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  const infiniteData = {
    articles: [
      {
        author: "Lauren Forristal",
        content: "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents.\r\nThe company announced Wednesday that it … [+6416 chars]",
        description: "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI Research company Altera raised $9 million to build AI agents that can play video games alongside other player…",
        publishedAt: "2024-05-08T15:14:57Z",
        source: {
          id: "techcrunch",
          name: "TechCrunch"
        },
        title: "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
        url: "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720"
      },
      {
        author: "Alex Wilhelm and Theresa Loconsolo",
        content: "Good news, crypto founders: Venture capital activity is picking up in your sector after falling to multi-year lows in late 2023. Put another way, venture folks appear more web3-bullish than before, e… [+1599 chars]",
        description: "This morning on Equity, not only do we have good news for crypto founders, we're also digging into Akamai spending $450 million for API security firm Noname, and billion dollar deals from Wiz and Wayve.",
        publishedAt: "2024-05-08T15:01:51Z",
        source: {
          id: "techcrunch",
          name: "TechCrunch"
        },
        title: "$450M for Noname, two billion-dollar rounds, and good news for crypto startups | TechCrunch",
        url: "https://techcrunch.com/2024/05/08/450m-for-noname-two-billion-dollar-rounds-and-good-news-for-crypto-startups/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835"
      },
      {
        author: "Alex Wilhelm",
        content: "Apple’s iPad event had a lot to like. New iPads with new chips and new sizes, a new Apple Pencil, and even some software updates. If you are a big fan of Apple hardware, well, it was probably a good … [+1385 chars]",
        description: "Would you switch out your MacBook for an iPad with an M4 chip and OLED display? With the increase in price, Apple seems to be arguing these are comparable but we’re curious to see if consumers will make the change.",
        publishedAt: "2024-05-08T14:52:26Z",
        source: {
          id: "techcrunch",
          name: "TechCrunch"
        },
        title: "Watch: When did iPads get as expensive as MacBooks?",
        url: "https://techcrunch.com/2024/05/08/techcrunch-minute-when-did-ipads-get-as-expensive-as-macbooks/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675"
      },
      {
        author: "Rebecca Bellan",
        content: "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions. \r\nYou will see more member-exclusives coming up where members … [+4676 chars]",
        description: "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions.  “You will see",
        publishedAt: "2024-05-08T14:41:36Z",
        source: {
          id: "techcrunch",
          name: "TechCrunch"
        },
        title: "Uber promises member exclusives as Uber One passes $1B run-rate | TechCrunch",
        url: "https://techcrunch.com/2024/05/08/uber-promises-member-exclusives-as-uber-one-passes-1b-run-rate/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1142304853-a.jpg?resize=1200,675"
      },
      {
        author: "Mike Butcher",
        content: "Weve all seen them. The inspector with a clipboard, walking around a building, ticking off the last time the fire extinguishers were checked, or if all the lights are working. They work in the TICC (… [+3279 chars]",
        description: "Checkfirst enables businesses to schedule inspectors based on geographical location and qualifications, in addition to allowing for remote inspections.",
        publishedAt: "2024-05-08T13:02:12Z",
        source: {
          id: "techcrunch",
          name: "TechCrunch"
        },
        title: "Checkfirst raises $1.5M pre-seed, applying AI to remote inspections and audits | TechCrunch",
        url: "https://techcrunch.com/2024/05/08/checkfirst-raises-1-5m-pre-seed-applying-ai-to-remote-inspections-and-audits/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Checkfirst-team.jpg?w=960"
      },
      {
        author: "Paul Sawers",
        content: "Monzo has raised another £150 million ($190 million), as the challenger bank looks to expand its presence internationally particularly in the U.S.\r\nThe new round comes just two months after Monzo rai… [+1960 chars]",
        description: "Monzo has raised another $190 million, as the challenger bank looks to expand its presence internationally — particularly in the U.S.",
        publishedAt: "2024-05-08T12:34:05Z",
        source: {
          id: "techcrunch",
          name: "TechCrunch"
        },
        title: "UK challenger bank Monzo nabs another $190M as US expansion beckons | TechCrunch",
        url: "https://techcrunch.com/2024/05/08/uk-challenger-bank-monzo-nabs-another-190m-at-5-2b-valuation/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1259121938-e1715164252704.jpg?resize=1200,676"
      },
      // {
      //   author: "Brian Heater",
      //   content: "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previous held chief executive role at Timex and Qualitor Automotive, will be heading up the company, marking a maj… [+2127 chars]",
      //   description: "iRobot has announced a successor to its longtime CEO, Colin Angle. Gary Cohen, who previously held the chief executive role at Timex and Qualitor Automotive, will be taking over as head of the company.",
      //   publishedAt: "2024-05-08T12:30:21Z",
      //   source: {
      //     id: "techcrunch",
      //     name: "TechCrunch"
      //   },
      //   title: "iRobot taps Gary Cohen as new CEO, replacing founder Colin Angle | TechCrunch",
      //   url: "https://techcrunch.com/2024/05/08/irobot-taps-gary-cohen-as-new-ceo/",
      //   urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/irobot.png?resize=1200,630"
      // },
      // {
      //   author: "Lucas Matney",
      //   content: "Nvidia unveiled new hardware specifically designed for advanced robotics and autonomous systems, specifically, Jetson Orin NX, a new developer kit that uses its latest GPU technology and promises to d… [+1615 chars]",
      //   description: "Nvidia unveils Jetson Orin NX, a new developer kit with advanced robotics features, as part of its efforts to provide more powerful tools for AI and machine learning in edge devices.",
      //   publishedAt: "2024-05-08T12:00:24Z",
      //   source: {
      //     id: "techcrunch",
      //     name: "TechCrunch"
      //   },
      //   title: "Nvidia unveils Jetson Orin NX, new developer kit for robotics and autonomous systems | TechCrunch",
      //   url: "https://techcrunch.com/2024/05/08/nvidia-unveils-jetson-orin-nx-new-developer-kit-for-robotics-and-autonomous-systems/",
      //   urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/jetson_orin_nx_1x1.jpg?resize=1200,1200"
      // },
      // {
      //   author: "Kate Park",
      //   content: "Microsoft is working on a method to use blockchain to protect the data stored on its cloud platform, Azure. The technology will be integrated into Microsoft’s cloud offerings to allow its customers to … [+1932 chars]",
      //   description: "Microsoft is exploring the use of blockchain to secure data stored on its Azure cloud platform, which could offer enhanced security and data integrity for its customers.",
      //   publishedAt: "2024-05-08T11:23:59Z",
      //   source: {
      //     id: "techcrunch",
      //     name: "TechCrunch"
      //   },
      //   title: "Microsoft's new blockchain technology to secure Azure data | TechCrunch",
      //   url: "https://techcrunch.com/2024/05/08/microsofts-new-blockchain-technology-to-secure-azure-data/",
      //   urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1342781512-e1715221979644.jpg?resize=1200,800"
      // },
      // {
      //   author: "Aisha Malik",
      //   content: "Blockchain is a popular technology, and it has become a buzzword in the industry. It is known for its security and decentralization. However, it has some disadvantages too. In this article, we will d… [+5153 chars]",
      //   description: "Blockchain is a popular technology known for its security and decentralization. However, it has some disadvantages too. This article explores the pros and cons of blockchain technology.",
      //   publishedAt: "2024-05-08T11:00:15Z",
      //   source: {
      //     id: "techcrunch",
      //     name: "TechCrunch"
      //   },
      //   title: "Pros and Cons of Blockchain Technology | TechCrunch",
      //   url: "https://techcrunch.com/2024/05/08/pros-and-cons-of-blockchain-technology/",
      //   urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/blockchain-technology.jpg?resize=1200,675"
      // },
      // {
      //   author: "Ron Miller",
      //   content: "Companies face a range of legal, regulatory, and compliance challenges when managing sensitive data. In this article, we'll explore how AI can help organizations address these challenges and enhance … [+4866 chars]",
      //   description: "AI can help organizations address legal, regulatory, and compliance challenges related to managing sensitive data. This article explores how AI technologies can enhance data governance and compliance efforts.",
      //   publishedAt: "2024-05-08T10:15:14Z",
      //   source: {
      //     id: "techcrunch",
      //     name: "TechCrunch"
      //   },
      //   title: "AI is reshaping data governance and compliance | TechCrunch",
      //   url: "https://techcrunch.com/2024/05/08/ai-is-reshaping-data-governance-and-compliance/",
      //   urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/AI-data-governance.jpg?resize=1200,800"
      // },
      // {
      //   author: "Walter Thompson",
      //   content: "Cybersecurity is a growing concern for businesses of all sizes. As cyber threats continue to evolve, organizations need to adopt proactive measures to protect their data and networks. In this article,… [+4503 chars]",
      //   description: "As cyber threats continue to evolve, organizations need to adopt proactive measures to protect their data and networks. This article explores the importance of cybersecurity and provides tips for enhancing cybersecurity measures.",
      //   publishedAt: "2024-05-08T09:30:29Z",
      //   source: {
      //     id: "techcrunch",
      //     name: "TechCrunch"
      //   },
      //   title: "Enhancing cybersecurity measures in a changing threat landscape | TechCrunch",
      //   url: "https://techcrunch.com/2024/05/08/enhancing-cybersecurity-measures-in-a-changing-threat-landscape/",
      //   urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Cybersecurity-threat-landscape.jpg?resize=1200,800"
      // }
    ]
  };

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
        {infiniteData.articles.map((article, idx) => (
          <a key={idx} href={article.url} target="_blank" rel="noopener noreferrer" className="link">
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
                <img src={article?.urlToImage} alt="" className="w-[100%] h-40" />
                <span className=" relative z-20  leading-[1.6]  text-gray-100 ">
                  {article?.title}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className=" text-sm leading-[1.1] text-gray-400 font-normal">
                      {truncateDescription(article?.description, 100)}
                      {article?.description?.length > 100 && (
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          Read More...
                        </a>
                      )}
                    </span>
                    <div className='text-purple-200' style={{ fontSize: '12px', display: 'flex', flexDirection: 'column',  alignItems: 'flex-end' }}>
                      <p>{article?.author}</p>
                      <p>{article?.publishedAt}</p>
                    </div>
                  </span>
                </div>
              </blockquote>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
