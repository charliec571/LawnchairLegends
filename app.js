/* ==========================================================================
   LAWNCHAIR LEGENDS - INTERACTIVE APPLICATION LOGIC
   Mobile-First Web App Hub for Live Music, EPK, and Booking
   ========================================================================== */

(function () {
  'use strict';

  // --- 1. SHOWS DATABASE (Kendallville, Fort Wayne & Lake Country) ---
  // --- 1. SHOWS DATABASE (The 3 Confirmed Upcoming Shows) ---
  const SHOWS_DATA = [
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
      mapQuery: 'Community+Learning+Center+401+E+Diamond+St+Kendallville+IN+46755'
    }
  ];

  // --- PAST SHOWS ARCHIVE DATABASE ---
  const PAST_SHOWS_DATA = [
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
  const SETLIST_DATA = [
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

  // --- 5. INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initSplashPage();
    initFacebookNotice();
    initHeroCountdown();
    initCalendarSystem();
    initEPKPlayer();
    initSetlistCatalog();
    initAvailabilitySlots();
    initBookingWizard();
    initModals();
    initQuickNavSpy();
    initRSVPButton();
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

  // --- HERO LIVE COUNTDOWN TIMER ---
  function initHeroCountdown() {
    const nextShow = SHOWS_DATA[0]; // Bikes on the Bricks
    const targetDate = new Date(nextShow.year, nextShow.month, nextShow.day, 19, 0, 0);

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    function updateCountdown() {
      const now = new Date();
      let diff = targetDate.getTime() - now.getTime();

      // If in past, simulate an upcoming date in 12 days for demo
      if (diff < 0) {
        diff = (12 * 86400 + 18 * 3600 + 45 * 60 + 20) * 1000;
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
    setInterval(updateCountdown, 1000);

    // Share Show Button
    const shareBtn = document.getElementById('shareShowBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const shareData = {
          title: 'Catch Lawnchair Legends Live!',
          text: `Join us at ${nextShow.title} (${nextShow.dateStr})! High-energy horn-infused rock & party anthems in Fort Wayne.`,
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
      calToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        calMenu.classList.toggle('hidden');
        calToggle.parentElement.classList.toggle('dropdown-open');
      });

      document.addEventListener('click', (e) => {
        if (!calToggle.contains(e.target) && !calMenu.contains(e.target)) {
          calMenu.classList.add('hidden');
          calToggle.parentElement.classList.remove('dropdown-open');
        }
      });
    }

    // Google Calendar & .ics export for Next Up Show
    const gCalBtn = document.getElementById('addGoogleCal');
    const icsBtn = document.getElementById('downloadIcsBtn');

    if (gCalBtn) {
      gCalBtn.href = buildGoogleCalUrl(nextShow);
      gCalBtn.target = '_blank';
    }

    if (icsBtn) {
      icsBtn.addEventListener('click', () => {
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
            <img src="${show.poster}" alt="${show.title} Official Poster" loading="lazy" class="show-poster-thumb-img" />
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

    document.getElementById('modalShowType').textContent = (isPast ? '🏁 PAST CONCERT ARCHIVE • ' : '') + show.type.toUpperCase();
    document.getElementById('modalVenueTitle').textContent = show.title;
    document.getElementById('modalDateTime').textContent = `${show.dateStr} • ${show.time}`;
    document.getElementById('modalLocation').textContent = `${show.venue}, ${show.address}`;
    document.getElementById('modalAgeAdmission').textContent = show.admission || 'Live Music Concert';
    
    const amenitiesEl = document.getElementById('modalAmenities');
    if (amenitiesEl) {
      const parts = [show.parking, show.amenities].filter(Boolean);
      amenitiesEl.textContent = parts.length > 0 ? parts.join(' • ') : 'Full Ensemble Live Performance with Horn Section';
    }

    document.getElementById('modalDescription').textContent = show.description;

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
        saveModeBadge.textContent = 'GitHub Pages Mode';
        saveModeBadge.style.background = 'rgba(59, 130, 246, 0.1)';
        saveModeBadge.style.color = '#3b82f6';
        settingsSaveModeText.innerHTML = '🌐 <strong>Production Live Mode</strong>: Commits changes directly to your GitHub repository using a personal access token.';
        githubSettingsArea.classList.remove('hidden');
        
        // Prefill GitHub inputs from localStorage
        gitTokenInput.value = localStorage.getItem('lcl_git_token') || '';
        gitRepoInput.value = localStorage.getItem('lcl_git_repo') || 'charliec571/LawnchairLegends';
        gitBranchSelect.value = localStorage.getItem('lcl_git_branch') || 'dev';
      }

      // Render Admin Lists
      renderAdminShowsList();
      renderAdminPastShowsList();
      renderAdminSetlistList();
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

    // 5. Render Admin Gigs
    function renderAdminShowsList() {
      if (!showsList) return;
      showsList.innerHTML = '';
      
      SHOWS_DATA.forEach(show => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td style="font-weight:600; color:var(--accent-gold); white-space:nowrap;">${show.dateMonth} ${show.dateDay}</td>
          <td>
            <div style="font-weight:600; color:var(--text-parchment);">${show.title}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${show.venue}</div>
          </td>
          <td><span style="font-size:0.75rem; background:rgba(246,238,219,0.04); border:1px solid var(--border-subtle); padding:0.15rem 0.35rem; border-radius:3px;">${show.region}</span></td>
          <td style="text-align:right; white-space:nowrap;">
            <button class="admin-action-btn edit" data-id="${show.id}" title="Edit Show Details">✏️ Edit</button>
            <button class="admin-action-btn archive" data-id="${show.id}" title="Move to Past Archive">📦 Archive</button>
            <button class="admin-action-btn delete" data-id="${show.id}" title="Delete Show">❌ Delete</button>
          </td>
        `;

        row.querySelector('.edit').addEventListener('click', () => openShowEditor(show, 'upcoming'));
        row.querySelector('.archive').addEventListener('click', () => archiveUpcomingShow(show.id));
        row.querySelector('.delete').addEventListener('click', () => deleteShow(show.id, 'upcoming'));
        
        showsList.appendChild(row);
      });
    }

    function renderAdminPastShowsList() {
      if (!pastShowsList) return;
      pastShowsList.innerHTML = '';
      
      PAST_SHOWS_DATA.forEach(show => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td style="font-weight:600; color:var(--text-secondary); white-space:nowrap;">${show.dateMonth} ${show.dateDay}</td>
          <td>
            <div style="font-weight:600; color:var(--text-muted);">${show.title}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${show.venue}</div>
          </td>
          <td style="text-align:right; white-space:nowrap;">
            <button class="admin-action-btn edit" data-id="${show.id}" title="Edit Show Details">✏️ Edit</button>
            <button class="admin-action-btn delete" data-id="${show.id}" title="Delete Show">❌ Delete</button>
          </td>
        `;

        row.querySelector('.edit').addEventListener('click', () => openShowEditor(show, 'past'));
        row.querySelector('.delete').addEventListener('click', () => deleteShow(show.id, 'past'));
        
        pastShowsList.appendChild(row);
      });
    }

    function renderAdminSetlistList() {
      if (!setlistList) return;
      setlistList.innerHTML = '';
      
      const query = setlistSearch.value.trim().toLowerCase();
      const filtered = SETLIST_DATA.filter(song => {
        return !query || 
          song.title.toLowerCase().includes(query) || 
          song.artist.toLowerCase().includes(query) ||
          song.sangBy.toLowerCase().includes(query);
      });

      filtered.forEach((song, index) => {
        // Find index of this song in global SETLIST_DATA
        const originalIndex = SETLIST_DATA.indexOf(song);
        const row = document.createElement('tr');
        row.innerHTML = `
          <td style="font-weight:600; color:var(--text-parchment);">${song.title}</td>
          <td>${song.artist}</td>
          <td style="color:var(--accent-teal-light); font-weight:500;">${song.sangBy}</td>
          <td><span style="font-size:0.75rem; background:rgba(246,238,219,0.04); border:1px solid var(--border-subtle); padding:0.15rem 0.35rem; border-radius:3px;">${song.category}</span></td>
          <td style="text-align:right; white-space:nowrap;">
            <button class="admin-action-btn edit" title="Edit Song Details">✏️ Edit</button>
            <button class="admin-action-btn delete" title="Delete Song">❌ Delete</button>
          </td>
        `;

        row.querySelector('.edit').addEventListener('click', () => openSongEditor(song, originalIndex));
        row.querySelector('.delete').addEventListener('click', () => deleteSong(originalIndex));
        
        setlistList.appendChild(row);
      });
    }

    if (setlistSearch) {
      setlistSearch.addEventListener('input', renderAdminSetlistList);
    }

    // 6. Show Editor Modal Logic
    function openShowEditor(show = null, type = 'upcoming') {
      if (!showFormModal) return;
      
      document.getElementById('showFormType').value = type;
      const titleInput = document.getElementById('showFormTitleInput');
      const venueInput = document.getElementById('showFormVenue');
      const regionSelect = document.getElementById('showFormRegion');
      const addressInput = document.getElementById('showFormAddress');
      const dateStrInput = document.getElementById('showFormDateStr');
      const monthStrInput = document.getElementById('showFormMonthStr');
      const dayStrInput = document.getElementById('showFormDayStr');
      const timeInput = document.getElementById('showFormTime');
      const admissionInput = document.getElementById('showFormAdmission');
      const descInput = document.getElementById('showFormDescription');
      
      // Upcoming specific fields
      const yearInput = document.getElementById('showFormYear');
      const monthIntInput = document.getElementById('showFormMonthInt');
      const dayIntInput = document.getElementById('showFormDayInt');
      const parkingInput = document.getElementById('showFormParking');
      const amenitiesInput = document.getElementById('showFormAmenities');
      const posterInput = document.getElementById('showFormPoster');
      const mapQueryInput = document.getElementById('showFormMapQuery');

      const upcomingFields = document.getElementById('upcomingDateFields');
      const upcomingDetails = document.getElementById('upcomingDetailsFields');

      if (type === 'past') {
        upcomingFields.style.display = 'none';
        upcomingDetails.style.display = 'none';
      } else {
        upcomingFields.style.display = 'grid';
        upcomingDetails.style.display = 'block';
      }

      if (show) {
        document.getElementById('showFormTitle').textContent = '✏️ Edit Show';
        document.getElementById('showFormId').value = show.id;
        
        titleInput.value = show.title || '';
        venueInput.value = show.venue || '';
        regionSelect.value = show.region || 'lakes';
        addressInput.value = show.address || '';
        dateStrInput.value = show.dateStr || '';
        monthStrInput.value = show.dateMonth || '';
        dayStrInput.value = show.dateDay || '';
        timeInput.value = show.time || '';
        admissionInput.value = show.admission || '';
        descInput.value = show.description || '';
        
        if (type === 'upcoming') {
          yearInput.value = show.year || 2026;
          monthIntInput.value = (show.month !== undefined) ? (show.month + 1) : 8;
          dayIntInput.value = show.day || 1;
          parkingInput.value = show.parking || '';
          amenitiesInput.value = show.amenities || '';
          posterInput.value = show.poster || '';
          mapQueryInput.value = show.mapQuery || '';
        }
      } else {
        document.getElementById('showFormTitle').textContent = '➕ Add New Show';
        document.getElementById('showFormId').value = '';
        showForm.reset();
        
        // set default values
        yearInput.value = 2026;
        monthIntInput.value = 8;
        dayIntInput.value = 1;
        regionSelect.value = 'lakes';
        posterInput.value = 'assets/banner.png';
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

        const showObj = {
          id: id || ((type === 'upcoming' ? 'show-' : 'past-show-') + Date.now()),
          title: document.getElementById('showFormTitleInput').value.trim(),
          venue: document.getElementById('showFormVenue').value.trim(),
          address: document.getElementById('showFormAddress').value.trim(),
          region: document.getElementById('showFormRegion').value,
          dateStr: document.getElementById('showFormDateStr').value.trim(),
          dateMonth: document.getElementById('showFormMonthStr').value.trim().toUpperCase(),
          dateDay: document.getElementById('showFormDayStr').value.trim(),
          time: document.getElementById('showFormTime').value.trim(),
          admission: document.getElementById('showFormAdmission').value.trim(),
          description: document.getElementById('showFormDescription').value.trim()
        };

        if (type === 'upcoming') {
          showObj.year = parseInt(document.getElementById('showFormYear').value) || 2026;
          showObj.month = (parseInt(document.getElementById('showFormMonthInt').value) || 1) - 1;
          showObj.day = parseInt(document.getElementById('showFormDayInt').value) || 1;
          showObj.parking = document.getElementById('showFormParking').value.trim();
          showObj.amenities = document.getElementById('showFormAmenities').value.trim();
          showObj.poster = document.getElementById('showFormPoster').value.trim() || 'assets/banner.png';
          showObj.tags = ['featured', 'free', 'all-ages', 'outdoor']; // default filters
          showObj.mapQuery = document.getElementById('showFormMapQuery').value.trim() || encodeURIComponent(showObj.venue + ' ' + showObj.address);
          
          // Generate calendar variables
          const yearPadded = showObj.year;
          const monthPadded = String(showObj.month + 1).padStart(2, '0');
          const dayPadded = String(showObj.day).padStart(2, '0');
          showObj.dtStart = `${yearPadded}${monthPadded}${dayPadded}T190000`;
          showObj.dtEnd = `${yearPadded}${monthPadded}${dayPadded}T220000`;
          showObj.startIso = `${yearPadded}-${monthPadded}-${dayPadded}T19:00:00`;
          showObj.endIso = `${yearPadded}-${monthPadded}-${dayPadded}T22:00:00`;

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
          showObj.poster = document.getElementById('showFormPoster').value.trim() || 'assets/banner.png';
          showObj.mapQuery = encodeURIComponent(showObj.venue + ' ' + showObj.address);
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

    // 8. Delete / Archive Actions
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
        id: 'past-' + show.id,
        title: show.title,
        venue: show.venue,
        address: show.address,
        region: show.region,
        dateStr: show.dateStr,
        dateMonth: show.dateMonth,
        dateDay: show.dateDay,
        year: show.year,
        time: show.time,
        type: show.type,
        admission: show.admission,
        description: show.description,
        poster: show.poster.replace('poster-', 'past-show-'),
        tags: ['past', 'outdoor'],
        mapQuery: show.mapQuery
      };

      // Unshift to past archive
      PAST_SHOWS_DATA.unshift(pastShow);
      
      renderAdminShowsList();
      renderAdminPastShowsList();
      showToast("Show archived locally!");
    }

    // 9. Save and Push Changes Logic
    if (publishChangesBtn) {
      publishChangesBtn.addEventListener('click', saveAllChanges);
    }

    async function saveAllChanges() {
      const payload = {
        shows: SHOWS_DATA,
        pastShows: PAST_SHOWS_DATA,
        setlist: SETLIST_DATA
      };

      publishChangesBtn.disabled = true;
      const originalText = publishChangesBtn.innerHTML;
      publishChangesBtn.innerHTML = '<span>⚡ Saving...</span>';

      try {
        if (isLocal) {
          // --- Local POST to server.py ---
          const res = await fetch('/api/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
          
          if (!res.ok) throw new Error("Local saving failed.");
          const responseData = await res.json();
          if (!responseData.success) throw new Error(responseData.error);

          showToast("💾 Changes written to data.json locally!");
        } else {
          // --- GitHub Pages API Push ---
          const token = gitTokenInput.value.trim();
          const repo = gitRepoInput.value.trim();
          const branch = gitBranchSelect.value;

          if (!token || !repo) {
            throw new Error("Missing GitHub PAT Token or Repository settings.");
          }

          // Step A: Fetch current data.json SHA
          const url = `https://api.github.com/repos/${repo}/contents/data.json?ref=${branch}`;
          const getRes = await fetch(url, {
            headers: { 'Authorization': `token ${token}` }
          });

          if (!getRes.ok) throw new Error(`Could not locate data.json on ${branch} branch.`);
          const fileMeta = await getRes.json();
          const sha = fileMeta.sha;

          // Step B: PUT update
          const putRes = await fetch(url, {
            method: 'PUT',
            headers: {
              'Authorization': `token ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: "chore: update shows and setlist via Band Dashboard",
              content: btoa(unescape(encodeURIComponent(JSON.stringify(payload, null, 2)))),
              sha: sha,
              branch: branch
            })
          });

          if (!putRes.ok) throw new Error("GitHub API push commit failed.");
          showToast("🚀 Changes committed to GitHub! Site will update in ~1 min.");
        }

        // --- DYNAMIC LIVE PAGE REFRESH ---
        if (refreshCalendarView) refreshCalendarView();
        if (refreshSetlistView) refreshSetlistView();
        
        // Re-run countdown for next show in hero
        if (SHOWS_DATA.length > 0) {
          initHeroCountdown();
        }

      } catch (err) {
        console.error(err);
        alert(`Error saving changes: ${err.message}`);
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

