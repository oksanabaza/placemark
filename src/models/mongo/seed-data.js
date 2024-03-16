export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    }
  },
  playlists: {
    _model: "Playlist",
    ireland: {
      title: "Ireland",
      userid: "->users.homer",
      img:"https://cdn11.bigcommerce.com/s-lmnt0zg7g8/images/stencil/1280x1280/products/3006/36872/Irish_Flag__86476.1607534995.jpg"

    },
    ukraine: {
      title: "Ukraine",
      userid: "->users.homer",
      img:"https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"

    }
  },
  tracks: {
    _model : "Track",
    track_1 : {
      title: "Brú na Bóinne - Archaeological Ensemble of the Bend of the Boyne",
      artist: "Ireland",
      duration: 40.9,
      lat:31.8,
      description:"The three main prehistoric sites of the Brú na Bóinne Complex, Newgrange, Knowth and Dowth, are situated on the north bank of the River Boyne 50 km north of Dublin. This is Europe's largest and most important concentration of prehistoric megalithic art. The monuments there had social, economic, religious and funerary functions.",
      img:"https://whc.unesco.org/uploads/thumbs/site_0659_0007-1000-667-20151105104049.jpg",
      playlistid: "->playlists.ireland"
    },
    track_2 : {
      title: "Sceilg Mhichíl",
      artist: "Ireland",
      duration: 18.984,
      lat:18.996,
      description:"Sceilg Mhichíl is an outstanding, and in many respects unique, example of an early religious settlement deliberately sited on a pyramidal rock in the ocean, preserved because of a remarkable environment. It illustrates, as no other property can, the extremes of a Christian monasticism characterizing much of North Africa, the Near East, and Europe.",
      img:"https://whc.unesco.org/uploads/thumbs/site_0757_0012-750-750-20170904170931.jpg",
      playlistid: "->playlists.ireland"
    },
    track_3 : {
      title: "Saint-Sophia Cathedral",
      artist: "Ukraine",
      duration: 18.984,
      lat:18.996,
      description:"Designed to rival Hagia Sophia in Constantinople, Kyiv's Saint-Sophia Cathedral symbolizes the 'new Constantinople', capital of the Christian principality of Kyiv, which was created in the 11th century in a region evangelized after the baptism of St Vladimir in 988.",
      img:"https://whc.unesco.org/uploads/thumbs/site_0527_0008-1000-1500-20151105154730.jpg",
      playlistid: "->playlists.ukraine"
    }, 
    track_4 : {
      title: "L'viv – the Ensemble of the Historic Centre",
      artist: "Ukraine",
      duration: 18.984,
      lat:18.996,
      description:"The city of L''viv, founded in the late Middle Ages, was a flourishing administrative, religious and commercial centre for several centuries. The medieval urban topography has been preserved virtually intact (in particular, there is evidence of the different ethnic communities who lived there), along with many fine Baroque and later buildings.",
      img:"https://whc.unesco.org/uploads/thumbs/site_0865_0002-1000-664-20151104125432.jpg",
      playlistid: "->playlists.ukraine"
    },
    track_5 : {
      title: "Struve Geodetic Arc *",
      artist: "Ukraine",
      duration: 18.984,
      lat:18.996,
      description:"The Struve Arc is a chain of survey triangulations stretching from Hammerfest in Norway to the Black Sea, through 10 countries and over 2,820 km. These are points of a survey, carried out between 1816 and 1855 by the astronomer Friedrich Georg Wilhelm Struve, which represented the first accurate measuring of a long segment of a meridian. This helped to establish the exact size and shape of the planet and marked an important step in the development of earth sciences and topographic mapping.",
      img:"https://whc.unesco.org/uploads/thumbs/site_1187_0001-1000-750-20151104154840.jpg",
      playlistid: "->playlists.ukraine"
    },   
      track_6 : {
      title: "Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe",
      artist: "Ukraine",
      duration: 18.984,
      lat:18.996,
      description:"This transnational property includes 93 component parts in 18 countries. Since the end of the last Ice Age, European Beech spread from a few isolated refuge areas in the Alps, Carpathians, Dinarides, Mediterranean and Pyrenees over a short period of a few thousand years in a process that is still ongoing.",
      img:"https://whc.unesco.org/uploads/thumbs/site_1133_0076-1000-667-20210604180552.jpg",
      playlistid: "->playlists.ukraine"
    },
    
  }
};