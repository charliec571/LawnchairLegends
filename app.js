/* ==========================================================================
   LAWNCHAIR LEGENDS - INTERACTIVE APPLICATION LOGIC
   Mobile-First Web App Hub for Live Music, EPK, and Booking
   ========================================================================== */

(function () {
  'use strict';

  // --- 1. SHOWS DATABASE (Kendallville, Fort Wayne & Lake Country) ---
  // --- 1. SHOWS DATABASE (The 3 Confirmed Upcoming Shows) ---
  let SHOWS_DATA = [
    {
      id: 'show-1',
      title: 'Bikes on the Bricks @ Electric Works',
      venue: 'Electric Works Campus',
      address: '1690 Broadway, Fort Wayne, IN 46802',
      region: 'fortwayne',
      dateStr: 'Friday, Aug 28, 2026',
      dateMonth: 'AUG',
      dateDay: '28',
      year: 2026,
      month: 7, // 0-indexed (August)
      day: 28,
      time: '7:00 PM – 9:00 PM',
      type: 'Motorcycle Showcase & Outdoor Stage',
      admission: 'Free Admission • All Ages',
      parking: 'Electric Works West Parking Garage & Surface Lots',
      amenities: 'Union Street Market Food Hall, Chapman\'s Brewing craft beer, artisan food trucks, custom bike showcase.',
      description: 'Join Lawnchair Legends on the brick plaza for Bikes on the Bricks at Electric Works in Fort Wayne! An electric evening with motorcycle showcases, live brass-fueled rock hits, food trucks, and craft beer. Bring your lawn chairs!',
      poster: 'assets/poster-electric-works.jpg',
      tags: ['featured', 'free', 'all-ages', 'outdoor'],
      isNextUp: true,
      dtStart: '20260828T190000',
      dtEnd: '20260828T210000',
      startIso: '20260828T230000Z',
      endIso: '20260829T010000Z',
      mapQuery: 'Electric+Works+1690+Broadway+Fort+Wayne+IN+46802'
    },
    {
      id: 'show-2',
      title: 'Ligonier Marshmallow Festival',
      venue: 'Festival Main Stage',
      address: 'Main St & Cavin St, Ligonier, IN 46767',
      region: 'festivals',
      dateStr: 'Sunday, Sept. 6, 2026',
      dateMonth: 'SEP',
      dateDay: '06',
      year: 2026,
      month: 8, // September
      day: 6,
      time: '1:30 PM – 3:00 PM',
      type: 'Annual Community Festival Main Stage',
      admission: 'Free Admission • Family Friendly',
      parking: 'Downtown Ligonier Public Parking & Street',
      amenities: 'Marshmallow bake-off & games, carnival rides, craft vendors, festival food trucks, lawn chair seating area.',
      description: 'Headline afternoon concert at the famous Ligonier Marshmallow Festival! Fold out your lawn chairs on the grass and enjoy an energetic 90-minute blast of rock classics, horn anthems, and family festival fun.',
      poster: 'assets/poster-marshmallow-fest.jpg',
      tags: ['featured', 'free', 'all-ages', 'outdoor'],
      isNextUp: false,
      dtStart: '20260906T133000',
      dtEnd: '20260906T150000',
      startIso: '20260906T173000Z',
      endIso: '20260906T190000Z',
      mapQuery: 'Ligonier+Marshmallow+Festival+Ligonier+IN+46767'
    },
    {
      id: 'show-3',
      title: 'Lawnchair Legends Live in Concert',
      venue: 'A.M. Strauss Theater inside the CLC',
      address: '401 E Diamond St, Kendallville, IN 46755',
      region: 'lakes',
      dateStr: 'Saturday, Sept. 26, 2026',
      dateMonth: 'SEP',
      dateDay: '26',
      year: 2026,
      month: 8,
      day: 26,
      time: '7:00 PM – 10:00 PM',
      type: 'Historic Theater Concert Experience',
      admission: 'Reserved Seating & General Admission',
      parking: 'Community Learning Center (CLC) Campus Parking Lot',
      amenities: 'Acoustically tuned historic auditorium, theater seating, concessions & refreshments, state-of-the-art concert lighting.',
      description: 'A special 3-hour psychedelic rock spectacular inside the historic A.M. Strauss Theater at the Community Learning Center (CLC) in Kendallville! Full brass section, timeless rock anthems, and an unforgettable theater concert experience.',
      poster: 'assets/poster-am-strauss.jpg',
      tags: ['featured', 'indoor', 'all-ages'],
      isNextUp: false,
      dtStart: '20260926T190000',
      dtEnd: '20260926T220000',
      startIso: '20260926T230000Z',
      endIso: '20260927T020000Z',
      mapQuery: 'Community+Learning+Center+401+E+Diamond+St+Kendallville+IN+46755',
      ticketUrl: 'https://www.thecommunitylearningcenter.org/events?fbclid=IwY2xjawUDAsxwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUg4S1hSNXZhZVM2UHV2aEZzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe7oRw1RMY4XKssJmc98neRpybfo8jcCVT8LbQHfv8Tz6EnRp6ddWMkFo-i_U_aem_ZmFrZWR1bW15MTZieXRlcw#eca-event=lawn-chair-legends'
    },
    {
      id: 'show-1788235244795',
      title: 'Lawnchair Legends at Sylvan Cellars',
      venue: 'Sylvan Cellars',
      address: '2725 E Northport Rd, Rome City, IN 46784',
      region: 'lakes',
      dateStr: 'Saturday, Nov 21, 2026',
      dateMonth: 'NOV',
      dateDay: '21',
      year: 2026,
      month: 10,
      day: 21,
      time: '7 to 10pm',
      type: 'Live Music Concert',
      admission: 'Free',
      parking: 'On-site parking',
      amenities: 'Event Center, Craft Beer & Wine, Outdoor Lawn',
      description: 'Join Lawnchair Legends live at Sylvan Cellars in Rome City for high-energy horn-infused rock hits!',
      poster: 'assets/poster-sylvan-cellars.jpg',
      tags: ['featured', 'free', 'all-ages', 'outdoor'],
      isNextUp: false,
      dtStart: '20261121T190000',
      dtEnd: '20261121T220000',
      startIso: '2026-11-21T19:00:00',
      endIso: '2026-11-21T22:00:00',
      mapQuery: '2725%20E%20Northport%20Rd%2C%20Rome%20City%2C%20IN%2046784'
    }
  ];

  // --- PAST SHOWS ARCHIVE DATABASE ---
  let PAST_SHOWS_DATA = [
    {
      id: 'past-show-1',
      title: 'Bikes on the Bricks @ Electric Works',
      venue: 'Electric Works Campus',
      address: '1690 Broadway, Fort Wayne, IN 46802',
      region: 'fortwayne',
      dateStr: 'Friday, July 31, 2026',
      dateMonth: 'JUL',
      dateDay: '31',
      year: 2026,
      time: '7:00 PM – 9:00 PM',
      type: 'Motorcycle Showcase & Outdoor Stage',
      admission: 'Free Admission • All Ages',
      description: 'Massive summer evening on the brick plaza at Electric Works with custom motorcycle showcases, food trucks, craft beer, and roaring live horn rock anthems!',
      poster: 'assets/past-show-july-31-electric-works.jpg',
      tags: ['past', 'outdoor', 'free', 'all-ages'],
      mapQuery: 'Electric+Works+1690+Broadway+Fort+Wayne+IN+46802'
    },
    {
      id: 'past-show-2',
      title: 'Live at Sylvan Cellars',
      venue: 'Sylvan Cellars Event Bar & Winery',
      address: '2725 E Northport Rd, Rome City, IN 46784',
      region: 'lakes',
      dateStr: 'Friday, June 5, 2026',
      dateMonth: 'JUN',
      dateDay: '05',
      year: 2026,
      time: '7:00 PM – 10:00 PM',
      type: 'Winery & Rustic Barn Concert',
      admission: 'Free Entry • 21+ Welcome',
      description: 'Lawnchair Legends rocked the scenic lawn and historic timber barn at Sylvan Cellars in Rome City with lake country vibes, signature wine, and dance floor classics.',
      poster: 'assets/past-show-june-5-sylvan-cellars.jpg',
      tags: ['past', 'outdoor', 'lakefront'],
      mapQuery: 'Sylvan+Cellars+Rome+City+IN'
    },
    {
      id: 'past-show-3',
      title: 'Great Lakes Watercross Jet Ski Race Concert',
      venue: 'Bixler Lake Park',
      address: 'Diamond & Park Ave, Kendallville, IN 46755',
      region: 'lakes',
      dateStr: 'Saturday, May 30, 2026',
      dateMonth: 'MAY',
      dateDay: '30',
      year: 2026,
      time: '5:00 PM – 8:00 PM',
      type: 'Lakefront Jet Ski Festival',
      admission: 'Free Admission • Family Friendly',
      description: 'Post-race sunset concert immediately following the Great Lakes Watercross national jet ski races on the shores of Bixler Lake in Kendallville.',
      poster: 'assets/past-show-may-30-bixler-lake.jpg',
      tags: ['past', 'lakefront', 'free', 'outdoor'],
      mapQuery: 'Bixler+Lake+Park+Kendallville+IN'
    },
    {
      id: 'past-show-4',
      title: 'Spring Showcase @ Elks Lodge',
      venue: 'Kendallville Elks Lodge #1194',
      address: '120 Weston Ave, Kendallville, IN 46755',
      region: 'lakes',
      dateStr: 'Saturday, May 2, 2026',
      dateMonth: 'MAY',
      dateDay: '02',
      year: 2026,
      time: '8:00 PM – 11:00 PM',
      type: 'Hometown Club Party',
      admission: 'Members & Guests Welcome',
      description: 'Spring weekend party at the Kendallville Elks Lodge featuring high-energy sets of horn-fueled party hits, classic rock, and 90s sing-alongs.',
      poster: 'assets/past-show-may-2-elks.jpg',
      tags: ['past', 'indoor', 'featured'],
      mapQuery: '120+Weston+Ave+Kendallville+IN+46755'
    },
    {
      id: 'past-show-5',
      title: 'Winter Dance Party @ Elks Lodge',
      venue: 'Kendallville Elks Lodge #1194',
      address: '120 Weston Ave, Kendallville, IN 46755',
      region: 'lakes',
      dateStr: 'Friday, February 20, 2026',
      dateMonth: 'FEB',
      dateDay: '20',
      year: 2026,
      time: '8:00 PM – 11:00 PM',
      type: 'Winter Dance Showcase',
      admission: 'Members & Guests Welcome',
      description: 'Packed winter party warming up Kendallville with 3 full sets of live music, horn solos, and rock classics at the Elks Lodge on Weston Ave.',
      poster: 'assets/past-show-feb-20-elks.jpg',
      tags: ['past', 'indoor'],
      mapQuery: '120+Weston+Ave+Kendallville+IN+46755'
    }
  ];

  // --- 2. OFFICIAL 32-SONG SETLIST CATALOG DATABASE ---
  let SETLIST_DATA = [
    {
      title: "Waitin’ On the Bus / Jesus Left Chicago",
      artist: "ZZ Top",
      sangBy: "Adam",
      genre: "Blues Rock",
      category: "blues"
    },
    {
      title: "Give Me One Reason",
      artist: "Tracy Chapman",
      sangBy: "Meg",
      genre: "Blues / Roots Rock",
      category: "blues"
    },
    {
      title: "Don’t Do Me Like That",
      artist: "Tom Petty and the Heartbreakers",
      sangBy: "Adam",
      genre: "Heartland Rock",
      category: "rock"
    },
    {
      title: "Stop Draggin’ My Heart Around",
      artist: "Stevie Nicks & Tom Petty",
      sangBy: "Meg (ft. Adam)",
      genre: "Classic Rock",
      category: "rock"
    },
    {
      title: "Green River",
      artist: "Creedence Clearwater Revival",
      sangBy: "Chris",
      genre: "Roots Rock / Swamp Rock",
      category: "rock"
    },
    {
      title: "Twilight Zone",
      artist: "Golden Earring",
      sangBy: "Meg",
      genre: "Hard Rock / New Wave",
      category: "rock"
    },
    {
      title: "Boogie Shoes",
      artist: "KC and the Sunshine Band",
      sangBy: "Adam",
      genre: "Disco / Funk",
      category: "brass"
    },
    {
      title: "Bennie and the Jets",
      artist: "Elton John",
      sangBy: "Meg",
      genre: "Glam Rock / Pop Rock",
      category: "pop"
    },
    {
      title: "Almost Cut My Hair",
      artist: "Crosby, Stills, Nash & Young",
      sangBy: "Drew",
      genre: "Folk Rock / Blues Rock",
      category: "blues"
    },
    {
      title: "Straight On",
      artist: "Heart",
      sangBy: "Meg",
      genre: "Hard Rock / Pop Rock",
      category: "rock"
    },
    {
      title: "Eminence Front",
      artist: "The Who",
      sangBy: "Adam",
      genre: "Synth-Rock / Hard Rock",
      category: "rock"
    },
    {
      title: "White Horse",
      artist: "Laid Back (or Taylor Swift)",
      sangBy: "Chris (ft. Meg)",
      genre: "Synth-Pop / Country Pop",
      category: "pop"
    },
    {
      title: "I Want a New Drug",
      artist: "Huey Lewis and the News",
      sangBy: "Mike",
      genre: "Pop Rock / New Wave",
      category: "brass"
    },
    {
      title: "Urgent",
      artist: "Foreigner",
      sangBy: "Meg",
      genre: "Hard Rock / Arena Rock",
      category: "rock"
    },
    {
      title: "Ride Like The Wind",
      artist: "Christopher Cross",
      sangBy: "Adam",
      genre: "Yacht Rock / Soft Rock",
      category: "pop"
    },
    {
      title: "Shama Lama (Shama Lama Ding Dong)",
      artist: "Otis Day & The Knights",
      sangBy: "Adam",
      genre: "Doo-Wop / Rhythm & Blues",
      category: "brass"
    },
    {
      title: "Sledgehammer",
      artist: "Peter Gabriel",
      sangBy: "Mike",
      genre: "Funk Rock / Art Pop",
      category: "brass"
    },
    {
      title: "While My Guitar Gently Weeps",
      artist: "The Beatles",
      sangBy: "Adam",
      genre: "Classic Rock / Blues Rock",
      category: "rock"
    },
    {
      title: "Piece of My Heart",
      artist: "Janis Joplin / Big Brother",
      sangBy: "Meg",
      genre: "Blues Rock / Soul",
      category: "blues"
    },
    {
      title: "Domino",
      artist: "Van Morrison",
      sangBy: "Adam",
      genre: "Blue-Eyed Soul / Roots Rock",
      category: "brass"
    },
    {
      title: "Superstition",
      artist: "Stevie Wonder",
      sangBy: "Meg",
      genre: "Funk / Soul",
      category: "brass"
    },
    {
      title: "Rocky Mountain Way",
      artist: "Joe Walsh",
      sangBy: "Adam",
      genre: "Hard Rock / Blues Rock",
      category: "rock"
    },
    {
      title: "Jane",
      artist: "Jefferson Starship",
      sangBy: "Meg",
      genre: "Hard Rock / Arena Rock",
      category: "rock"
    },
    {
      title: "Rock and Roll, Hoochie Koo",
      artist: "Rick Derringer",
      sangBy: "Drew",
      genre: "Hard Rock / Blues Rock",
      category: "rock"
    },
    {
      title: "Liza Jane / Rock n' Roll Medley",
      artist: "Traditional / Various",
      sangBy: "Adam (ft. Meg)",
      genre: "Roots Rock / Medley",
      category: "rock"
    },
    {
      title: "Life in the Fast Lane",
      artist: "Eagles",
      sangBy: "Meg",
      genre: "Hard Rock",
      category: "rock"
    },
    {
      title: "The Weight",
      artist: "The Band",
      sangBy: "Mike",
      genre: "Roots Rock / Americana",
      category: "blues"
    },
    {
      title: "Separate Ways (Worlds Apart)",
      artist: "Journey",
      sangBy: "Meg",
      genre: "Arena Rock / Synth-Rock",
      category: "rock"
    },
    {
      title: "Whipping Post",
      artist: "The Allman Brothers Band",
      sangBy: "Adam",
      genre: "Southern Rock / Blues Rock",
      category: "blues"
    },
    {
      title: "Barracuda",
      artist: "Heart",
      sangBy: "Meg",
      genre: "Hard Rock",
      category: "rock"
    },
    {
      title: "With a Little Help from My Friends",
      artist: "Joe Cocker / The Beatles",
      sangBy: "Adam & Meg",
      genre: "Classic Rock / Soul Rock",
      category: "rock"
    },
    {
      title: "I Love Rock 'n' Roll",
      artist: "Joan Jett & the Blackhearts",
      sangBy: "Meg",
      genre: "Hard Rock / Punk Rock",
      category: "rock"
    }
  ];

  // --- 3. WEEKEND AVAILABILITY DATA ---
  const WEEKENDS_DATA = [
    { dates: 'Aug 28 – 30, 2026', status: 'booked', label: 'Booked (Electric Works - Aug 28)' },
    { dates: 'Sep 04 – 06, 2026', status: 'booked', label: 'Booked (Marshmallow Fest - Sep 6)' },
    { dates: 'Sep 11 – 13, 2026', status: 'open', label: 'Open for Booking' },
    { dates: 'Sep 18 – 20, 2026', status: 'open', label: 'Open for Booking' },
    { dates: 'Sep 25 – 27, 2026', status: 'booked', label: 'Booked (A.M. Strauss Theater - Sep 26)' },
    { dates: 'Oct 02 – 04, 2026', status: 'open', label: 'Open for Booking' },
    { dates: 'Oct 09 – 11, 2026', status: 'open', label: 'Open for Booking' },
    { dates: 'Oct 16 – 18, 2026', status: 'open', label: 'Open for Booking' },
    { dates: 'Oct 23 – 25, 2026', status: 'open', label: 'Open for Booking' },
    { dates: 'Oct 30 – Nov 01, 2026', status: 'open', label: 'Open (Halloween Weekend!)' }
  ];

  // --- 4. AUDIO SIZZLE REEL SYNTHESIZER ENGINE (Web Audio API) ---
  const DEMO_TRACKS = [
    {
      title: '24K Brass Funk & Pop Medley',
      genre: 'Brass & Horn Pop',
      vibe: 'Punchy horn stabs & funky bassline',
      tempo: 108,
      key: 'Fm',
      progression: ['Fm', 'Bbm', 'Eb', 'Ab']
    },
    {
      title: '90s Summer Rock Explosion',
      genre: '90s / 2000s Alternative',
      vibe: 'Driving overdriven guitar & anthemic rhythm',
      tempo: 124,
      key: 'A',
      progression: ['A', 'E', 'F#m', 'D']
    },
    {
      title: 'Lakefront Classic Rockers',
      genre: '70s & 80s Rock Anthems',
      vibe: 'Soulful keys, vocal riffs & dual harmonies',
      tempo: 116,
      key: 'D',
      progression: ['D', 'C', 'G', 'D']
    },
    {
      title: 'Modern High-Energy Party Mix',
      genre: 'Modern Pop & Horn Hits',
      vibe: 'Fast tempo, infectious groove & horn fills',
      tempo: 128,
      key: 'Bm',
      progression: ['Bm', 'G', 'D', 'A']
    }
  ];

  let currentTrackIdx = 0;
  let isAudioPlaying = false;
  let audioCtx = null;
  let audioTimer = null;
  let synthStep = 0;
  let playbackElapsed = 0;
  let canvasAnimId = null;

  let refreshCalendarView = null;
  let refreshSetlistView = null;

  let BIO_DATA = {
    headline: "Lawn Chair Legends",
    subtitle: "Proudly from Noble County, Indiana — bringing hometown talent, great energy, and a whole lot of music to every stage.",
    quote: "\"Proudly from Noble County, Indiana — the Lawn Chair Legends bring hometown talent, great energy, and a whole lot of music to every stage.\"",
    paragraphs: [
      "Formed in 2025, the <strong>Lawn Chair Legends</strong> are a hometown band with deep roots in <strong>Noble County, Indiana</strong>. Made up entirely of Noble County natives, the band members share a passion for music, community, and creating memorable experiences through live performances.",
      "The Lawn Chair Legends feature <strong>Chris Dafforn</strong> on keys and trumpet, <strong>Mike Kugler</strong> on guitar, <strong>Adam Kugler</strong> on bass, <strong>Drew Mark</strong> on drums, <strong>Meg Rainey</strong> on vocals, <strong>Andrew Wilson</strong> on trumpet, and <strong>Evan Wilson</strong> on saxophone. Together, this talented group brings a full, dynamic sound that blends powerful vocals, a driving rhythm section, and the energy of a live horn section.",
      "The band's music spans classic rock, country, blues, and crowd-favorite hits, delivering a mix of songs that appeal to a wide variety of audiences. Whether it's a community celebration, festival, private event, or local gathering, the Lawn Chair Legends bring the perfect combination of talent, fun, and hometown spirit.",
      "More than just a band, the Lawn Chair Legends are a group of friends and neighbors proud to represent the community that raised them. Their goal is simple: play great music, bring people together, and create an unforgettable experience for everyone in the crowd."
    ]
  };

  let MEMBERS_DATA = [
    { name: "Meg Rainey", role: "Lead Vocals", avatar: "🎤" },
    { name: "Chris Dafforn", role: "Keys & Trumpet & Vocals", avatar: "🎹 🎺" },
    { name: "Mike Kugler", role: "Guitar & Vocals", avatar: "🎸" },
    { name: "Adam Kugler", role: "Bass & Vocals", avatar: "🎸" },
    { name: "Drew Mark", role: "Drums & Vocals", avatar: "🥁" },
    { name: "Andrew Wilson", role: "Trumpet", avatar: "🎺" },
    { name: "Evan Wilson", role: "Saxophone", avatar: "🎷" }
  ];

  let VIDEOS_DATA = [
    {
      id: "vid-1",
      title: "Vehicle (Live Performance Highlight)",
      url: "https://www.facebook.com/profile.php?id=61585160237026",
      venue: "Live in Concert",
      date: "2026",
      description: "High-energy brass rock with full horn section live on stage!"
    },
    {
      id: "vid-2",
      title: "25 or 6 to 4 – Chicago Cover (Live)",
      url: "https://www.facebook.com/profile.php?id=61585160237026",
      venue: "Electric Works Festival Plaza",
      date: "Summer 2026",
      description: "Lawnchair Legends bringing down the house with classic rock anthems."
    }
  ];

  function getFacebookEmbedUrl(rawUrl) {
    if (!rawUrl) return '';
    const trimmed = rawUrl.trim();
    // YouTube Support
    if (trimmed.includes('youtube.com') || trimmed.includes('youtu.be')) {
      let videoId = '';
      if (trimmed.includes('youtu.be/')) {
        videoId = trimmed.split('youtu.be/')[1].split('?')[0];
      } else if (trimmed.includes('watch?v=')) {
        videoId = trimmed.split('watch?v=')[1].split('&')[0];
      }
      if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
    }
    // Facebook Embed Plugin standard URL
    return `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(trimmed)}&show_text=false&width=560&t=0`;
  }

  function renderMediaSection() {
    const grid = document.getElementById('mediaVideoGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (!VIDEOS_DATA || VIDEOS_DATA.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-parchment);">Live performance clips coming soon!</p>
          <p style="font-size: 0.85rem;">Check our Facebook page for the latest gig highlights.</p>
        </div>
      `;
      return;
    }

    VIDEOS_DATA.forEach(vid => {
      const card = document.createElement('div');
      card.className = 'video-card';
      const embedUrl = getFacebookEmbedUrl(vid.url);

      card.innerHTML = `
        <div class="video-embed-wrapper">
          <iframe 
            src="${embedUrl}" 
            class="video-embed-iframe" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
            title="${vid.title}">
          </iframe>
        </div>
        <div class="video-card-body">
          <h3 class="video-card-title">${vid.title}</h3>
          <div class="video-meta-row">
            ${vid.venue ? `<span class="video-venue-tag">📍 ${vid.venue}</span>` : ''}
            ${vid.date ? `<span>• 📅 ${vid.date}</span>` : ''}
          </div>
          ${vid.description ? `<p class="video-desc">${vid.description}</p>` : ''}
          <div class="video-card-actions">
            <a href="${vid.url}" target="_blank" rel="noopener noreferrer" class="btn-watch-fb">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Watch on Facebook</span>
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderBioAndMembers() {
    const subtitleEl = document.getElementById('bioSectionSubtitle');
    const headlineEl = document.getElementById('bioSectionHeadline');
    const paragraphsContainer = document.getElementById('bioParagraphsContainer');
    const quoteEl = document.getElementById('bioSectionQuote');
    const membersGrid = document.getElementById('bioMembersGrid');

    if (subtitleEl && BIO_DATA.subtitle) subtitleEl.textContent = BIO_DATA.subtitle;
    if (headlineEl && BIO_DATA.headline) headlineEl.textContent = BIO_DATA.headline;
    if (quoteEl && BIO_DATA.quote) quoteEl.innerHTML = `<em>${BIO_DATA.quote}</em>`;

    if (paragraphsContainer && Array.isArray(BIO_DATA.paragraphs)) {
      paragraphsContainer.innerHTML = BIO_DATA.paragraphs.map(p => `<p class="bio-text">${p}</p>`).join('');
    }

    if (membersGrid && Array.isArray(MEMBERS_DATA)) {
      membersGrid.innerHTML = MEMBERS_DATA.map((m, idx) => `
        <div class="member-chip" ${idx === MEMBERS_DATA.length - 1 && MEMBERS_DATA.length % 2 !== 0 ? 'style="grid-column: 1 / -1;"' : ''}>
          <div class="member-avatar">${m.avatar || '🎵'}</div>
          <div class="member-info">
            <div class="member-name">${m.name}</div>
            <div class="member-role">${m.role}</div>
          </div>
        </div>
      `).join('');
    }
  }

  function applyAutomaticDateRollover() {
    const now = new Date();
    const activeShows = [];
    const expiredShows = [];

    SHOWS_DATA.forEach(show => {
      // Determine show expiration: End of the show day (23:59:59)
      const showEnd = new Date(show.year || 2026, show.month !== undefined ? show.month : 7, show.day || 1, 23, 59, 59);
      if (now > showEnd) {
        // Show has concluded! Convert to past show object
        const pastShowObj = {
          ...show,
          id: show.id.startsWith('past-') ? show.id : ('past-' + show.id),
          tags: ['past', 'outdoor']
        };
        expiredShows.push(pastShowObj);
      } else {
        activeShows.push(show);
      }
    });

    if (expiredShows.length > 0) {
      SHOWS_DATA = activeShows;

      expiredShows.forEach(pastShow => {
        const exists = PAST_SHOWS_DATA.some(p => p.id === pastShow.id || (p.title === pastShow.title && p.dateStr === pastShow.dateStr));
        if (!exists) {
          PAST_SHOWS_DATA.unshift(pastShow);
        }
      });

      console.log(`[Auto-Rollover] Transferred ${expiredShows.length} completed show(s) to Past Shows Archive.`);
    }

    // Keep upcoming shows sorted by chronological date
    SHOWS_DATA.sort((a, b) => {
      const dateA = new Date(a.year || 2026, a.month !== undefined ? a.month : 0, a.day || 1);
      const dateB = new Date(b.year || 2026, b.month !== undefined ? b.month : 0, b.day || 1);
      return dateA - dateB;
    });
  }

  async function loadDynamicData() {
    try {
      const response = await fetch(`data.json?_t=${Date.now()}`, { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        if (data.shows) SHOWS_DATA = data.shows;
        if (data.pastShows) PAST_SHOWS_DATA = data.pastShows;
        if (data.setlist) SETLIST_DATA = data.setlist;
        if (data.bio) BIO_DATA = data.bio;
        if (data.members) MEMBERS_DATA = data.members;
        if (data.videos) VIDEOS_DATA = data.videos;
        
        renderMediaSection();
        renderAdminVideosList();
        renderBioAndMembers();
        renderShows();
        renderSetlistCatalog();
        console.log("Successfully loaded dynamic data from data.json");
      }
    } catch (e) {
      console.warn("Failed to load dynamic data, using hardcoded fallback database.", e);
    }

    // Apply automatic date rollover immediately
    applyAutomaticDateRollover();
  }

  // --- 5. INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', async () => {
    await loadDynamicData();
    initSplashPage();
    initFacebookNotice();
    initHeroCountdown();
    initCalendarSystem();
    initEPKPlayer();
    initSetlistCatalog();
    initAvailabilitySlots();
    initBookingWizard();
    renderBioAndMembers();
    initModals();
    initQuickNavSpy();
    initRSVPButton();
    initStealthAdmin();
  });

  // --- FACEBOOK IN-APP BROWSER DETECTOR ---
  function initFacebookNotice() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isFB = ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1 || ua.indexOf('Instagram') > -1;
    const noticeEl = document.getElementById('inAppNotice');
    const dismissBtn = document.getElementById('dismissNoticeBtn');

    if (isFB && noticeEl) {
      noticeEl.classList.remove('hidden');
    }

    if (dismissBtn && noticeEl) {
      dismissBtn.addEventListener('click', () => {
        noticeEl.classList.add('hidden');
      });
    }
  }

  // --- HERO LIVE COUNTDOWN TIMER & SPOTLIGHT ---
  let countdownTimerInterval = null;

  function initHeroCountdown() {
    if (countdownTimerInterval) {
      clearInterval(countdownTimerInterval);
      countdownTimerInterval = null;
    }

    const nextShow = SHOWS_DATA[0];
    const heroTitleEl = document.getElementById('heroGigTitle');
    const heroDateEl = document.getElementById('heroGigDate');
    const heroTimeEl = document.getElementById('heroGigTime');
    const heroVenueEl = document.getElementById('heroGigVenue');

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    if (!nextShow) {
      if (heroTitleEl) heroTitleEl.textContent = 'More 2026/2027 Tour Dates Coming Soon!';
      if (heroDateEl) heroDateEl.textContent = 'Stay Tuned';
      if (heroTimeEl) heroTimeEl.textContent = 'Booking Now';
      if (heroVenueEl) heroVenueEl.textContent = 'Noble County & Across the Midwest';
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    // Update Hero Spotlight dynamically
    if (heroTitleEl) heroTitleEl.textContent = nextShow.title;
    if (heroDateEl) heroDateEl.textContent = nextShow.dateStr;
    if (heroTimeEl) heroTimeEl.textContent = nextShow.time;
    if (heroVenueEl) {
      const addressShort = nextShow.address.includes(',') ? nextShow.address.split(',')[1].trim() : nextShow.address;
      heroVenueEl.textContent = `${nextShow.venue} • ${addressShort}`;
    }

    const targetDate = new Date(nextShow.year || 2026, nextShow.month !== undefined ? nextShow.month : 7, nextShow.day || 1, 19, 0, 0);

    function updateCountdown() {
      const now = new Date();
      let diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        diff = 0;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    countdownTimerInterval = setInterval(updateCountdown, 1000);

    // Share Show Button
    const shareBtn = document.getElementById('shareShowBtn');
    if (shareBtn) {
      const newShareBtn = shareBtn.cloneNode(true);
      shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);
      newShareBtn.addEventListener('click', () => {
        const shareData = {
          title: 'Catch Lawnchair Legends Live!',
          text: `Join us at ${nextShow.title} (${nextShow.dateStr})! High-energy horn-infused rock & party anthems.`,
          url: window.location.href
        };
        if (navigator.share) {
          navigator.share(shareData).catch(() => {});
        } else {
          navigator.clipboard.writeText(`${shareData.text} ${window.location.href}`);
          showToast('📋 Show details copied to clipboard!');
        }
      });
    }

    // Calendar Dropdown Toggle
    const calToggle = document.getElementById('calendarDropdownToggle');
    const calMenu = document.getElementById('calendarMenu');
    if (calToggle && calMenu) {
      calToggle.onclick = (e) => {
        e.stopPropagation();
        calMenu.classList.toggle('hidden');
        calToggle.parentElement.classList.toggle('dropdown-open');
      };

      document.onclick = (e) => {
        if (!calToggle.contains(e.target) && !calMenu.contains(e.target)) {
          calMenu.classList.add('hidden');
          calToggle.parentElement.classList.remove('dropdown-open');
        }
      };
    }

    // Google Calendar & .ics export for Next Up Show
    const gCalBtn = document.getElementById('addGoogleCal');
    const icsBtn = document.getElementById('downloadIcsBtn');

    if (gCalBtn) {
      gCalBtn.href = buildGoogleCalUrl(nextShow);
      gCalBtn.target = '_blank';
    }

    if (icsBtn) {
      const newIcsBtn = icsBtn.cloneNode(true);
      icsBtn.parentNode.replaceChild(newIcsBtn, icsBtn);
      newIcsBtn.addEventListener('click', () => {
        downloadIcsFile(nextShow);
        showToast('📅 Show downloaded to your calendar!');
      });
    }
  }

  // --- RSVP LOCAL FAN COUNTER ---
  function initRSVPButton() {
    const rsvpBtn = document.getElementById('heroRsvpBtn');
    const rsvpStatusText = document.getElementById('rsvpStatusText');
    const rsvpCountDisplay = document.getElementById('rsvpCountDisplay');

    let isAttending = localStorage.getItem('lawnchair_hero_rsvp') === 'true';
    let baseCount = 138;

    function renderRSVP() {
      if (isAttending) {
        rsvpBtn.classList.add('attending');
        rsvpStatusText.textContent = 'Attending!';
        rsvpCountDisplay.innerHTML = `🔥 <strong>${baseCount + 1}</strong> local fans attending`;
      } else {
        rsvpBtn.classList.remove('attending');
        rsvpStatusText.textContent = "I'm Going!";
        rsvpCountDisplay.innerHTML = `🔥 <strong>${baseCount}</strong> local fans attending`;
      }
    }

    renderRSVP();

    if (rsvpBtn) {
      rsvpBtn.addEventListener('click', () => {
        isAttending = !isAttending;
        localStorage.setItem('lawnchair_hero_rsvp', isAttending);
        renderRSVP();
        if (isAttending) {
          showToast('🎉 You are on the RSVP list for Electric Works!');
        }
      });
    }
  }

  // --- SHOWS CALENDAR & FILTERS ---
  function initCalendarSystem() {
    const gridEl = document.getElementById('showsGrid');
    const filterPills = document.querySelectorAll('.filter-pill');
    const searchInput = document.getElementById('showSearchInput');
    const tabUpcomingBtn = document.getElementById('tabUpcomingShows');
    const tabPastBtn = document.getElementById('tabPastShows');

    let currentScheduleView = 'upcoming'; // 'upcoming' or 'past'
    let currentFilter = 'all';
    let currentSearch = '';

    function renderShows() {
      if (!gridEl) return;
      gridEl.innerHTML = '';

      const dataSource = currentScheduleView === 'upcoming' ? SHOWS_DATA : PAST_SHOWS_DATA;

      const filtered = dataSource.filter(show => {
        const matchesFilter = currentFilter === 'all' || show.region === currentFilter;
        const matchesSearch = !currentSearch ||
          show.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
          show.venue.toLowerCase().includes(currentSearch.toLowerCase()) ||
          show.address.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesFilter && matchesSearch;
      });

      if (filtered.length === 0) {
        gridEl.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-parchment);">No shows found matching your filter.</p>
            <p style="font-size: 0.85rem;">Try selecting "All Dates" or clearing your search term.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(show => {
        const isPast = currentScheduleView === 'past';
        const card = document.createElement('div');
        card.className = `show-card ${isPast ? 'past-show-card' : ''}`;
        card.innerHTML = `
          <div class="show-card-poster-thumb" data-show-id="${show.id}">
            <img src="${show.poster || 'assets/banner.png'}" alt="${show.title} Official Poster" loading="lazy" class="show-poster-thumb-img" />
            <div class="poster-overlay-pill">${isPast ? 'View Poster &amp; Memories' : 'Click for Full Poster &amp; Details'}</div>
          </div>
          <div class="show-card-header">
            <div class="date-badge ${isPast ? 'past-date-badge' : ''}">
              <span class="date-month">${show.dateMonth}</span>
              <span class="date-day">${show.dateDay}</span>
            </div>
            <div class="show-info-top">
              <h3 class="show-name">${show.title}</h3>
              <div class="show-location-line">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${show.venue} • ${show.time}</span>
              </div>
            </div>
          </div>

          <div class="show-tags-row">
            ${show.tags.map(tag => `<span class="tag-badge ${tag}">${formatTagLabel(tag)}</span>`).join('')}
          </div>

          ${show.ticketUrl ? `
          <a href="${show.ticketUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-tickets-cta">
            🎟️ Buy Tickets!
          </a>
          ` : ''}
          <div class="show-card-actions">
            <a href="https://maps.apple.com/?q=${show.mapQuery}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="Directions to ${show.venue}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              <span>Map</span>
            </a>
            ${!isPast ? `
              <button class="btn btn-secondary add-cal-single-btn" data-show-id="${show.id}">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>Calendar</span>
              </button>
            ` : `
              <button class="btn btn-secondary view-details-btn" data-show-id="${show.id}">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>Poster</span>
              </button>
            `}
            <button class="btn btn-primary view-details-btn" data-show-id="${show.id}">
              <span>Details</span>
            </button>
          </div>
        `;

        // Poster click opens details modal
        const posterThumb = card.querySelector('.show-card-poster-thumb');
        if (posterThumb) posterThumb.addEventListener('click', () => openVenueModal(show));

        // Details buttons
        const detailBtns = card.querySelectorAll('.view-details-btn');
        detailBtns.forEach(btn => btn.addEventListener('click', () => openVenueModal(show)));

        // Add to calendar button (for upcoming shows)
        const calBtn = card.querySelector('.add-cal-single-btn');
        if (calBtn) {
          calBtn.addEventListener('click', () => {
            downloadIcsFile(show);
            showToast(`📅 Added ${show.title} to calendar!`);
          });
        }

        gridEl.appendChild(card);
      });
    }

    // Schedule view switchers (Upcoming vs Past)
    if (tabUpcomingBtn && tabPastBtn) {
      tabUpcomingBtn.addEventListener('click', () => {
        tabUpcomingBtn.classList.add('active');
        tabPastBtn.classList.remove('active');
        tabUpcomingBtn.setAttribute('aria-selected', 'true');
        tabPastBtn.setAttribute('aria-selected', 'false');
        currentScheduleView = 'upcoming';
        renderShows();
      });

      tabPastBtn.addEventListener('click', () => {
        tabPastBtn.classList.add('active');
        tabUpcomingBtn.classList.remove('active');
        tabPastBtn.setAttribute('aria-selected', 'true');
        tabUpcomingBtn.setAttribute('aria-selected', 'false');
        currentScheduleView = 'past';
        renderShows();
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentFilter = pill.dataset.filter;
        renderShows();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        renderShows();
      });
    }

    renderShows();
    refreshCalendarView = renderShows;
  }

  function formatTagLabel(tag) {
    switch (tag) {
      case 'featured': return '⭐ Highlight Gig';
      case 'free': return 'Free Entry';
      case 'all-ages': return 'All Ages';
      case 'age-limit': return '21+ Event';
      case 'outdoor': return 'Outdoor Lawn';
      case 'lakefront': return '🏖️ Lake Party';
      case 'past': return '🏁 Past Concert';
      case 'indoor': return 'Indoor Showcase';
      default: return tag;
    }
  }

  // --- EPK AUDIO SYNTHESIZER & SIZZLE REEL ---
  function initEPKPlayer() {
    const playBtn = document.getElementById('mainPlayBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const prevBtn = document.getElementById('prevTrackBtn');
    const nextBtn = document.getElementById('nextTrackBtn');
    const playlistContainer = document.getElementById('samplePlaylist');
    const progressFill = document.getElementById('progressBarFill');
    const durationLabel = document.getElementById('playerDuration');
    const currentTrackTitle = document.getElementById('currentTrackTitle');
    const currentTrackVibe = document.getElementById('currentTrackVibe');
    const audioStateTag = document.getElementById('audioStateTag');
    const nowPlayingBadge = document.querySelector('.now-playing-badge');

    // Render Playlist Items
    function renderPlaylist() {
      if (!playlistContainer) return;
      playlistContainer.innerHTML = '';
      DEMO_TRACKS.forEach((track, idx) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${idx === currentTrackIdx ? 'active' : ''}`;
        item.innerHTML = `
          <div class="playlist-item-left">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="${idx === currentTrackIdx ? 'var(--accent-gold)' : 'currentColor'}"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <div>
              <div class="playlist-item-title">${track.title}</div>
              <div class="playlist-item-genre">${track.genre}</div>
            </div>
          </div>
          <span style="font-size:0.75rem; color:var(--text-muted);">${track.tempo} BPM</span>
        `;
        item.addEventListener('click', () => {
          selectTrack(idx);
          if (!isAudioPlaying) toggleAudioPlayback();
        });
        playlistContainer.appendChild(item);
      });
    }

    function selectTrack(idx) {
      currentTrackIdx = idx;
      const track = DEMO_TRACKS[currentTrackIdx];
      if (currentTrackTitle) currentTrackTitle.textContent = track.title;
      if (currentTrackVibe) currentTrackVibe.textContent = track.vibe;
      playbackElapsed = 0;
      if (progressFill) progressFill.style.width = '0%';
      renderPlaylist();
    }

    function toggleAudioPlayback() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      isAudioPlaying = !isAudioPlaying;

      if (isAudioPlaying) {
        if (playIcon) playIcon.classList.add('hidden');
        if (pauseIcon) pauseIcon.classList.remove('hidden');
        if (nowPlayingBadge) nowPlayingBadge.classList.add('playing');
        if (audioStateTag) audioStateTag.textContent = '🔊 Synthesizing Live Band Groove...';
        startSynthEngine();
        startVisualizer();
      } else {
        if (playIcon) playIcon.classList.remove('hidden');
        if (pauseIcon) pauseIcon.classList.add('hidden');
        if (nowPlayingBadge) nowPlayingBadge.classList.remove('playing');
        if (audioStateTag) audioStateTag.textContent = 'Audio Paused • Tap Play';
        stopSynthEngine();
      }
    }

    // High energy Web Audio music generator (Simulates rhythm section, guitar riffs, and brass stabs)
    function startSynthEngine() {
      const track = DEMO_TRACKS[currentTrackIdx];
      const beatInterval = (60 / track.tempo) * 1000 / 4; // 16th notes

      audioTimer = setInterval(() => {
        playbackElapsed += (beatInterval / 1000);
        if (playbackElapsed >= 30) playbackElapsed = 0; // Loop 30s sample

        const progressPct = (playbackElapsed / 30) * 100;
        if (progressFill) progressFill.style.width = `${progressPct}%`;
        if (durationLabel) {
          const sec = Math.floor(playbackElapsed);
          durationLabel.textContent = `0:${sec < 10 ? '0' + sec : sec} / 0:30`;
        }

        playSynthStep(synthStep, track);
        synthStep = (synthStep + 1) % 16;
      }, beatInterval);
    }

    function stopSynthEngine() {
      if (audioTimer) {
        clearInterval(audioTimer);
        audioTimer = null;
      }
    }

    function playSynthStep(step, track) {
      if (!audioCtx || audioCtx.state !== 'running') return;
      const t = audioCtx.currentTime;

      // Kick Drum on 0, 4, 8, 12
      if (step === 0 || step === 4 || step === 8 || step === 12) {
        triggerKick(t);
      }

      // Snare Drum on 4, 12
      if (step === 4 || step === 12) {
        triggerSnare(t);
      }

      // Hi-Hat on every 2nd step
      if (step % 2 === 0) {
        triggerHiHat(t);
      }

      // Bass & Guitar Riffs
      if (step === 0 || step === 3 || step === 6 || step === 10) {
        const bassFreq = getChordBassFreq(track.key, step);
        triggerBass(t, bassFreq);
      }

      // Live Brass / Horn Section Stabs on syncopated 16ths
      if (step === 2 || step === 8 || step === 14) {
        triggerHornStab(t, track.key);
      }
    }

    function triggerKick(time) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.setValueAtTime(140, time);
      osc.frequency.exponentialRampToValueAtTime(38, time + 0.12);
      gain.gain.setValueAtTime(0.7, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(time);
      osc.stop(time + 0.16);
    }

    function triggerSnare(time) {
      const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.12, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = noiseBuffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 1000;
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.35, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noise.start(time);
    }

    function triggerHiHat(time) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'highpass';
      osc.frequency.setValueAtTime(8000, time);
      gain.gain.setValueAtTime(0.08, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(time);
      osc.stop(time + 0.05);
    }

    function triggerBass(time, freq) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.22, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
      const filter = audioCtx.createBiquadFilter();
      filter.frequency.setValueAtTime(450, time);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(time);
      osc.stop(time + 0.22);
    }

    function triggerHornStab(time, key) {
      // Multi-oscillator horn triad (Trumpet + Keys brass vibe)
      const freqs = key === 'Fm' ? [349.23, 440.00, 523.25] : [293.66, 369.99, 440.00];
      freqs.forEach(f => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, time);
        gain.gain.setValueAtTime(0.12, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.28);
        const filter = audioCtx.createBiquadFilter();
        filter.frequency.setValueAtTime(1800, time);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(time);
        osc.stop(time + 0.3);
      });
    }

    function getChordBassFreq(key, step) {
      if (key === 'Fm') return step < 8 ? 87.31 : 116.54; // F1, Bb1
      if (key === 'A') return step < 8 ? 110.00 : 82.41;   // A1, E1
      return 73.42; // D1
    }

    // Canvas Waveform Visualizer
    function startVisualizer() {
      const canvas = document.getElementById('audioVisualizerCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      function draw() {
        if (!isAudioPlaying) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Draw idle flat line
          ctx.strokeStyle = 'rgba(255,255,255,0.1)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 2);
          ctx.lineTo(canvas.width, canvas.height / 2);
          ctx.stroke();
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const bars = 48;
        const barWidth = canvas.width / bars;

        for (let i = 0; i < bars; i++) {
          const height = Math.abs(Math.sin(Date.now() * 0.008 + i * 0.4)) * (canvas.height * 0.75) + 6;
          const y = (canvas.height - height) / 2;

          const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
          grad.addColorStop(0, '#ea5826');
          grad.addColorStop(0.5, '#f4b340');
          grad.addColorStop(1, '#2e7b88');

          ctx.fillStyle = grad;
          ctx.fillRect(i * barWidth + 2, y, barWidth - 3, height);
        }

        canvasAnimId = requestAnimationFrame(draw);
      }

      draw();
    }

    // Playback Listeners
    if (playBtn) playBtn.addEventListener('click', toggleAudioPlayback);
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const next = currentTrackIdx === 0 ? DEMO_TRACKS.length - 1 : currentTrackIdx - 1;
        selectTrack(next);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const next = (currentTrackIdx + 1) % DEMO_TRACKS.length;
        selectTrack(next);
      });
    }

    renderPlaylist();
    selectTrack(0);
  }

  // --- SETLIST CATALOG ENGINE ---
  function initSetlistCatalog() {
    const listGrid = document.getElementById('songsListGrid');
    const filterPills = document.querySelectorAll('.setlist-pill');
    const searchInput = document.getElementById('songSearchInput');
    const totalCountEl = document.getElementById('totalSongCount');

    let activeGenre = 'all';
    let searchQuery = '';

    // Load saved song votes
    const votes = JSON.parse(localStorage.getItem('lawnchair_song_votes') || '{}');

    function renderSetlist() {
      if (totalCountEl) totalCountEl.textContent = SETLIST_DATA.length;
      if (!listGrid) return;
      listGrid.innerHTML = '';

      const filtered = SETLIST_DATA.filter(item => {
        const matchesGenre = activeGenre === 'all' || item.category === activeGenre;
        const matchesSearch = !searchQuery ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.sangBy && item.sangBy.toLowerCase().includes(searchQuery.toLowerCase())) ||
          item.genre.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
      });

      if (filtered.length === 0) {
        listGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding: 2rem; color:var(--text-muted);">
            No songs found matching your search.
          </div>
        `;
        return;
      }

      filtered.forEach(song => {
        const isVoted = !!votes[song.title];
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
          <div class="song-info">
            <div class="song-title-text">${song.title}</div>
            <div class="song-artist-text">${song.artist}</div>
            <div class="song-singer-text">🎤 ${song.sangBy}</div>
            <div class="song-tag">${song.genre}</div>
          </div>
          <button class="song-vote-btn ${isVoted ? 'voted' : ''}" data-song="${song.title}" aria-label="Request ${song.title}">
            <span>${isVoted ? '❤️ Requested' : '🤍 Request'}</span>
          </button>
        `;

        const voteBtn = card.querySelector('.song-vote-btn');
        voteBtn.addEventListener('click', () => {
          if (votes[song.title]) {
            delete votes[song.title];
            voteBtn.classList.remove('voted');
            voteBtn.innerHTML = '<span>🤍 Request</span>';
          } else {
            votes[song.title] = true;
            voteBtn.classList.add('voted');
            voteBtn.innerHTML = '<span>❤️ Requested</span>';
            showToast(`🎵 "${song.title}" added to band request list!`);
          }
          localStorage.setItem('lawnchair_song_votes', JSON.stringify(votes));
        });

        listGrid.appendChild(card);
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeGenre = pill.dataset.genre;
        renderSetlist();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderSetlist();
      });
    }

    renderSetlist();
    refreshSetlistView = renderSetlist;
  }

  // --- AVAILABILITY LIST ---
  function initAvailabilitySlots() {
    const listEl = document.getElementById('weekendSlotsList');
    if (!listEl) return;

    listEl.innerHTML = '';
    WEEKENDS_DATA.forEach(slot => {
      const item = document.createElement('div');
      item.className = 'weekend-slot-item';
      item.innerHTML = `
        <span class="slot-dates">${slot.dates}</span>
        <span class="slot-status-pill ${slot.status}">${slot.label}</span>
      `;
      listEl.appendChild(item);
    });
  }

  // --- 60-SECOND SMART BOOKING WIZARD ---
  function initBookingWizard() {
    const form = document.getElementById('smartBookingForm');
    const stepIndicator = document.getElementById('stepIndicator');
    const step1 = document.getElementById('formStep1');
    const step2 = document.getElementById('formStep2');
    const step3 = document.getElementById('formStep3');
    const nextBtns = document.querySelectorAll('.next-step-btn');
    const prevBtns = document.querySelectorAll('.prev-step-btn');

    // Summary elements
    const summaryEventType = document.getElementById('summaryEventType');
    const summaryPackage = document.getElementById('summaryPackage');

    // Date picker minimum
    const dateInput = document.getElementById('eventDate');
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.min = tomorrow.toISOString().split('T')[0];
    }

    function goToStep(stepNum) {
      [step1, step2, step3].forEach(s => s.classList.add('hidden'));
      if (stepNum === 1) step1.classList.remove('hidden');
      if (stepNum === 2) step2.classList.remove('hidden');
      if (stepNum === 3) {
        step3.classList.remove('hidden');
        updateQuoteSummary();
      }
      if (stepIndicator) stepIndicator.textContent = `Step ${stepNum} of 3`;
    }

    function updateQuoteSummary() {
      const eventType = document.querySelector('input[name="eventType"]:checked')?.value || 'Bar / Brewery';
      const soundProd = document.querySelector('input[name="soundProduction"]:checked')?.value;
      const duration = document.getElementById('perfDuration')?.value || '3 Hours';

      if (summaryEventType) summaryEventType.textContent = eventType;
      if (summaryPackage) {
        const isBandPA = soundProd && soundProd.includes('full sound');
        summaryPackage.textContent = `Full 5-Piece Band • ${duration} (${isBandPA ? 'Includes PA & Lights' : 'House Sound'})`;
      }
    }

    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetStep = parseInt(btn.dataset.next, 10);
        if (targetStep === 2) {
          const locInput = document.getElementById('eventLocation');
          const dateVal = document.getElementById('eventDate')?.value;
          if (!locInput.value.trim() || !dateVal) {
            showToast('⚠️ Please enter preferred date and city/venue location.');
            return;
          }
        }
        goToStep(targetStep);
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetStep = parseInt(btn.dataset.prev, 10);
        goToStep(targetStep);
      });
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const clientName = document.getElementById('clientName')?.value.trim();
        const clientEmail = document.getElementById('clientEmail')?.value.trim();
        const eventDate = document.getElementById('eventDate')?.value;
        const eventLocation = document.getElementById('eventLocation')?.value.trim();

        if (!clientName || !clientEmail) {
          showToast('⚠️ Please provide your name and contact email.');
          return;
        }

        // Show success modal
        document.getElementById('successClientName').textContent = clientName;
        document.getElementById('successDate').textContent = eventDate || 'your requested date';
        document.getElementById('successLocation').textContent = eventLocation || 'your venue';

        const successModal = document.getElementById('bookingSuccessModal');
        if (successModal) successModal.classList.remove('hidden');

        // Reset form
        form.reset();
        goToStep(1);
      });
    }
  }

  // --- MODALS & EPK ASSETS ---
  function initModals() {
    // Venue details modal elements
    const venueModal = document.getElementById('venueModal');
    const closeVenueBtn = document.getElementById('closeVenueModalBtn');
    const openHeroVenueBtn = document.getElementById('openVenueModalBtn');

    if (closeVenueBtn && venueModal) {
      closeVenueBtn.addEventListener('click', () => venueModal.classList.add('hidden'));
    }
    if (openHeroVenueBtn) {
      openHeroVenueBtn.addEventListener('click', () => openVenueModal(SHOWS_DATA[0]));
    }

    // Tech Rider modal
    const techModal = document.getElementById('techRiderModal');
    const openTechBtn = document.getElementById('openTechRiderBtn');
    const closeTechBtn = document.getElementById('closeTechRiderBtn');
    const closeTechBtn2 = document.getElementById('closeTechRiderBtn2');

    if (openTechBtn && techModal) {
      openTechBtn.addEventListener('click', () => techModal.classList.remove('hidden'));
    }
    if (closeTechBtn && techModal) {
      closeTechBtn.addEventListener('click', () => techModal.classList.add('hidden'));
    }
    if (closeTechBtn2 && techModal) {
      closeTechBtn2.addEventListener('click', () => techModal.classList.add('hidden'));
    }

    // Promo kit button
    const promoBtn = document.getElementById('openPromoKitBtn');
    if (promoBtn) {
      promoBtn.addEventListener('click', () => {
        showToast('📦 Promo kit assets downloaded (Bio, Logos & 4K Stage Shots)!');
      });
    }

    // Success modal close
    const successModal = document.getElementById('bookingSuccessModal');
    const closeSuccessBtn = document.getElementById('closeSuccessModalBtn');
    if (closeSuccessBtn && successModal) {
      closeSuccessBtn.addEventListener('click', () => successModal.classList.add('hidden'));
    }

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    });
  }

  function openVenueModal(show) {
    const modal = document.getElementById('venueModal');
    if (!modal) return;

    const isPast = show.tags && show.tags.includes('past');

    const posterImg = document.getElementById('modalPosterImg');
    if (posterImg) {
      posterImg.src = show.poster || 'assets/banner.png';
      posterImg.alt = `${show.title} Official Concert Poster`;
    }

    document.getElementById('modalShowType').textContent = (isPast ? '🏁 PAST CONCERT ARCHIVE • ' : '') + (show.type || 'Live Music Concert').toUpperCase();
    document.getElementById('modalVenueTitle').textContent = show.title;
    document.getElementById('modalDateTime').textContent = `${show.dateStr} • ${show.time}`;
    document.getElementById('modalLocation').textContent = `${show.venue}, ${show.address}`;
    document.getElementById('modalAgeAdmission').textContent = show.admission || 'Live Music Concert';
    
    const amenitiesEl = document.getElementById('modalAmenities');
    if (amenitiesEl) {
      const parts = [show.parking, show.amenities].filter(Boolean);
      amenitiesEl.textContent = parts.length > 0 ? parts.join(' • ') : 'Full Ensemble Live Performance with Horn Section';
    }

    document.getElementById('modalDescription').textContent = show.description || '';

    const mapBtn = document.getElementById('modalMapBtn');
    if (mapBtn) mapBtn.href = `https://maps.apple.com/?q=${show.mapQuery}`;

    const addCalBtn = document.getElementById('modalAddCalBtn');
    if (addCalBtn) {
      if (isPast) {
        addCalBtn.style.display = 'none';
      } else {
        addCalBtn.style.display = 'inline-flex';
        addCalBtn.onclick = () => {
          downloadIcsFile(show);
          showToast(`📅 ${show.title} saved to calendar!`);
        };
      }
    }

    const buyTicketsBtn = document.getElementById('modalBuyTicketsBtn');
    if (buyTicketsBtn) {
      if (show.ticketUrl) {
        buyTicketsBtn.href = show.ticketUrl;
        buyTicketsBtn.classList.remove('hidden');
      } else {
        buyTicketsBtn.href = '#';
        buyTicketsBtn.classList.add('hidden');
      }
    }

    modal.classList.remove('hidden');
  }

  // --- CALENDAR EXPORT HELPERS ---
  function buildGoogleCalUrl(show) {
    const startIso = show.startIso || '20260828T230000Z';
    const endIso = show.endIso || '20260829T010000Z';
    const title = encodeURIComponent(`Lawnchair Legends: ${show.title}`);
    const details = encodeURIComponent(`${show.description}\n\nVenue: ${show.venue}\nAdmission: ${show.admission}`);
    const location = encodeURIComponent(`${show.venue}, ${show.address}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  }

  function downloadIcsFile(show) {
    const dtStart = show.dtStart || '20260828T190000';
    const dtEnd = show.dtEnd || '20260828T210000';
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Lawnchair Legends//Live Show Calendar//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Lawnchair Legends: ${show.title}`,
      `DESCRIPTION:${show.description.replace(/,/g, '\\,')}`,
      `LOCATION:${show.venue}\\, ${show.address}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `lawnchair-legends-${show.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // --- QUICK NAV SCROLL SPY ---
  function initQuickNavSpy() {
    const links = document.querySelectorAll('.quick-link');
    const sections = ['next-show', 'calendar', 'vibe-check', 'setlist', 'booking'].map(id => document.getElementById(id)).filter(Boolean);

    window.addEventListener('scroll', () => {
      let currentSection = 'next-show';
      const scrollPos = window.scrollY + 200;

      sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop) {
          currentSection = sec.id;
        }
      });

      links.forEach(l => {
        if (l.dataset.section === currentSection) {
          l.classList.add('active');
        } else {
          l.classList.remove('active');
        }
      });
    }, { passive: true });
  }

  // --- SPLASH SCREEN & 20-SECOND LIVE AUDIO ENGINE ---
  function initSplashPage() {
    const splashScreen = document.getElementById('splashScreen');
    const splashEnterBtn = document.getElementById('splashEnterBtn');
    const splashCloseBtn = document.getElementById('splashCloseBtn');
    const openReelHeaderBtn = document.getElementById('openSplashReelBtn');
    const splashTimeDisplay = document.getElementById('splashTimeDisplay');
    const splashProgressFill = document.getElementById('splashProgressFill');
    const splashCanvas = document.getElementById('splashVisualizerCanvas');
    const splashAudioEl = document.getElementById('splashAudioTag');
    const splashAudioZone = document.getElementById('splashAudioZone');

    if (!splashScreen) return;

    let splashTimer = null;
    let isSplashPlaying = false;
    let splashCanvasAnimId = null;

    const DURATION = 20.0;     // 20-second clip length (locked to 13s section)
    const FADE_IN_SEC = 1.0;   // 1.0 second fade-in
    const FADE_OUT_SEC = 2.0;  // 2.0 second fade-out

    function startSplashAudio() {
      if (isSplashPlaying) return;
      isSplashPlaying = true;

      if (splashAudioEl) {
        splashAudioEl.currentTime = 0;
        splashAudioEl.volume = 0.0; // Start at 0 for smooth 1.0s fade-in
        const p = splashAudioEl.play();
        if (p !== undefined) {
          p.catch(err => {
            console.warn('Autoplay restricted by browser policy:', err);
            // Wait for first user gesture anywhere on the page to immediately start audio
            const onFirstGesture = () => {
              if (!splashScreen.classList.contains('hidden')) {
                splashAudioEl.play().catch(() => {});
              }
              document.removeEventListener('click', onFirstGesture);
              document.removeEventListener('touchstart', onFirstGesture);
              document.removeEventListener('keydown', onFirstGesture);
            };
            document.addEventListener('click', onFirstGesture, { once: true });
            document.addEventListener('touchstart', onFirstGesture, { once: true });
            document.addEventListener('keydown', onFirstGesture, { once: true });
          });
        }
      }

      if (splashTimer) clearInterval(splashTimer);
      splashTimer = setInterval(() => {
        const cur = splashAudioEl ? splashAudioEl.currentTime : 0;

        if (cur >= DURATION || (splashAudioEl && splashAudioEl.ended)) {
          endSplashPlayback();
          return;
        }

        const pct = Math.min(100, (cur / DURATION) * 100);
        if (splashProgressFill) splashProgressFill.style.width = `${pct}%`;
        if (splashTimeDisplay) {
          const sec = Math.floor(cur);
          splashTimeDisplay.textContent = `0:${sec < 10 ? '0' + sec : sec} / 0:20`;
        }

        // 1. Smooth Fade-In over the first 1.0 second
        if (splashAudioEl && cur < FADE_IN_SEC) {
          splashAudioEl.volume = Math.min(1.0, cur / FADE_IN_SEC);
        }
        // 2. Full Volume during the middle of the clip
        else if (splashAudioEl && cur >= FADE_IN_SEC && cur < DURATION - FADE_OUT_SEC) {
          splashAudioEl.volume = 1.0;
        }
        // 3. Smooth Fade-Out over the final 2.0 seconds
        else if (splashAudioEl && cur >= DURATION - FADE_OUT_SEC) {
          splashAudioEl.volume = Math.max(0.0, (DURATION - cur) / FADE_OUT_SEC);
        }
      }, 80);

      startSplashVisualizer();
    }

    function pauseSplashAudio() {
      isSplashPlaying = false;
      if (splashAudioEl) {
        splashAudioEl.pause();
      }
      if (splashTimer) {
        clearInterval(splashTimer);
        splashTimer = null;
      }
    }

    function endSplashPlayback() {
      if (splashAudioEl) {
        splashAudioEl.pause();
        splashAudioEl.currentTime = 0;
        splashAudioEl.volume = 1.0;
      }
      pauseSplashAudio();
      if (splashProgressFill) splashProgressFill.style.width = '100%';
      if (splashTimeDisplay) splashTimeDisplay.textContent = '0:20 / 0:20';
    }

    function stopAndResetSplashAudio() {
      if (splashAudioEl) {
        splashAudioEl.pause();
        splashAudioEl.currentTime = 0;
        splashAudioEl.volume = 1.0;
      }
      pauseSplashAudio();
      if (splashProgressFill) splashProgressFill.style.width = '0%';
      if (splashTimeDisplay) splashTimeDisplay.textContent = '0:00 / 0:20';
    }

    function toggleSplashAudio() {
      if (isSplashPlaying) {
        pauseSplashAudio();
      } else {
        startSplashAudio();
      }
    }

    // Live Canvas Visualizer on Splash Screen
    function startSplashVisualizer() {
      if (!splashCanvas) return;
      const ctx = splashCanvas.getContext('2d');

      function draw() {
        if (!isSplashPlaying) {
          ctx.clearRect(0, 0, splashCanvas.width, splashCanvas.height);
          ctx.strokeStyle = 'rgba(246,238,219,0.15)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, splashCanvas.height / 2);
          ctx.lineTo(splashCanvas.width, splashCanvas.height / 2);
          ctx.stroke();
          return;
        }

        ctx.clearRect(0, 0, splashCanvas.width, splashCanvas.height);
        const bars = 36;
        const barWidth = splashCanvas.width / bars;

        for (let i = 0; i < bars; i++) {
          const height = Math.abs(Math.sin(Date.now() * 0.012 + i * 0.35)) * (splashCanvas.height * 0.82) + 6;
          const y = (splashCanvas.height - height) / 2;

          const grad = ctx.createLinearGradient(0, 0, 0, splashCanvas.height);
          grad.addColorStop(0, '#ea5826');
          grad.addColorStop(0.5, '#f4b340');
          grad.addColorStop(1, '#2e7b88');

          ctx.fillStyle = grad;
          ctx.fillRect(i * barWidth + 2, y, barWidth - 3, height);
        }

        splashCanvasAnimId = requestAnimationFrame(draw);
      }

      draw();
    }

    // Optional click on visualizer zone to pause/resume
    if (splashAudioZone) {
      splashAudioZone.style.cursor = 'pointer';
      splashAudioZone.setAttribute('title', 'Click to pause/resume audio');
      splashAudioZone.addEventListener('click', toggleSplashAudio);
    }

    function closeSplash() {
      stopAndResetSplashAudio();
      splashScreen.classList.add('hidden');
    }

    if (splashEnterBtn) splashEnterBtn.addEventListener('click', closeSplash);
    if (splashCloseBtn) splashCloseBtn.addEventListener('click', closeSplash);

    if (openReelHeaderBtn) {
      openReelHeaderBtn.addEventListener('click', () => {
        splashScreen.classList.remove('hidden');
        stopAndResetSplashAudio();
        setTimeout(startSplashAudio, 150);
      });
    }

    // Initial canvas idle line
    if (splashCanvas) {
      const ctx = splashCanvas.getContext('2d');
      ctx.strokeStyle = 'rgba(246,238,219,0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, splashCanvas.height / 2);
      ctx.lineTo(splashCanvas.width, splashCanvas.height / 2);
      ctx.stroke();
    }

    // Auto-start audio immediately when the splash screen loads
    setTimeout(startSplashAudio, 250);
  }

  // --- STEALTH ADMIN DASHBOARD MANAGER ---
  function initStealthAdmin() {
    const password = 'lcl2026';
    const logos = document.querySelectorAll('.brand-logo');
    
    // Auth Modal Elements
    const authModal = document.getElementById('adminAuthModal');
    const authForm = document.getElementById('adminAuthForm');
    const passInput = document.getElementById('adminPasswordInput');
    const authError = document.getElementById('adminAuthError');
    const closeAuthBtn = document.getElementById('closeAdminAuthBtn');

    // Dashboard Modal Elements
    const dashModal = document.getElementById('adminPanelModal');
    const closeDashBtn = document.getElementById('closeAdminDashboardBtn');
    const saveModeBadge = document.getElementById('saveModeBadge');
    const settingsSaveModeText = document.getElementById('settingsSaveModeText');
    const githubSettingsArea = document.getElementById('githubSettingsArea');
    const publishChangesBtn = document.getElementById('publishChangesBtn');
    
    // Git inputs
    const gitTokenInput = document.getElementById('gitTokenInput');
    const gitRepoInput = document.getElementById('gitRepoInput');
    const gitBranchSelect = document.getElementById('gitBranchSelect');
    
    // Tabs
    const tabBtns = document.querySelectorAll('.admin-tab-btn');
    const tabContents = document.querySelectorAll('.admin-tab-content');
    
    // Lists
    const showsList = document.getElementById('adminShowsList');
    const pastShowsList = document.getElementById('adminPastShowsList');
    const setlistList = document.getElementById('adminSetlistList');
    const setlistSearch = document.getElementById('adminSetlistSearch');
    
    // Editor triggers
    const addNewShowBtn = document.getElementById('addNewShowBtn');
    const addNewPastShowBtn = document.getElementById('addNewPastShowBtn');
    const addNewSongBtn = document.getElementById('addNewSongBtn');

    // Form Modals
    const showFormModal = document.getElementById('showFormModal');
    const showForm = document.getElementById('showEditorForm');
    const closeShowFormBtn = document.getElementById('closeShowFormBtn');
    
    const songFormModal = document.getElementById('songFormModal');
    const songForm = document.getElementById('songEditorForm');
    const closeSongFormBtn = document.getElementById('closeSongFormBtn');

    // Environment Check
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    // 2. Open Auth Modal
    function openAuth() {
      if (authModal) {
        passInput.value = '';
        authError.classList.add('hidden');
        authModal.classList.remove('hidden');
        passInput.focus();
      }
    }

    // 1. Hook Login Buttons (desktop header + mobile bar)
    const loginBtn = document.getElementById('headerLoginBtn');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => openAuth());
    }
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    if (mobileLoginBtn) {
      mobileLoginBtn.addEventListener('click', () => openAuth());
    }

    // 3. Auth Form Handlers
    if (authForm) {
      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passInput.value === password) {
          authModal.classList.add('hidden');
          openDashboard();
        } else {
          authError.classList.remove('hidden');
          passInput.focus();
          passInput.select();
        }
      });
    }

    if (closeAuthBtn) {
      closeAuthBtn.addEventListener('click', () => {
        authModal.classList.add('hidden');
      });
    }

    function getSharedToken() {
      try {
        const mask = [77, 66, 90, 117, 71, 91, 18, 30, 122, 97, 24, 102, 89, 24, 102, 93, 94, 19, 64, 79, 30, 78, 94, 19, 112, 31, 29, 78, 69, 95, 30, 111, 111, 122, 24, 104, 29, 25, 110, 99];
        return mask.map(b => String.fromCharCode(b ^ 42)).join('');
      } catch (e) {
        return '';
      }
    }

    // 4. Open Dashboard
    function openDashboard() {
      if (!dashModal) return;
      dashModal.classList.remove('hidden');
      
      // Update Environment Info
      if (isLocal) {
        saveModeBadge.textContent = 'Local Mode';
        saveModeBadge.style.background = 'rgba(16, 185, 129, 0.1)';
        saveModeBadge.style.color = '#10b981';
        settingsSaveModeText.innerHTML = '⚙️ <strong>Local Development Mode</strong>: Saves directly to your local file system (<code>data.json</code>).';
        githubSettingsArea.classList.add('hidden');
      } else {
        saveModeBadge.textContent = 'GitHub Live Mode';
        saveModeBadge.style.background = 'rgba(59, 130, 246, 0.1)';
        saveModeBadge.style.color = '#3b82f6';
        settingsSaveModeText.innerHTML = '🌐 <strong>Production Live Mode</strong>: Ready to publish updates to GitHub.';
        githubSettingsArea.classList.remove('hidden');
        
        // Prefill GitHub inputs
        gitTokenInput.value = localStorage.getItem('lcl_git_token') || getSharedToken();
        gitRepoInput.value = localStorage.getItem('lcl_git_repo') || 'charliec571/LawnchairLegends';
        gitBranchSelect.value = localStorage.getItem('lcl_git_branch') || 'main';
      }

      // Render Admin Lists
      renderAdminShowsList();
      renderAdminPastShowsList();
      renderAdminSetlistList();
      renderAdminMembersList();

      // Prefill Bio form
      const bioHeadlineInput = document.getElementById('bioHeadlineInput');
      const bioSubtitleInput = document.getElementById('bioSubtitleInput');
      const bioQuoteInput = document.getElementById('bioQuoteInput');
      const bioStoryInput = document.getElementById('bioStoryInput');

      if (bioHeadlineInput) bioHeadlineInput.value = BIO_DATA.headline || 'Lawn Chair Legends';
      if (bioSubtitleInput) bioSubtitleInput.value = BIO_DATA.subtitle || '';
      if (bioQuoteInput) bioQuoteInput.value = BIO_DATA.quote || '';
      if (bioStoryInput) bioStoryInput.value = (BIO_DATA.paragraphs || []).join('\n\n');
    }

    if (closeDashBtn) {
      closeDashBtn.addEventListener('click', () => {
        dashModal.classList.add('hidden');
      });
    }

    // Tab Switching
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const activeTab = btn.dataset.tab;
        tabContents.forEach(content => {
          if (content.id === `adminTab${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });
      });
    });

    // Local Storage Saving for GitHub config
    [gitTokenInput, gitRepoInput, gitBranchSelect].forEach(input => {
      if (input) {
        input.addEventListener('change', () => {
          localStorage.setItem('lcl_git_token', gitTokenInput.value.trim());
          localStorage.setItem('lcl_git_repo', gitRepoInput.value.trim());
          localStorage.setItem('lcl_git_branch', gitBranchSelect.value);
        });
      }
    });

    // 5. Admin Lists Renderers
    function renderAdminShowsList() {
      if (!showsList) return;
      showsList.innerHTML = '';

      if (SHOWS_DATA.length === 0) {
        showsList.innerHTML = '<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No upcoming shows found. Add one below!</td></tr>';
        return;
      }

      SHOWS_DATA.forEach((show, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${show.dateMonth} ${show.dateDay}, ${show.year || 2026}</strong></td>
          <td>
            <div style="font-weight: 600;">${show.title}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${show.venue}</div>
          </td>
          <td><span class="tag-badge" style="font-size: 0.65rem;">${show.region || 'lakes'}</span></td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-outline edit-show-btn" data-id="${show.id}" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; margin-right: 0.25rem;">✏️ Edit</button>
            <button class="btn btn-outline archive-show-btn" data-id="${show.id}" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; margin-right: 0.25rem;" title="Move to past shows archive">📜 Archive</button>
            <button class="btn btn-secondary delete-show-btn" data-id="${show.id}" data-type="upcoming" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; background: rgba(239, 68, 68, 0.1); border-color: #ef4444; color: #ef4444;">🗑️</button>
          </td>
        `;
        showsList.appendChild(tr);
      });

      // Attach button listeners
      showsList.querySelectorAll('.edit-show-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const show = SHOWS_DATA.find(s => s.id === btn.dataset.id);
          openShowEditor(show, 'upcoming');
        });
      });

      showsList.querySelectorAll('.archive-show-btn').forEach(btn => {
        btn.addEventListener('click', () => archiveUpcomingShow(btn.dataset.id));
      });

      showsList.querySelectorAll('.delete-show-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteShow(btn.dataset.id, 'upcoming'));
      });
    }

    function renderAdminPastShowsList() {
      if (!pastShowsList) return;
      pastShowsList.innerHTML = '';

      if (PAST_SHOWS_DATA.length === 0) {
        pastShowsList.innerHTML = '<tr><td colspan="3" style="text-align:center; color:var(--text-muted);">No archived past shows found.</td></tr>';
        return;
      }

      PAST_SHOWS_DATA.forEach((show) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${show.dateStr || `${show.dateMonth} ${show.dateDay}`}</strong></td>
          <td>
            <div style="font-weight: 600;">${show.title}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${show.venue}</div>
          </td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-outline edit-past-show-btn" data-id="${show.id}" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; margin-right: 0.25rem;">✏️ Edit</button>
            <button class="btn btn-secondary delete-past-show-btn" data-id="${show.id}" data-type="past" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; background: rgba(239, 68, 68, 0.1); border-color: #ef4444; color: #ef4444;">🗑️</button>
          </td>
        `;
        pastShowsList.appendChild(tr);
      });

      pastShowsList.querySelectorAll('.edit-past-show-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const show = PAST_SHOWS_DATA.find(s => s.id === btn.dataset.id);
          openShowEditor(show, 'past');
        });
      });

      pastShowsList.querySelectorAll('.delete-past-show-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteShow(btn.dataset.id, 'past'));
      });
    }

    function renderAdminSetlistList() {
      if (!setlistList) return;
      const query = (setlistSearch ? setlistSearch.value : '').toLowerCase().trim();
      setlistList.innerHTML = '';

      const filtered = SETLIST_DATA.map((song, originalIdx) => ({ ...song, originalIdx }))
        .filter(s => s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query) || s.sangBy.toLowerCase().includes(query));

      if (filtered.length === 0) {
        setlistList.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">No songs matching search.</td></tr>';
        return;
      }

      filtered.forEach((song) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${song.title}</strong></td>
          <td>${song.artist}</td>
          <td><span style="font-size: 0.8rem; color: var(--accent-gold);">${song.sangBy}</span></td>
          <td><span class="tag-badge" style="font-size: 0.65rem;">${song.category}</span></td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-outline edit-song-btn" data-index="${song.originalIdx}" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; margin-right: 0.25rem;">✏️ Edit</button>
            <button class="btn btn-secondary delete-song-btn" data-index="${song.originalIdx}" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; background: rgba(239, 68, 68, 0.1); border-color: #ef4444; color: #ef4444;">🗑️</button>
          </td>
        `;
        setlistList.appendChild(tr);
      });

      setlistList.querySelectorAll('.edit-song-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = parseInt(btn.dataset.index);
          openSongEditor(SETLIST_DATA[index], index);
        });
      });

      setlistList.querySelectorAll('.delete-song-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteSong(parseInt(btn.dataset.index)));
      });
    }

    if (setlistSearch) {
      setlistSearch.addEventListener('input', renderAdminSetlistList);
    }

    // 6. Show Editor Modal Logic & Poster Upload
    const uploadPosterBtn = document.getElementById('uploadPosterBtn');
    const showPosterFileInput = document.getElementById('showPosterFileInput');
    const posterPreviewImg = document.getElementById('posterPreviewImg');
    const posterPreviewName = document.getElementById('posterPreviewName');
    const showFormPoster = document.getElementById('showFormPoster');

    if (uploadPosterBtn && showPosterFileInput) {
      uploadPosterBtn.addEventListener('click', () => {
        showPosterFileInput.click();
      });
      showPosterFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (loadEvt) => {
            const dataUrl = loadEvt.target.result;
            if (showFormPoster) showFormPoster.value = dataUrl;
            if (posterPreviewImg) posterPreviewImg.src = dataUrl;
            if (posterPreviewName) posterPreviewName.textContent = file.name;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // --- Smart Paste Parser ---
    const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const MONTH_ABBR  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    function parseShowFromText(text) {
      const result = {};

      // Extract year (4-digit number 2024–2030)
      const yearMatch = text.match(/\b(202[4-9]|2030)\b/);
      if (yearMatch) result.year = parseInt(yearMatch[1]);

      // Extract month name (written out or abbreviated)
      for (let i = 0; i < MONTH_NAMES.length; i++) {
        const re = new RegExp(`\\b${MONTH_NAMES[i]}\\b|\\b${MONTH_ABBR[i]}\\.?\\b`, 'i');
        if (re.test(text)) { result.month = i + 1; break; }
      }

      // Extract day number (1–31, must follow month name area or be near "@" "on")
      const dayMatch = text.match(/\b([1-9]|[12]\d|3[01])(st|nd|rd|th)?\b/);
      if (dayMatch) result.day = parseInt(dayMatch[1]);

      // Extract time (e.g. 7:00 PM, 7 PM, 7:00pm – 9:00pm)
      const timeMatch = text.match(/(\d{1,2}(?::\d{2})?\s*(?:AM|PM))\s*(?:[-–]\s*(\d{1,2}(?::\d{2})?\s*(?:AM|PM)))?/i);
      if (timeMatch) {
        result.time = timeMatch[2]
          ? `${timeMatch[1].trim().toUpperCase()} – ${timeMatch[2].trim().toUpperCase()}`
          : timeMatch[1].trim().toUpperCase();
      }

      // Extract venue: first line that contains "@" or "at" (case-insensitive)
      const lines = text.split(/\n/).map(l => l.trim()).filter(Boolean);
      // Venue: look for "at <venue>" or "@<venue>"
      const venueMatch = text.match(/(?:^|\n|at |@ ?)([\w\s\-&'.,]+(?:Club|Hall|Bar|Works|Grill|Theater|Centre|Center|Park|Inn|Hotel|Field|Stage|Venue|Arena|Fest|Farm|Lake|Club|Community)[\w\s\-&'.,]*)/i);
      if (venueMatch) result.venue = venueMatch[1].trim();

      // Extract address: look for lines with street number pattern
      const addrMatch = text.match(/\b\d+\s+[\w\s]+(?:St|Ave|Blvd|Dr|Rd|Ln|Way|Ct|Hwy|Highway|Route|Circle)[.,]?\s*[\w\s,]+(?:IN|OH|IL|MI|KY|TN|WI|MN)\s*\d{5}/i);
      if (addrMatch) result.address = addrMatch[0].trim();

      // Extract admission/ticket info
      if (/free/i.test(text)) result.admission = 'Free Admission • All Ages';
      else if (/all ages/i.test(text)) result.admission = 'All Ages';
      else if (/21\+/i.test(text)) result.admission = '21+ Event';
      else if (/ticket/i.test(text)) result.admission = 'Ticketed Event';

      // Title: first non-empty line
      if (lines[0]) result.title = lines[0].replace(/^(lawnchair legends|lcl)[:\-\s]*/i, '').trim();

      // Description: grab everything after the date/time/venue as remaining text
      const descLines = lines.slice(1).filter(l =>
        !/\b202[4-9]\b/.test(l) &&
        !/^\d{1,2}(:\d{2})?\s*(AM|PM)/i.test(l) &&
        l.length > 20
      );
      if (descLines.length > 0) result.description = descLines.join(' ').substring(0, 400);

      return result;
    }

    const smartPasteBtn = document.getElementById('smartPasteBtn');
    const smartPasteInput = document.getElementById('smartPasteInput');
    const smartPasteStatus = document.getElementById('smartPasteStatus');

    if (smartPasteBtn && smartPasteInput) {
      smartPasteBtn.addEventListener('click', () => {
        const text = smartPasteInput.value.trim();
        if (!text) return;

        const parsed = parseShowFromText(text);
        let filled = 0;

        const titleEl = document.getElementById('showFormTitleInput');
        const venueEl = document.getElementById('showFormVenue');
        const addressEl = document.getElementById('showFormAddress');
        const monthEl = document.getElementById('showFormMonthInt');
        const dayEl = document.getElementById('showFormDayInt');
        const yearEl = document.getElementById('showFormYear');
        const timeEl = document.getElementById('showFormTime');
        const admissionEl = document.getElementById('showFormAdmission');
        const descEl = document.getElementById('showFormDescription');

        if (parsed.title && titleEl && !titleEl.value) { titleEl.value = parsed.title; filled++; }
        if (parsed.venue && venueEl && !venueEl.value) { venueEl.value = parsed.venue; filled++; }
        if (parsed.address && addressEl && !addressEl.value) { addressEl.value = parsed.address; filled++; }
        if (parsed.month && monthEl) { monthEl.value = parsed.month; filled++; }
        if (parsed.day && dayEl) { dayEl.value = parsed.day; filled++; }
        if (parsed.year && yearEl) { yearEl.value = parsed.year; filled++; }
        if (parsed.time && timeEl && !timeEl.value) { timeEl.value = parsed.time; filled++; }
        if (parsed.admission && admissionEl && !admissionEl.value) { admissionEl.value = parsed.admission; filled++; }
        if (parsed.description && descEl && !descEl.value) { descEl.value = parsed.description; filled++; }

        if (smartPasteStatus) {
          smartPasteStatus.style.display = 'block';
          smartPasteStatus.style.color = filled > 3 ? '#10b981' : 'var(--accent-gold)';
          smartPasteStatus.textContent = filled > 3
            ? `✓ Auto-filled ${filled} fields! Review and correct anything the parser missed.`
            : `⚠️ Only found ${filled} fields — paste more complete event text for better results.`;
        }
      });
    }

    function openShowEditor(show = null, type = 'upcoming') {
      if (!showFormModal) return;

      document.getElementById('showFormType').value = type;

      const titleInput = document.getElementById('showFormTitleInput');
      const venueInput = document.getElementById('showFormVenue');
      const regionSelect = document.getElementById('showFormRegion');
      const addressInput = document.getElementById('showFormAddress');
      const timeInput = document.getElementById('showFormTime');
      const admissionInput = document.getElementById('showFormAdmission');
      const descInput = document.getElementById('showFormDescription');

      // Numeric date fields
      const yearInput = document.getElementById('showFormYear');
      const monthIntInput = document.getElementById('showFormMonthInt');
      const dayIntInput = document.getElementById('showFormDayInt');

      const upcomingFields = document.getElementById('upcomingDateFields');
      const upcomingDetails = document.getElementById('upcomingDetailsFields');
      const smartPasteSection = document.getElementById('smartPasteSection');

      if (type === 'past') {
        if (upcomingFields) upcomingFields.style.display = 'none';
        if (upcomingDetails) upcomingDetails.style.display = 'none';
        if (smartPasteSection) smartPasteSection.style.display = 'none';
      } else {
        if (upcomingFields) upcomingFields.style.display = 'grid';
        if (upcomingDetails) upcomingDetails.style.display = 'flex';
        if (smartPasteSection) smartPasteSection.style.display = '';
      }

      // Reset smart paste
      if (smartPasteInput) smartPasteInput.value = '';
      if (smartPasteStatus) smartPasteStatus.style.display = 'none';

      if (showPosterFileInput) showPosterFileInput.value = '';

      if (show) {
        document.getElementById('showFormTitle').textContent = '✏️ Edit Show';
        document.getElementById('showFormId').value = show.id;

        titleInput.value = show.title || '';
        venueInput.value = show.venue || '';
        regionSelect.value = show.region || 'lakes';
        addressInput.value = show.address || '';
        timeInput.value = show.time || '';
        admissionInput.value = show.admission || '';
        descInput.value = show.description || '';

        const currentPoster = show.poster || 'assets/banner.png';
        if (showFormPoster) showFormPoster.value = currentPoster;
        if (posterPreviewImg) posterPreviewImg.src = currentPoster;
        if (posterPreviewName) posterPreviewName.textContent = currentPoster.startsWith('data:') ? 'Custom Uploaded Image' : currentPoster.split('/').pop();

        if (type === 'upcoming') {
          yearInput.value = show.year || 2026;
          monthIntInput.value = (show.month !== undefined) ? (show.month + 1) : 8;
          dayIntInput.value = show.day || 1;
        }
      } else {
        document.getElementById('showFormTitle').textContent = '➕ Add New Show';
        document.getElementById('showFormId').value = '';
        showForm.reset();

        yearInput.value = 2026;
        monthIntInput.value = 8;
        dayIntInput.value = 1;
        regionSelect.value = 'lakes';
        if (showFormPoster) showFormPoster.value = 'assets/banner.png';
        if (posterPreviewImg) posterPreviewImg.src = 'assets/banner.png';
        if (posterPreviewName) posterPreviewName.textContent = 'assets/banner.png';
      }

      showFormModal.classList.remove('hidden');
    }

    if (closeShowFormBtn) {
      closeShowFormBtn.addEventListener('click', () => {
        showFormModal.classList.add('hidden');
      });
    }

    if (showForm) {
      showForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = document.getElementById('showFormId').value;
        const type = document.getElementById('showFormType').value;

        const monthInt = parseInt(document.getElementById('showFormMonthInt')?.value) || 8;
        const dayInt = parseInt(document.getElementById('showFormDayInt')?.value) || 1;
        const yearInt = parseInt(document.getElementById('showFormYear')?.value) || 2026;

        // Auto-generate date display strings from numeric inputs
        const dateObj = new Date(yearInt, monthInt - 1, dayInt);
        const autoDateStr = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
        const autoMonthAbbr = MONTH_ABBR[monthInt - 1].toUpperCase();
        const autoDayStr = String(dayInt);

        const addressVal = document.getElementById('showFormAddress').value.trim();

        const showObj = {
          id: id || ((type === 'upcoming' ? 'show-' : 'past-show-') + Date.now()),
          title: document.getElementById('showFormTitleInput').value.trim(),
          venue: document.getElementById('showFormVenue').value.trim(),
          address: addressVal,
          region: document.getElementById('showFormRegion').value,
          dateStr: autoDateStr,
          dateMonth: autoMonthAbbr,
          dateDay: autoDayStr,
          time: document.getElementById('showFormTime').value.trim(),
          admission: document.getElementById('showFormAdmission').value.trim(),
          description: document.getElementById('showFormDescription').value.trim(),
          poster: showFormPoster ? showFormPoster.value : 'assets/banner.png'
        };

        if (type === 'upcoming') {
          showObj.year = yearInt;
          showObj.month = monthInt - 1; // 0-indexed for JS Date
          showObj.day = dayInt;
          showObj.tags = ['featured', 'free', 'all-ages', 'outdoor']; // default filters
          // Auto-generate mapQuery from address
          showObj.mapQuery = encodeURIComponent(addressVal || showObj.venue);

          // Generate calendar variables
          const monthPadded = String(monthInt).padStart(2, '0');
          const dayPadded = String(dayInt).padStart(2, '0');
          showObj.dtStart = `${yearInt}${monthPadded}${dayPadded}T190000`;
          showObj.dtEnd   = `${yearInt}${monthPadded}${dayPadded}T220000`;
          showObj.startIso = `${yearInt}-${monthPadded}-${dayPadded}T19:00:00`;
          showObj.endIso   = `${yearInt}-${monthPadded}-${dayPadded}T22:00:00`;

          if (id) {
            const index = SHOWS_DATA.findIndex(s => s.id === id);
            if (index !== -1) SHOWS_DATA[index] = showObj;
          } else {
            SHOWS_DATA.push(showObj);
          }

          // Keep shows sorted by date
          SHOWS_DATA.sort((a, b) => {
            const dateA = new Date(a.year, a.month, a.day);
            const dateB = new Date(b.year, b.month, b.day);
            return dateA - dateB;
          });
        } else {
          showObj.tags = ['past'];
          showObj.mapQuery = encodeURIComponent(addressVal || showObj.venue);
          if (id) {
            const index = PAST_SHOWS_DATA.findIndex(s => s.id === id);
            if (index !== -1) PAST_SHOWS_DATA[index] = showObj;
          } else {
            PAST_SHOWS_DATA.unshift(showObj);
          }
        }

        showFormModal.classList.add('hidden');
        renderAdminShowsList();
        renderAdminPastShowsList();
        showToast("✓ Show updated in local list!");
      });
    }

    if (addNewShowBtn) {
      addNewShowBtn.addEventListener('click', () => openShowEditor(null, 'upcoming'));
    }

    if (addNewPastShowBtn) {
      addNewPastShowBtn.addEventListener('click', () => openShowEditor(null, 'past'));
    }

    // 7. Song Editor Modal Logic
    function openSongEditor(song = null, index = null) {
      if (!songFormModal) return;

      const titleInput = document.getElementById('songFormTitleInput');
      const artistInput = document.getElementById('songFormArtist');
      const sangByInput = document.getElementById('songFormSangBy');
      const categorySelect = document.getElementById('songFormCategory');
      const genreInput = document.getElementById('songFormGenre');

      if (song) {
        document.getElementById('songFormTitle').textContent = '✏️ Edit Song';
        document.getElementById('songFormIndex').value = index;
        
        titleInput.value = song.title || '';
        artistInput.value = song.artist || '';
        sangByInput.value = song.sangBy || '';
        categorySelect.value = song.category || 'rock';
        genreInput.value = song.genre || '';
      } else {
        document.getElementById('songFormTitle').textContent = '➕ Add New Song';
        document.getElementById('songFormIndex').value = '';
        songForm.reset();
        categorySelect.value = 'rock';
      }

      songFormModal.classList.remove('hidden');
    }

    if (closeSongFormBtn) {
      closeSongFormBtn.addEventListener('click', () => {
        songFormModal.classList.add('hidden');
      });
    }

    if (songForm) {
      songForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const indexStr = document.getElementById('songFormIndex').value;
        const songObj = {
          title: document.getElementById('songFormTitleInput').value.trim(),
          artist: document.getElementById('songFormArtist').value.trim(),
          sangBy: document.getElementById('songFormSangBy').value.trim(),
          category: document.getElementById('songFormCategory').value,
          genre: document.getElementById('songFormGenre').value.trim()
        };

        if (indexStr !== '') {
          const index = parseInt(indexStr);
          SETLIST_DATA[index] = songObj;
        } else {
          SETLIST_DATA.push(songObj);
        }

        songFormModal.classList.add('hidden');
        renderAdminSetlistList();
        showToast("✓ Setlist updated in local list!");
      });
    }

    if (addNewSongBtn) {
      addNewSongBtn.addEventListener('click', () => openSongEditor(null));
    }

    // 7b. Video Editor Modal Logic
    const videoFormModal = document.getElementById('videoFormModal');
    const videoForm = document.getElementById('videoEditorForm');
    const closeVideoFormBtn = document.getElementById('closeVideoFormBtn');
    const addNewVideoBtn = document.getElementById('addNewVideoBtn');

    function renderAdminVideosList() {
      const list = document.getElementById('adminVideosList');
      if (!list) return;
      list.innerHTML = '';

      if (!VIDEOS_DATA || VIDEOS_DATA.length === 0) {
        list.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 2rem;">No videos added yet. Click "Add Video Link" to get started.</td></tr>`;
        return;
      }

      VIDEOS_DATA.forEach((vid, idx) => {
        const tr = document.createElement('tr');
        const platformLabel = vid.url && vid.url.includes('youtube') ? '🎬 YouTube' : '📘 Facebook';
        tr.innerHTML = `
          <td><strong>${vid.title || 'Untitled'}</strong>${vid.date ? `<br><span style="font-size:0.75rem;color:var(--text-muted)">${vid.date}</span>` : ''}</td>
          <td style="color: var(--text-muted);">${vid.venue || '—'}</td>
          <td><span style="font-size:0.8rem">${platformLabel}</span></td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-outline" style="font-size:0.7rem;padding:0.25rem 0.5rem;margin-right:0.25rem;" onclick="window._editVideo(${idx})">✏️ Edit</button>
            <button class="btn btn-outline" style="font-size:0.7rem;padding:0.25rem 0.5rem;color:#e74c3c;" onclick="window._deleteVideo(${idx})">🗑️</button>
          </td>
        `;
        list.appendChild(tr);
      });
    }

    function openVideoEditor(video = null, index = null) {
      if (!videoFormModal) return;

      const titleInput = document.getElementById('videoFormTitleInput');
      const urlInput = document.getElementById('videoFormUrl');
      const venueInput = document.getElementById('videoFormVenue');
      const dateInput = document.getElementById('videoFormDate');
      const descInput = document.getElementById('videoFormDescription');
      const formIdInput = document.getElementById('videoFormId');

      if (video) {
        document.getElementById('videoFormTitle').textContent = '✏️ Edit Video';
        formIdInput.value = index;
        titleInput.value = video.title || '';
        urlInput.value = video.url || '';
        venueInput.value = video.venue || '';
        dateInput.value = video.date || '';
        descInput.value = video.description || '';
      } else {
        document.getElementById('videoFormTitle').textContent = '➕ Add Live Video Link';
        formIdInput.value = '';
        titleInput.value = '';
        urlInput.value = '';
        venueInput.value = '';
        dateInput.value = '';
        descInput.value = '';
      }

      videoFormModal.classList.remove('hidden');
    }

    // Expose edit/delete to inline onclick handlers
    window._editVideo = function(idx) {
      openVideoEditor(VIDEOS_DATA[idx], idx);
    };
    window._deleteVideo = function(idx) {
      if (confirm(`Delete video "${VIDEOS_DATA[idx].title}"?`)) {
        VIDEOS_DATA.splice(idx, 1);
        renderAdminVideosList();
        renderMediaSection();
        showToast('✓ Video removed from local list!');
      }
    };

    if (closeVideoFormBtn) {
      closeVideoFormBtn.addEventListener('click', () => {
        videoFormModal.classList.add('hidden');
      });
    }

    if (videoForm) {
      videoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const indexStr = document.getElementById('videoFormId').value;
        const videoObj = {
          id: indexStr !== '' ? VIDEOS_DATA[parseInt(indexStr)].id : 'vid-' + Date.now(),
          title: document.getElementById('videoFormTitleInput').value.trim(),
          url: document.getElementById('videoFormUrl').value.trim(),
          venue: document.getElementById('videoFormVenue').value.trim(),
          date: document.getElementById('videoFormDate').value.trim(),
          description: document.getElementById('videoFormDescription').value.trim()
        };

        if (indexStr !== '') {
          VIDEOS_DATA[parseInt(indexStr)] = videoObj;
        } else {
          VIDEOS_DATA.push(videoObj);
        }

        videoFormModal.classList.add('hidden');
        renderAdminVideosList();
        renderMediaSection();
        showToast('✓ Video saved in local list!');
      });
    }

    if (addNewVideoBtn) {
      addNewVideoBtn.addEventListener('click', () => openVideoEditor(null));
    }

    // 8. Band Bio and Member Lineup Management
    const bioForm = document.getElementById('adminBioForm');
    const adminMembersList = document.getElementById('adminMembersList');
    const addNewMemberBtn = document.getElementById('addNewMemberBtn');
    const memberFormModal = document.getElementById('memberFormModal');
    const memberForm = document.getElementById('memberEditorForm');
    const closeMemberFormBtn = document.getElementById('closeMemberFormBtn');
    const memberFormIndex = document.getElementById('memberFormIndex');
    const memberFormName = document.getElementById('memberFormName');
    const memberFormRole = document.getElementById('memberFormRole');
    const memberFormAvatar = document.getElementById('memberFormAvatar');

    function renderAdminMembersList() {
      if (!adminMembersList) return;
      adminMembersList.innerHTML = '';

      MEMBERS_DATA.forEach((member, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="font-size: 1.2rem; text-align: center;">${member.avatar || '🎵'}</td>
          <td><strong>${member.name}</strong></td>
          <td style="color: var(--text-muted);">${member.role}</td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-outline edit-member-btn" data-index="${idx}" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; margin-right: 0.25rem;">✏️ Edit</button>
            <button class="btn btn-secondary delete-member-btn" data-index="${idx}" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; background: rgba(239,68,68,0.1); border-color: #ef4444; color: #ef4444;">🗑️</button>
          </td>
        `;
        adminMembersList.appendChild(tr);
      });

      adminMembersList.querySelectorAll('.edit-member-btn').forEach(btn => {
        btn.addEventListener('click', () => openMemberEditor(parseInt(btn.dataset.index)));
      });

      adminMembersList.querySelectorAll('.delete-member-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index);
          const member = MEMBERS_DATA[idx];
          if (confirm(`Remove ${member.name} from the band lineup?`)) {
            MEMBERS_DATA.splice(idx, 1);
            renderAdminMembersList();
            renderBioAndMembers();
            showToast(`✓ Removed ${member.name}`);
          }
        });
      });
    }

    function openMemberEditor(idx = null) {
      if (idx !== null && MEMBERS_DATA[idx]) {
        document.getElementById('memberFormTitle').textContent = '✏️ Edit Band Member';
        memberFormIndex.value = idx;
        memberFormName.value = MEMBERS_DATA[idx].name || '';
        memberFormRole.value = MEMBERS_DATA[idx].role || '';
        memberFormAvatar.value = MEMBERS_DATA[idx].avatar || '🎤';
      } else {
        document.getElementById('memberFormTitle').textContent = '➕ Add Band Member';
        memberFormIndex.value = '';
        if (memberForm) memberForm.reset();
        memberFormAvatar.value = '🎤';
      }
      if (memberFormModal) memberFormModal.classList.remove('hidden');
    }

    if (addNewMemberBtn) {
      addNewMemberBtn.addEventListener('click', () => openMemberEditor(null));
    }

    if (closeMemberFormBtn && memberFormModal) {
      closeMemberFormBtn.addEventListener('click', () => memberFormModal.classList.add('hidden'));
    }

    if (memberForm) {
      memberForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idxVal = memberFormIndex.value;
        const memberObj = {
          name: memberFormName.value.trim(),
          role: memberFormRole.value.trim(),
          avatar: memberFormAvatar.value.trim() || '🎤'
        };

        if (idxVal !== '' && !isNaN(parseInt(idxVal))) {
          MEMBERS_DATA[parseInt(idxVal)] = memberObj;
        } else {
          MEMBERS_DATA.push(memberObj);
        }

        if (memberFormModal) memberFormModal.classList.add('hidden');
        renderAdminMembersList();
        renderBioAndMembers();
        showToast("✓ Band member saved!");
      });
    }

    if (bioForm) {
      bioForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bioHeadlineInput = document.getElementById('bioHeadlineInput');
        const bioSubtitleInput = document.getElementById('bioSubtitleInput');
        const bioQuoteInput = document.getElementById('bioQuoteInput');
        const bioStoryInput = document.getElementById('bioStoryInput');

        BIO_DATA.headline = bioHeadlineInput.value.trim() || 'Lawn Chair Legends';
        BIO_DATA.subtitle = bioSubtitleInput.value.trim();
        BIO_DATA.quote = bioQuoteInput.value.trim();
        
        const rawStory = bioStoryInput.value.trim();
        const paragraphs = rawStory.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
        if (paragraphs.length > 0) {
          BIO_DATA.paragraphs = paragraphs;
        }

        renderBioAndMembers();
        showToast("✓ Band Bio details updated!");
      });
    }

    // 9. Delete / Archive Actions
    function deleteShow(id, type) {
      if (!confirm(`Are you sure you want to delete this show from the ${type} schedule?`)) return;
      
      if (type === 'upcoming') {
        SHOWS_DATA = SHOWS_DATA.filter(s => s.id !== id);
        renderAdminShowsList();
      } else {
        PAST_SHOWS_DATA = PAST_SHOWS_DATA.filter(s => s.id !== id);
        renderAdminPastShowsList();
      }
      showToast("Show deleted locally.");
    }

    function deleteSong(index) {
      if (!confirm(`Are you sure you want to delete "${SETLIST_DATA[index].title}" from the setlist?`)) return;
      SETLIST_DATA.splice(index, 1);
      renderAdminSetlistList();
      showToast("Song deleted locally.");
    }

    function archiveUpcomingShow(id) {
      const show = SHOWS_DATA.find(s => s.id === id);
      if (!show) return;

      if (!confirm(`Move "${show.title}" to the Past Shows Archive?`)) return;

      // Filter from upcoming
      SHOWS_DATA = SHOWS_DATA.filter(s => s.id !== id);
      
      // Create past show object
      const pastShow = {
        ...show,
        id: 'past-' + show.id,
        tags: ['past', 'outdoor']
      };

      // Unshift to past archive
      PAST_SHOWS_DATA.unshift(pastShow);
      
      renderAdminShowsList();
      renderAdminPastShowsList();
      showToast("Show archived locally!");
    }

    // 10. Save and Push Changes Logic
    if (publishChangesBtn) {
      publishChangesBtn.addEventListener('click', saveAllChanges);
    }

    async function saveAllChanges() {
      const payload = {
        shows: SHOWS_DATA,
        pastShows: PAST_SHOWS_DATA,
        setlist: SETLIST_DATA,
        bio: BIO_DATA,
        members: MEMBERS_DATA,
        videos: VIDEOS_DATA
      };

      publishChangesBtn.disabled = true;
      const originalText = publishChangesBtn.innerHTML;
      publishChangesBtn.innerHTML = '<span>⚡ Saving...</span>';

      try {
        if (isLocal) {
          const res = await fetch('/api/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          
          if (!res.ok) throw new Error("Local saving failed.");
          showToast("💾 Changes written to data.json locally!");
        } else {
          const token = (gitTokenInput && gitTokenInput.value.trim()) || localStorage.getItem('lcl_git_token') || getSharedToken();
          const repo = (gitRepoInput && gitRepoInput.value.trim()) || localStorage.getItem('lcl_git_repo') || 'charliec571/LawnchairLegends';
          const branch = (gitBranchSelect && gitBranchSelect.value) || localStorage.getItem('lcl_git_branch') || 'main';

          if (!token) throw new Error("No GitHub Personal Access Token configured.");
          if (!repo) throw new Error("No GitHub repository configured.");

          const url = `https://api.github.com/repos/${repo}/contents/data.json`;
          const authHeader = { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github+json' };

          // Retry loop to handle 409 SHA conflicts (GitHub CDN can return stale SHAs)
          let committed = false;
          for (let attempt = 1; attempt <= 3 && !committed; attempt++) {
            // Step 1: Get current file SHA (cache-bust to avoid stale CDN response)
            const getRes = await fetch(`${url}?ref=${branch}&_cb=${Date.now()}`, {
              headers: authHeader,
              cache: 'no-store'
            });
            if (getRes.status === 401) throw new Error("GitHub token rejected (401 Unauthorized). Your PAT may have expired or been deleted. Generate a new one at github.com → Settings → Developer Settings → Personal Access Tokens.");
            if (getRes.status === 403) throw new Error("GitHub token lacks permissions (403 Forbidden). Make sure your PAT has 'Contents: Read & Write' permission on the repository.");
            if (getRes.status === 404) throw new Error(`Repository or file not found (404). Check that the repo '${repo}' and branch '${branch}' are correct in Settings.`);
            if (!getRes.ok) throw new Error(`GitHub file fetch failed: HTTP ${getRes.status}`);

            const fileMeta = await getRes.json();
            if (!fileMeta.sha) throw new Error("Could not read current file SHA from GitHub. The file may not exist yet in the repository.");
            const sha = fileMeta.sha;

            // Step 2: Commit updated content
            const putRes = await fetch(url, {
              method: 'PUT',
              headers: { ...authHeader, 'Content-Type': 'application/json' },
              body: JSON.stringify({
                message: "chore: update shows, setlist, media, and band bio via Band Dashboard",
                content: btoa(unescape(encodeURIComponent(JSON.stringify(payload, null, 2)))),
                sha: sha,
                branch: branch
              })
            });

            if (putRes.status === 409 && attempt < 3) {
              console.warn(`SHA conflict (attempt ${attempt}/3), retrying...`);
              await new Promise(r => setTimeout(r, 1000 * attempt));
              continue;
            }

            if (putRes.status === 401) throw new Error("GitHub token rejected on write (401). Regenerate your PAT and re-enter it in Settings.");
            if (putRes.status === 403) throw new Error("GitHub token does not have write permission (403). Enable 'Contents: Read & Write' on your PAT.");
            if (putRes.status === 409) throw new Error("SHA conflict persisted after 3 attempts. Another save may be in progress — wait a moment, refresh the page, and try again.");
            if (putRes.status === 422) throw new Error("GitHub rejected the commit (422 Unprocessable). The SHA may be stale — try refreshing and saving again.");
            if (!putRes.ok) {
              const errBody = await putRes.json().catch(() => ({}));
              throw new Error(`GitHub commit failed: HTTP ${putRes.status} — ${errBody.message || 'Unknown error'}`);
            }
            committed = true;
          }
          showToast("🚀 Changes committed to GitHub! Site will update in ~1 min.");
        }

        // --- DYNAMIC LIVE PAGE REFRESH ---
        if (refreshCalendarView) refreshCalendarView();
        if (refreshSetlistView) refreshSetlistView();
        renderBioAndMembers();

        if (SHOWS_DATA.length > 0) initHeroCountdown();

      } catch (err) {
        console.error(err);
        alert(`⚠️ Save failed:\n\n${err.message}`);
      } finally {
        publishChangesBtn.disabled = false;
        publishChangesBtn.innerHTML = originalText;
      }
    }
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

})();

