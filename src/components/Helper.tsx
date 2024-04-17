// import React from 'react';

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string|null;
  url: string;
  urlToImage: string|null;
  publishedAt: string | null;
  content: string | null;
}

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

// Define your hardcoded data
// Define your hardcoded data
const hardcodedData: ApiResponse = {
    status: "ok",
    totalResults: 33,
    articles: [
      {
        "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
        },
        "author": "Ashlea Ebeling",
        "title": "H&R Block’s Tax Day outage frustrates last-minute filers - Fox Business",
        "description": "H&R Block (HRB) said it experienced technology outages on Monday, temporarily preventing thousands of last-minute tax filers from sending in their returns.",
        "url": "https://www.wsj.com/personal-finance/taxes/hr-block-outage-tax-day-2024-16789a21?mod=hp_listc_pos3",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/02/0/0/HR-Block-Branch.jpg?ve=1&tl=1",
        "publishedAt": "2024-04-16T01:14:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "The Detroit News"
        },
        "author": "Detroit News",
        "title": "GM says it will move headquarters from RenCen to Hudson's site in 2025 - Detroit News",
        "description": null,
        "url": "https://www.detroitnews.com/story/business/autos/general-motors/2024/04/15/gm-to-move-headquarters-from-rencen-to-hudsons-site/73326824007/",
        "urlToImage": null,
        "publishedAt": "2024-04-16T01:01:40Z",
        "content": null
      },{
        "source": {
          "id": null,
          "name": "Fox Business"
        },
        "author": "Nikolas Lanum",
        "title": "California housing crisis turning many working-class towns into 'million-dollar cities': Report - Fox Business",
        "description": "Once quaint California towns with working class residents are now turning into cities where homes exceeding $1 million is considered the norm, a new report says.",
        "url": "https://www.foxbusiness.com/media/california-housing-crisis-turning-working-class-towns-million-dollar-cities",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/04/0/0/California-home-prices.png?ve=1&tl=1",
        "publishedAt": "2024-04-16T01:00:00Z",
        "content": "A growing list of California cities are reeling from the ongoing housing crisis, with once working-class towns seeing median home prices exceeding $1 million.\r\nAccording to The Los Angeles Times, Pla… [+2478 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Victoria Waldersee",
        "title": "Tesla laying off more than 10% of staff globally as sales fall - Reuters",
        "description": "Tesla is laying off more than 10% of its global workforce, an internal memo seen by Reuters on Monday shows, as it grapples with falling sales and an intensifying price war for electric vehicles (EVs).",
        "url": "https://www.reuters.com/business/autos-transportation/tesla-lay-off-more-than-10-its-staff-electrek-reports-2024-04-15/",
        "urlToImage": "https://www.reuters.com/resizer/v2/YKQDJ362DVOMFP6BKB27JXSE4M.jpg?auth=1d44322339a355e807724a75308d673c9ca93d817eda0b461169cce5318e6dcf&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-04-15T23:32:27Z",
        "content": "BERLIN, April 15 (Reuters) - Tesla (TSLA.O)New Tab\r\n, opens new tab is laying off more than 10% of its global workforce, an internal memo seen by Reuters on Monday shows, as it grapples with falling … [+6205 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Reuters",
        "title": "US Justice Department to file antitrust suit against Live Nation, WSJ reports - Yahoo Finance",
        "description": "Live Nation's subsidiary Ticketmaster was widely criticized for its handling of Taylor Swift's \"Eras\" tour in 2022, feeding demands that the two companies be...",
        "url": "https://finance.yahoo.com/news/us-justice-department-file-antitrust-214340109.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/a0a10e9c95e0b489a2036dc699af1d7d",
        "publishedAt": "2024-04-15T23:07:03Z",
        "content": "(Reuters) -The U.S. Department of Justice is expected to file an antitrust lawsuit against Live Nation Entertainment as soon as next month, the Wall Street Journal reported on Monday, citing people f… [+1466 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Sarah Min",
        "title": "Stock futures are little changed after Dow's sixth straight losing day: Live updates - CNBC",
        "description": "Wall Street is coming off a losing day after a rise in yields and escalating Middle East tensions outweighed strong retail sales data.",
        "url": "https://www.cnbc.com/2024/04/15/stock-market-today-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107395614-1712072648894-gettyimages-2126121315-AFP_34NB6LJ.jpeg?v=1713204289&w=1920&h=1080",
        "publishedAt": "2024-04-15T23:06:00Z",
        "content": "U.S. stock futures were little changed Monday night after a losing day for the major benchmarks.\r\nDow Jones Industrial Average futures inched lower by 2 points, or 0.01%. S&amp;P 500 futures and Nasd… [+2012 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Chuck Mikolajczak",
        "title": "Stocks close lower as Middle East tensions, Treasury yields weigh - Reuters",
        "description": "U.S. stocks closed sharply lower on Monday, as an early lift from a strong retail sales report succumbed to a jump in Treasury yields and concerns about rising geopolitical tensions between Iran and Israel.",
        "url": "https://www.reuters.com/markets/us/futures-bounce-back-last-sessions-battering-amid-middle-east-jitters-2024-04-15/",
        "urlToImage": "https://www.reuters.com/resizer/v2/YLQIZXXGDRJEVEHIZKUOQYZFAA.jpg?auth=ae6d47ada871b4c0f606da8f94f326a75a744ec43bef803f58222b22a4e744e8&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-04-15T22:40:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph"
        },
        "author": "Cointelegraph",
        "title": "Bitcoin's spot price action does little to spook BTC options traders - Cointelegraph",
        "description": null,
        "url": "https://cointelegraph.com/news/bitcoin-spot-price-action-does-little-to-spook-btc-options-traders",
        "urlToImage": null,
        "publishedAt": "2024-04-15T22:20:09Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Leslie Josephs",
        "title": "Boeing defends 787 Dreamliner safety after whistleblower alleged structural flaws - CNBC",
        "description": "A whistleblower alleged that Boeing's 787 and 777 models have structural flaws",
        "url": "https://www.cnbc.com/2024/04/15/boeing-defends-787-dreamliner-safety-after-whistleblower-claims.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106910020-1626176437171-gettyimages-628756822-BOEING_DREAMLINER.jpeg?v=1686074880&w=1920&h=1080",
        "publishedAt": "2024-04-15T22:03:11Z",
        "content": "Boeing on Monday defended the quality and safety testing on its 787 Dreamliner and 777 aircraft, days after one of the company's engineers went public with allegations that the plane-maker took \"shor… [+3363 chars]"
      },
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Wes Davis",
        "title": "Cybertruck owners say deliveries halted over bad accelerator pedal - The Verge",
        "description": "Many Tesla Cybertruck buyers say their deliveries have been delayed, with some claiming to have been told an accelerator issue is to blame.",
        "url": "https://www.theverge.com/2024/4/15/24131237/tesla-delivery-delay-accelerator-pedal-stuck",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/9ImaY4sovTjKfDk87mpSWGfoFuo=/0x0:4032x3024/1200x628/filters:focal(2016x1512:2017x1513)/cdn.vox-cdn.com/uploads/chorus_asset/file/25073829/IMG_0618.jpg",
        "publishedAt": "2024-04-15T21:11:15Z",
        "content": "Cybertruck owners say deliveries halted over bad accelerator pedal\r\nCybertruck owners say deliveries halted over bad accelerator pedal\r\n / Some say a slippery pedal cover is to blame.\r\nByWes Davis, a… [+2274 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MarketWatch"
        },
        "author": "Joy Wiltermuth, Vivien Lou Chen, Christine Idzelis, Myra P. Saefong, Emily Bary, Joseph Adinolfi",
        "title": "Stock Market Today: Dow ends 250 points lower, bond yields jump on Mideast tensions - MarketWatch",
        "description": "Here's a recap of the action in markets Monday after a weekend in which Iran attacked Israel with drones and cruise missiles.",
        "url": "https://www.marketwatch.com/livecoverage/stock-market-today-dow-futures-climb-after-iran-attack-on-israel-causes-little-damage/card/dow-cements-longest-losing-streak-in-10-months-as-investors-focus-on-mideast-conflict-vAnn2RkmQ1uHPHl0mNn8",
        "urlToImage": "https://images.mktw.net/im-91784540/social",
        "publishedAt": "2024-04-15T20:43:00Z",
        "content": "Back to TopIntraday Data provided by FACTSET and subject to terms of use. Historical and current end-of-day data provided by FACTSET. All quotes are in local exchange time. Real-time last sale data f… [+136 chars]"
      },
      {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "USA TODAY",
        "title": "Tax Day 2024 updates: deadline, extension, free file, deals, refunds - USA TODAY",
        "description": null,
        "url": "https://www.usatoday.com/story/money/2024/04/15/tax-day-2024-live-updates/73293238007/",
        "urlToImage": null,
        "publishedAt": "2024-04-15T20:18:36Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Financial Times"
        },
        "author": "Harriet Clarfelt, George Steer, Kate Duguid",
        "title": "'Blowout' US retail sales shake bond and currency markets - Financial Times",
        "description": "Government debt sells off and dollar gains as latest sign of hot economy cools hopes of interest rate cuts",
        "url": "https://www.ft.com/content/c2879370-192c-438b-ba01-7a99788f459a",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F22a84b17-d94b-4182-a20d-85ae3407e262.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2024-04-15T19:33:16Z",
        "content": "A blowout March retail sales report sparked a sell-off in US government debt and shook global currency markets on Monday, in the latest sign that the worlds largest economy may be running too hot to … [+3639 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Jordan Valinsky",
        "title": "Today is the final day to claim your slice of a $100 million Verizon settlement - CNN",
        "description": "This Monday is the last day that some Verizon customers have the opportunity to receive a refund as part of a proposed $100 million settlement from a class-action lawsuit.",
        "url": "https://www.cnn.com/2024/04/15/tech/verizon-class-action-settlement-deadline/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-908934760.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-15T19:15:00Z",
        "content": "Monday is the last day for some Verizon customers to apply for a refund as part of a $100 million settlement from a class-action lawsuit.\r\nEarlier this year, the wireless carrier sent an email or pos… [+1835 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Bloomberg",
        "title": "American Air Pilots Cite ‘Significant’ Jump in Safety Issues | Mint - Mint",
        "description": "The union for American Airlines Group Inc. pilots warned members to be vigilant amid a “significant spike” in safety- and maintenance-related problems at the carrier.",
        "url": "https://www.livemint.com/news/american-air-pilots-cite-significant-jump-in-safety-issues-11713205305339.html",
        "urlToImage": "https://images.livemint.com/img/2018/12/28/1600x900/News_-_world_1545994908237.jpg",
        "publishedAt": "2024-04-15T18:21:44Z",
        "content": "(Bloomberg) -- The union for American Airlines Group Inc. pilots warned members to be vigilant amid a significant spike\" in safety- and maintenance-related problems at the carrier. The Allied Pilots … [+3084 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
      },
      {
        "source": {
          "id": null,
          "name": "The Points Guy"
        },
        "author": "Sean Cudahy",
        "title": "The busiest airports in the world in 2023, ranked - The Points Guy",
        "description": "Atlanta's Hartsfield-Jackson International Airport was the busiest airport in the world in 2023. It was the 25th time in 26 years it held the top spot.",
        "url": "https://thepointsguy.com/news/busiest-airports-in-the-world-2023/",
        "urlToImage": "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/04/airport-ATL.jpeg",
        "publishedAt": "2024-04-15T18:05:16Z",
        "content": "For the 25th time in 26 years, Hartsfield-Jackson Atlanta International Airport (ATL) was named the world's busiest airport.\r\nThe Georgia hub again took the top spot in Airports Council International… [+5257 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Healthcaredive.com"
        },
        "author": "Susanna Vogel",
        "title": "Medical Properties Trust selling spree continues, Utah deal closes - Healthcare Dive",
        "description": "The deal is expected to generate approximately $1.1 billion in in cash for the liquidity-strapped hospital landlord.",
        "url": "https://www.healthcaredive.com/news/medical-properties-trust-sale-commonspirit-health-utah/713138/",
        "urlToImage": "https://www.healthcaredive.com/imgproxy/CaK5mHdLjEKb6jZruk6IkeM-4WPQifYuvQwE-ZsSvfE/g:ce/rs:fill:770:435:0/bG9jYWw6Ly8vZGl2ZWltYWdlL0dldHR5SW1hZ2VzLTExNzAxNzY2NjEuanBn.webp",
        "publishedAt": "2024-04-15T15:01:53Z",
        "content": "Dive Brief:\r\n<ul><li>Medical Properties Trust has sold the majority of its interests in five Utah hospitals for $886 million, the hospital landlord said Friday. The hospitals included in the deal are… [+2239 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Kyle Wiggers",
        "title": "Investors are growing increasingly weary of AI - TechCrunch",
        "description": "A new report from Stanford's Institute for Human-Centered Artificial Intelligence (HAI) found that global investment in AI fell for the second year in a row in 2023.",
        "url": "https://techcrunch.com/2024/04/15/investors-are-growing-increasingly-wary-of-ai/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1463459171.jpg?resize=1200,800",
        "publishedAt": "2024-04-15T15:01:04Z",
        "content": "After years of easy money, the AI industry is facing a reckoning.\r\nA new report from Stanford’s Institute for Human-Centered Artificial Intelligence (HAI), which studies AI trends, found that global … [+6187 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Salesforce Eyes Informatica to Boost Data Capabilities - Yahoo Finance",
        "description": null,
        "url": "https://finance.yahoo.com/news/salesforce-eyes-informatica-boost-data-113342043.html",
        "urlToImage": null,
        "publishedAt": "2024-04-15T13:33:41Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      }
      // Add more articles here...
    ]
  };
  
  export function fetchNewsData(): ApiResponse {
    return hardcodedData; // Return the hardcoded data instead of fetching from an API
  }
  