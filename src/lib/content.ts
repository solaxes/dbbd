export const site = {
  name: "Dera Baba Braham Dass",
  shortName: "DBBD",
  tagline: "A sanctuary of devotion, peace, and spiritual guidance",
  email: "contact@dbbd.in",
  website: "www.dbbd.in",
  address: {
    line1: "Akalpur Road",
    line2: "Phillaur",
    line3: "Jalandhar",
    country: "Punjab, India",
  },
  facebook: "https://www.facebook.com/profile.php?id=100068759003871",
  archiveUrl: "https://web.archive.org/web/20180809025750/http://dbbd.in/",
} as const;

/** Public metadata from the official Facebook page */
export const facebook = {
  pageUrl: site.facebook,
  pageId: "100068759003871",
  title: "Dera Baba Braham Dass (www.dbbd.in)",
  about:
    "Dera Baba Braham Dass — a sanctuary of devotion at Phillaur, Jalandhar, in the spiritual tradition of Baba Braham Dass Ji Maharaj.",
  profileImage: "/images/baba-braham-dass-ji.png",
} as const;

export const babaBrahamDassPortrait = "/images/baba-braham-dass-ji.png";

/** Spiritual succession of the Dera */
export const spiritualLineage = [
  "Baba Braham Dass Ji Maharaj",
  "Baba Maule Shah Ji",
  "Baba Rura Ram Ji",
] as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/the-path", label: "The Path" },
  { href: "/the-aim", label: "The Aim" },
  { href: "/saints", label: "Saints" },
  { href: "/contact", label: "Contact Us" },
] as const;

/** Image URLs from the 2018 Wayback archive of dbbd.in, with local fallbacks */
export const images = {
  hero: {
    src: "https://web.archive.org/web/20180809025750im_/http://dbbd.in/wp-content/uploads/2013/01/dera-for-webx1000x578.jpg",
    fallback: "/images/hero.svg",
  },
  homeBg: {
    src: "https://web.archive.org/web/20180809025750im_/http://dbbd.in/wp-content/uploads/2013/01/home-page-bg.jpg",
    fallback: "/images/hero.svg",
  },
  logo: {
    src: "https://web.archive.org/web/20180809025750im_/http://dbbd.in/wp-content/uploads/2015/10/dera-name-en-pa1.png",
    fallback: "/images/logo.svg",
  },
  saintPlaceholder: "/images/saint-placeholder.svg",
  saints: {
    mauleShah: {
      src: "https://web.archive.org/web/20180809025750im_/http://dbbd.in/wp-content/uploads/2013/01/baba-maule-shah-ji.jpg",
      fallback: "/images/saint-placeholder.svg",
    },
    brahamDass: {
      src: "/images/baba-braham-dass-ji.png",
      fallback: "/images/saint-placeholder.svg",
    },
    ruraRam: {
      src: "https://web.archive.org/web/20180809025750im_/http://dbbd.in/wp-content/uploads/2013/01/baba-roora-ram-ji.jpg",
      fallback: "/images/saint-placeholder.svg",
    },
  },
} as const;

export const saints = [
  {
    slug: "baba-maule-shah-ji",
    name: "Baba Maule Shah Ji",
    image: images.saints.mauleShah.src,
    imageFallback: images.saints.mauleShah.fallback,
    intro:
      "A revered saint in the spiritual lineage of Dera Baba Braham Dass, whose life exemplified humility, devotion, and service to humanity.",
    biography: [
      "Baba Maule Shah Ji devoted his life to the remembrance of the Divine and the upliftment of seekers who came to the Dera seeking peace and guidance.",
      "Through satsang, seva, and compassionate counsel, he guided countless souls toward inner stillness and moral clarity.",
      "His teachings emphasized living with simplicity, honoring the Guru, and serving all without distinction of caste or creed.",
    ],
  },
  {
    slug: "baba-braham-dass-ji",
    name: "Baba Braham Dass Ji",
    title: "Maharaj",
    image: images.saints.brahamDass.src,
    imageFallback: images.saints.brahamDass.fallback,
    intro:
      "The namesake and spiritual light of our Dera — Baba Braham Dass Ji Maharaj, in whose honour this sacred place was established.",
    biography: [
      "Baba Braham Dass Ji embodied the union of knowledge (Brahma) and selfless service (Dass), establishing the Dera as a home for spiritual seekers.",
      "He taught that true devotion arises when the mind turns inward, when ego dissolves, and when love for the Divine becomes the centre of daily life.",
      "Through his grace, the Dera at Phillaur, Jalandhar continues to welcome all who wish to deepen their faith and live with compassion.",
    ],
  },
  {
    slug: "baba-rura-ram-ji",
    name: "Baba Rura Ram Ji",
    image: images.saints.ruraRam.src,
    imageFallback: images.saints.ruraRam.fallback,
    intro:
      "Disciple of Baba Braham Dass Ji, Baba Rura Ram Ji carried forward the lamp of wisdom and nurtured generations of devotees.",
    biography: [
      "As a devoted disciple of Baba Braham Dass Ji, Baba Rura Ram Ji preserved and transmitted the teachings of the Dera with humility and strength.",
      "Known for his gentle presence and profound insight, he reminded seekers that the spiritual path is walked one sincere step at a time.",
      "His legacy lives on in the hearts of devotees who continue the teachings of Baba Braham Dass Ji at the Dera.",
    ],
  },
] as const;

export const thePath = {
  title: "The Path",
  subtitle: "Walking the way of devotion with sincerity and grace",
  sections: [
    {
      heading: "Remembrance of the Divine",
      body: "The path begins with continuous remembrance—turning the mind toward God through prayer, meditation, and recitation of sacred words. This steady practice purifies the heart and draws the seeker closer to the Source of all life.",
    },
    {
      heading: "The Guru's Guidance",
      body: "Under the grace of the Guru, the disciple learns to distinguish truth from illusion. The Guru illuminates the way, offering wisdom that cannot be found through intellect alone. Faith, surrender, and obedience to righteous teaching are the pillars of this relationship.",
    },
    {
      heading: "Satsang and Community",
      body: "Gathering in satsang— in the company of truth— strengthens devotion and loosens attachment to worldly cares. Shared prayer, singing of hymns, and listening to spiritual discourse nourish the soul and bind the community in love.",
    },
    {
      heading: "Seva — Selfless Service",
      body: "Service to the poor, the sick, and the weary is service to God. The path calls us to act without expectation, to give without pride, and to see the Divine in every face we meet.",
    },
    {
      heading: "Living in the World",
      body: "The true seeker does not flee from life but transforms it. Honesty, moderation, compassion, and rejection of violence and intoxication mark the conduct of one who walks this path while fulfilling worldly duties.",
    },
  ],
} as const;

export const theAim = {
  title: "The Aim",
  subtitle: "The purpose that guides every teaching at the Dera",
  sections: [
    {
      heading: "Union of Soul with God",
      body: "The highest aim is the communion of the individual soul with the Supreme—experiencing the Divine not as a distant idea but as living presence within. All practices, teachings, and gatherings at the Dera serve this sacred goal.",
    },
    {
      heading: "Inner Peace and Moral Awakening",
      body: "We strive to awaken the divine qualities within each person: truthfulness, humility, forgiveness, and love. As inner peace grows, outer harmony follows—in families, in communities, and among all people.",
    },
    {
      heading: "Unity Beyond Division",
      body: "The Dera stands against discrimination of every kind. Caste, class, and creed dissolve before the truth that all are children of one Creator. Our aim is a society bound by mutual respect and shared spiritual purpose.",
    },
    {
      heading: "A World of Compassion",
      body: "Inspired by the saints who came before us, we work toward a world where hunger is relieved, suffering is eased, and hearts are opened to peace. Small acts of kindness, multiplied across communities, become a force for lasting good.",
    },
  ],
} as const;
