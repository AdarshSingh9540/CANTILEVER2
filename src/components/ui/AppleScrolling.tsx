import * as React from 'react';
import { cn } from '../../utils/cn';
import { useEffect, useState } from 'react';

export const AppleScrolling = ({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items?: {
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

  const hardcodedArticles = [
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Guille Lomener",
      "title": "La OCU alerta sobre las estafas y abusos más comunes de los festivales de verano. Así es la función del iPhone para protegerte que muy pocos conocen",
      "description": "Verano es sinónimo de festivales, y es que a quién no le gusta estar con su grupo de amigos sintiendo la música. Este año habrá cientos de festivales en España y llegar hasta ellos puede salirte mucho más barato gracias al Verano Joven. Sin embargo, o bien po…",
      "url": "https://www.applesfera.com/seguridad/ocu-alerta-estafas-abusos-comunes-festivales-verano-asi-funcion-iphone-para-protegerte-que-muy-pocos-conocen",
      "urlToImage": "https://i.blogs.es/d408d2/roland-denes-jo8yltxyrhg-unsplash/840_560.jpeg",
      "publishedAt": "2024-06-28T17:00:53Z",
      "content": "Verano es sinónimo de festivales, y es que a quién no le gusta estar con su grupo de amigos sintiendo la música. Este año habrá cientos de festivales en España y llegar hasta ellos puede salirte much… [+4266 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Álvaro García M.",
      "title": "Esta mujer de Ourense estaba comprando disfraces en un bazar chino, entró en el sorteo de un iPhone de 1.600 euros y pensó que era una estafa: \"no me lo podía creer\"",
      "description": "No son pocas las estafas relacionadas con ganar un iPhone. Generalmente son fáciles de detectar, dado que llegan por email o SMS con una forma un tanto particular que hace evidente el timo. Sin embargo, no es tan habitual que sea una estafa si se realiza en u…",
      "url": "https://www.applesfera.com/curiosidades/esta-mujer-ourense-estaba-comprando-disfraces-bazar-chino-entro-sorteo-iphone-1-600-euros-penso-que-era-estafa-no-me-podia-creer",
      "urlToImage": "https://i.blogs.es/847c8b/ourense/840_560.jpeg",
      "publishedAt": "2024-06-28T11:01:57Z",
      "content": "No son pocas las estafas relacionadas con ganar un iPhone. Generalmente son fáciles de detectar, dado que llegan por email o SMS con una forma un tanto particular que hace evidente el timo. Sin embar… [+3131 chars]"
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
    {
      "source": {
        "id": null,
        "name": "MakeUseOf"
      },
      "author": "Hailea Stone",
      "title": "If You Only Use Shazam to Recognize Music, You're Missing Out",
      "description": "If you have the Shazam app, make sure you're not missing out on these underrated features!",
      "url": "https://www.makeuseof.com/shazam-most-underated-features/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/06/shazam-logo-on-smartphone-screen.jpg",
      "publishedAt": "2024-06-28T10:00:11Z",
      "content": "Key Takeaways\r\n<ul><li>\r\n Try Shazam Widgets on iOS for quick song identification directly from your home or lock screen.\r\n </li><li>\r\n Stay connected with Offline Mode and Auto Shazam to identify so… [+6937 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theregister.com"
      },
      "author": "Brandon Vigliarolo",
      "title": "Apple crippled watchOS to corner heart-tracking market, heart doctors say",
      "description": "Normally it's the iGiant's prices that give the ol' ticker a hard time\nA quartet of heart doctors are trying to resuscitate heart monitoring tech outfit AliveCor's antitrust lawsuit regarding the Apple Watch, by arguing changes made to the iMaker's gadget \"re…",
      "url": "https://www.theregister.com/2024/06/28/apple_watch_alivecor/",
      "urlToImage": "https://regmedia.co.uk/2022/06/10/watch_shutterstock.jpg",
      "publishedAt": "2024-06-28T01:48:01Z",
      "content": "A quartet of heart doctors are trying to resuscitate heart monitoring tech outfit AliveCor's antitrust lawsuit regarding the Apple Watch, by arguing changes made to the iMaker's gadget \"resulted in a… [+4442 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phandroid - News for Android"
      },
      "author": "Mike Viray",
      "title": "Grab the Roku Streaming Stick for 30% Less!",
      "description": "Get access to Roku's content library for less than usual.\nThe post Grab the Roku Streaming Stick for 30% Less! appeared first on Phandroid.",
      "url": "https://phandroid.com/2024/06/28/grab-the-roku-streaming-stick-for-30-less/",
      "urlToImage": "https://phandroid.com/wp-content/uploads/2024/06/roku-streaming-stick.png",
      "publishedAt": "2024-06-28T20:40:11Z",
      "content": "For buyers after an affordable way to get streaming services on their TV without having to purchase an entirely separate smart TV, there are a number of plug-and-play streaming sticks available out t… [+656 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phandroid - News for Android"
      },
      "author": "Tyler Lee",
      "title": "Renders of the Samsung Galaxy Watch 7 and Galaxy Buds 3 leaked!",
      "description": "Thanks to a leak by tipster Evan Blass, renders of the Samsung Galaxy Watch and Galaxy Buds 3 have made their way online!\nThe post Renders of the Samsung Galaxy Watch 7 and Galaxy Buds 3 leaked! appeared first on Phandroid.",
      "url": "https://phandroid.com/2024/06/28/renders-of-the-samsung-galaxy-watch-7-and-galaxy-buds-3-leaked/",
      "urlToImage": "https://phandroid.com/wp-content/uploads/2024/05/galaxy-watch-7-ultra.webp",
      "publishedAt": "2024-06-28T11:40:09Z",
      "content": "Samsung has recently confirmed that the next Galaxy Unpacked event will take place on the 10th of July. This is only a couple of weeks from now, but in case you cant wait, then youre in luck. Thanks … [+1082 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phandroid - News for Android"
      },
      "author": "Mike Viray",
      "title": "Android Auto Makes its Way to the Lucid Air",
      "description": "Expect more versatility in terms of infotainment features.\nThe post Android Auto Makes its Way to the Lucid Air appeared first on Phandroid.",
      "url": "https://phandroid.com/2024/06/28/android-auto-makes-its-way-to-the-lucid-air/",
      "urlToImage": "https://phandroid.com/wp-content/uploads/2024/06/lucid-air-640x336.png",
      "publishedAt": "2024-06-28T21:21:18Z",
      "content": "With platforms like Apple CarPlay and Android Auto, more people can experience the conveniences associated with smartphone integration. These features are quite standard on a lot of cars and automotive… [+697 chars]"
    }
  ];
  

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

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return `${title.slice(0, maxLength)}...`;
    }
    return title;
  };

  return (
    <>
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
          {hardcodedArticles.map((article, idx) => (
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
                    <img src={article.urlToImage} alt="" className="w-[100%] h-40" />
                    <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {truncateTitle(article.title, 80)}
                      {/* {article.title} */}
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
              </a>
            )
          ))}
        </ul>
      </div>
    </>
  );
};
