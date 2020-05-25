import React from 'react';
import { Box } from '@material-ui/core';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'cats': [],
    };
  }

  imgCSS = {
    overflow: 'hidden',
    height: '100px',
    width: '100px',
    marginLeft: 4,
  };

  componentDidMount() {
    const DATA = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded',},
      body: 'grant_type=client_credentials&' +
          'client_id=j9SG77uYmyVfsQpmxrXiMYzIRWBEVdOYmwuSty7EzssWEd491h' +
          '&client_secret=I8yVLtk6QuGVbGH5727WFQdo0958GZtbnEEItuuI',
      method: 'POST',
    };
    fetch("https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/oauth2/token", DATA)
        .then(cors => {return cors.json()})
        .then(resp => {
          const DATA = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'AUTHORIZATION': `Bearer ${resp.access_token}`},
            method: 'GET',
          };
          let url = 'https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/animals?type=Cat&';
          const params = {
            'location': '10002',
            'distance': 250,
            'sort': 'distance',
            'limit': 100,
          };
          url += Object.keys(params)
            .map(k => k + '=' + params[k])
            .join('&');
          console.log(url)

          fetch(url, DATA)
            .then(cors => {return cors.json()})
              .then(response => {
                const catList = [];
                for (const cat of response['animals']) {
                  if (!(cat.photos.length === 0)) {
                    const catObj = {
                      loaded: false,
                      image: cat.photos[0].small,
                      link: cat.url,
                    };
                    catList.push(catObj);
                  }
                }
                this.setState({cats: catList});
              });
        });
  }

  className(cat) {
    if (cat.loaded) {
      return 'load-in';
    } else {
      return 'hidden';
    }
  }

  render() {
    const {cats} = this.state;
    let allLoaded = true;

    const catLimit = Math.floor(document.documentElement.clientWidth / 100)
      * Math.floor(document.documentElement.clientHeight / 100) - 1;
    return (
        <div className='frame' style={{height: document.documentElement.clientHeight}}>
            {cats.map((cat, index) => {
              allLoaded = allLoaded && cat.loaded;
              return(
                <>
                {index <= catLimit &&
                  <div className={this.className(cat)}>
                    <a href={cat.link}><img
                      style={this.imgCSS}
                      alt='kitty'
                      loading='lazy'
                      src={cat.image}
                      onLoad={() => {
                        cat.loaded = true;
                        this.setState({cats});
                      }}
                    /></a>
                  </div>
                }
                </>
              )
            })}
            <Box
              className='box'
            >
              <h1>Petfinder Instant Notifier</h1>
              <p style={{margin: '16px'}}>I have always wanted a cat, but my mom is allergic. Now that I am moving out, I can have a kitty of my own! However,
               this unfortunately coincided with the COVID-19 pandemic. Cats and dogs are being scooped up within 30 minutes of their
              profiles being posted on Petfinder. My 21 years of waiting cannot be prolonged any longer, and I knew a solution.
              With the help of the Petfinder API 2.0 and my friend with a personal server (long story), I was able to create a
              script to notify me through email within 150 seconds of a cat's posting. The cats you see here are cats in the NYC area
              that are available for adoption right now. If one piques your interest, feel free to click on them and it will
              redirect you to their Petfinder page.</p>
            </Box>
        </div>
    );
  }
}

export default App;
