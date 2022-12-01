import bgImage from "../media/phones.webp"
import logo from "../media/icon.svg"

const desc = "Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime. On this official cloudstream/recloudstream site you can find downloads links and a list of repositories of extensions."

const SEO = ({children, title, description}) => {
    return <>
        <title>{title || "Cloudstream"}</title>
        <meta property="og:title" content={title || "Cloudstream"} />
        <meta property="og:description" content={description || desc} />
        <meta property="og:image" content={bgImage} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="c7TphrPJk4AXlG4P_J3ZRpJ7V3yFzG_cjd-A37ih1fE" />
        <script type="application/ld+json">{```
        [
  {
    "@id": "https://cloudstream.cf/#person",
    "@type": [
      "http://schema.org/Person",
      "http://schema.org/Organization"
    ],
    "http://schema.org/image": [
      {
        "@id": "https://cloudstream.cf/#logo",
        "@type": [
          "http://schema.org/ImageObject"
        ],
        "http://schema.org/caption": [
          {
            "@value": "Cloudstream"
          }
        ],
        "http://schema.org/contentUrl": [
          {
            "@id": "${logo}"
          }
        ],
        "http://schema.org/inLanguage": [
          {
            "@value": "en-US"
          }
        ],
        "http://schema.org/url": [
          {
            "@id": "${logo}"
          }
        ]
      }
    ],
    "http://schema.org/logo": [
      {
        "@id": "https://cloudstream.cf/#logo",
        "@type": [
          "http://schema.org/ImageObject"
        ],
        "http://schema.org/caption": [
          {
            "@value": "cloudstream"
          }
        ],
        "http://schema.org/contentUrl": [
          {
            "@id": "${logo}"
          }
        ],
        "http://schema.org/inLanguage": [
          {
            "@value": "en-US"
          }
        ],
        "http://schema.org/url": [
          {
            "@id": "${logo}"
          }
        ]
      }
    ],
    "http://schema.org/name": [
      {
        "@value": "cloudstream"
      }
    ]
  },
  {
    "@id": "https://cloudstream.cf/#website",
    "@type": [
      "http://schema.org/WebSite"
    ],
    "http://schema.org/inLanguage": [
      {
        "@value": "en-US"
      }
    ],
    "http://schema.org/name": [
      {
        "@value": "Cloudstream"
      }
    ],
    "http://schema.org/potentialAction": [
      {
        "@type": [
          "http://schema.org/SearchAction"
        ],
        "http://schema.org/query-input": [
          {
            "@value": "required name=search_term_string"
          }
        ],
        "http://schema.org/target": [
          {
            "@id": "https://cloudstream.cf/?s={search_term_string}"
          }
        ]
      }
    ],
    "http://schema.org/publisher": [
      {
        "@id": "https://cloudstream.cf/#person"
      }
    ],
    "http://schema.org/url": [
      {
        "@id": "https://cloudstream.cf"
      }
    ]
  },
  {
    "@id": "https://cloudstream.cf/#webpage",
    "@type": [
      "http://schema.org/WebPage"
    ],
    "http://schema.org/about": [
      {
        "@id": "https://cloudstream.cf/#person"
      }
    ],
    "http://schema.org/dateModified": [
      {
        "@type": "http://schema.org/Date",
        "@value": "2022-11-22T13:32:21+00:00"
      }
    ],
    "http://schema.org/datePublished": [
      {
        "@type": "http://schema.org/Date",
        "@value": "2020-02-24T13:08:57+00:00"
      }
    ],
    "http://schema.org/inLanguage": [
      {
        "@value": "en-US"
      }
    ],
    "http://schema.org/isPartOf": [
      {
        "@id": "https://cloudstream.cf/#website"
      }
    ],
    "http://schema.org/name": [
      {
        "@value": "CloudStream"
      }
    ],
    "http://schema.org/url": [
      {
        "@id": "https://cloudstream.cf/"
      }
    ]
  },
  {
    "@id": "https://cloudstream.cf/author/cloudstream/",
    "@type": [
      "http://schema.org/Person"
    ],
    "http://schema.org/image": [
      {
        "@id": "https://github.com/recloudstream.png",
        "@type": [
          "http://schema.org/ImageObject"
        ],
        "http://schema.org/caption": [
          {
            "@value": "cloudstream"
          }
        ],
        "http://schema.org/inLanguage": [
          {
            "@value": "en-US"
          }
        ],
        "http://schema.org/url": [
          {
            "@id": "https://github.com/recloudstream.png"
          }
        ]
      }
    ],
    "http://schema.org/name": [
      {
        "@value": "cloudstream"
      }
    ],
    "http://schema.org/sameAs": [
      {
        "@id": "http://cloudstream.cf"
      }
    ],
    "http://schema.org/url": [
      {
        "@id": "https://cloudstream.cf/author/cloudstream/"
      }
    ]
  },
  {
    "@id": "https://cloudstream.cf/#richSnippet",
    "@type": [
      "http://schema.org/Article"
    ],
    "http://schema.org/author": [
      {
        "@id": "https://cloudstream.cf/author/cloudstream/"
      }
    ],
    "http://schema.org/dateModified": [
      {
        "@type": "http://schema.org/Date",
        "@value": "2022-11-22T13:32:21+00:00"
      }
    ],
    "http://schema.org/datePublished": [
      {
        "@type": "http://schema.org/Date",
        "@value": "2020-02-24T13:08:57+00:00"
      }
    ],
    "http://schema.org/description": [
      {
        "@value": "${description || desc}"
      }
    ],
    "http://schema.org/headline": [
      {
        "@value": "${description || desc}"
      }
    ],
    "http://schema.org/inLanguage": [
      {
        "@value": "en-US"
      }
    ],
    "http://schema.org/isPartOf": [
      {
        "@id": "https://cloudstream.cf/#webpage"
      }
    ],
    "http://schema.org/mainEntityOfPage": [
      {
        "@id": "https://cloudstream.cf/#webpage"
      }
    ],
    "http://schema.org/name": [
      {
        "@value": "${title}"
      }
    ],
    "http://schema.org/publisher": [
      {
        "@id": "https://cloudstream.cf/#person"
      }
    ]
  }
]
```.replace(/\n/g, "")}</script>
    </>
}

export default SEO