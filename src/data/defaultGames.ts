import { Game } from '../types/game';
import wmLogo from '../assets/images/owen_watermelon_logo_1790304644388.jpg';
import wmThumb from '../assets/images/watermelon_merge_thumb_1790304655249.jpg';
import arcadeBanner from '../assets/images/arcade_hero_banner_1790304665471.jpg';
import retroBowlThumb from '../assets/images/retro_bowl_thumb_1790305313008.jpg';
import grannyThumb from '../assets/images/granny_horror_thumb_1790306419920.jpg';
import basketRandomThumb from '../assets/images/basket_random_thumb_1790306430872.jpg';
import fnafThumb from '../assets/images/fnaf1_game_thumb_1790306441084.jpg';

export const DEFAULT_GAMES: Game[] = [
  {
    id: "granny",
    title: "Granny",
    description: "Welcome to Granny. Escape her creepy house alive within five days. Move silently, search cabinets for keys, and don't make any noise!",
    category: "Action",
    thumbnail: grannyThumb,
    banner: arcadeBanner,
    tags: ["Horror", "Escape", "Survival", "3D", "Granny"],
    rating: 4.8,
    plays: 62400,
    author: "DVloper",
    featured: true,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist4.github.io/Granny/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist4.github.io/Granny/" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen=""></iframe>`,
    controls: [
      { key: "W / A / S / D", action: "Walk & Move" },
      { key: "Mouse", action: "Look & Turn" },
      { key: "E / Click", action: "Interact & Open Doors" },
      { key: "C", action: "Crouch & Hide" }
    ]
  },
  {
    id: "basket-random",
    title: "Basket Random",
    description: "Wacky ragdoll two-player basketball with physics-defying players, changing balls, and unpredictable courts.",
    category: "Sports",
    thumbnail: basketRandomThumb,
    banner: arcadeBanner,
    tags: ["Basketball", "2 Player", "Ragdoll", "Sports", "Multiplayer"],
    rating: 4.9,
    plays: 53100,
    author: "RHM Interactive",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Basket-Random/",
    iframeCode: `<iframe id="plyIframe" class="ply-iframe" title="Basket Random — UBGHyper" allow="fullscreen; autoplay" allowfullscreen="" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-top-navigation-by-user-activation allow-popups" src="https://ubghyper.github.io/GameList.github.io/Basket-Random/"></iframe>`,
    sandbox: "allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-top-navigation-by-user-activation allow-popups",
    controls: [
      { key: "W", action: "Player 1 Jump & Shoot" },
      { key: "Up Arrow", action: "Player 2 Jump & Shoot" }
    ]
  },
  {
    id: "fnaf-1",
    title: "Five Nights at Freddy's (FNAF 1)",
    description: "Survive the night shift as the security guard at Freddy Fazbear's Pizza. Monitor surveillance cameras and conserve power before animatronics enter the office!",
    category: "Action",
    thumbnail: fnafThumb,
    banner: arcadeBanner,
    tags: ["Horror", "Survival", "FNAF", "Strategy", "Classic"],
    rating: 4.9,
    plays: 78500,
    author: "Scott Cawthon",
    featured: true,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-1/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-1/" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen=""></iframe>`,
    controls: [
      { key: "Mouse Move", action: "Pan Office Left & Right" },
      { key: "Mouse Hover Bottom", action: "Open Surveillance Monitor" },
      { key: "Door Buttons", action: "Toggle Red Doors & Hall Lights" }
    ]
  },
  {
    id: "retro-bowl",
    title: "Retro Bowl",
    description: "Manage your NFL team, call tactical audibles, pass bullet balls, and lead your franchise to victory in this beloved 8-bit retro football sim.",
    category: "Sports",
    thumbnail: retroBowlThumb,
    banner: arcadeBanner,
    tags: ["Football", "Sports", "Pixel", "NFL", "Retro Bowl"],
    rating: 4.9,
    plays: 48920,
    author: "New Star Games",
    featured: true,
    iframeSrc: "https://retro--bowl.pages.dev/",
    iframeCode: `<iframe id="innerFrame" name="innerFrame" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-storage-access-by-user-activation" frameborder="0" allowfullscreen="" src="https://retro--bowl.pages.dev/" style="overflow: auto;"></iframe>`,
    sandbox: "allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-storage-access-by-user-activation",
    controls: [
      { key: "Mouse Drag & Release", action: "Pass & Aim Football" },
      { key: "W / S or Up / Down", action: "Dodge Tackles & Stiff Arm" },
      { key: "Click / Tap", action: "Dive & Snap" }
    ]
  },
  {
    id: "watermelon-merge",
    title: "Watermelon Merge (Suika)",
    description: "Drop and merge delicious fruits to evolve from tiny cherries all the way to the Giant Watermelon!",
    category: "Puzzle",
    thumbnail: wmThumb,
    banner: arcadeBanner,
    tags: ["Physics", "Merge", "Watermelon", "Casual"],
    rating: 4.9,
    plays: 24890,
    author: "Owen Watermelon Studios",
    featured: true,
    iframeSrc: "/games/watermelon-merge.html",
    iframeCode: `<iframe src="/games/watermelon-merge.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse / Touch", action: "Aim & Drop Fruit" }
    ]
  },
  {
    id: "cyber-snake",
    "title": "Cyber Snake 3000",
    description: "Navigate the neon grid, hunt glowing watermelon bites, and grow into an unstoppable cyber serpent.",
    category: "Arcade",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23092015'/><rect x='20' y='40' width='16' height='16' fill='%2310b981'/><rect x='40' y='40' width='16' height='16' fill='%2310b981'/><rect x='60' y='40' width='16' height='16' fill='%2334d399'/><text x='50' y='85' font-size='20' text-anchor='middle'>🐍</text></svg>",
    tags: ["Retro", "Classic", "Reflex", "Snake"],
    rating: 4.8,
    plays: 19430,
    author: "Retro Arcade Labs",
    featured: true,
    iframeSrc: "/games/snake.html",
    iframeCode: `<iframe src="/games/snake.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Arrow Keys / WASD", action: "Change Direction" },
      { key: "Space", action: "Restart" }
    ]
  },
  {
    id: "tetrix-blocks",
    title: "Tetrix Block Fall",
    description: "The quintessential falling tetromino blocks challenge with clean neon rendering, soft drop, and hard drop.",
    category: "Puzzle",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2308160f'/><rect x='30' y='30' width='18' height='18' fill='%2306b6d4'/><rect x='50' y='30' width='18' height='18' fill='%2306b6d4'/><rect x='50' y='50' width='18' height='18' fill='%23ff2d55'/><rect x='30' y='70' width='18' height='18' fill='%2310b981'/></svg>",
    tags: ["Tetris", "Blocks", "Logic", "Strategy"],
    rating: 4.9,
    plays: 31200,
    author: "Pixel Block Syndicate",
    featured: true,
    iframeSrc: "/games/tetris.html",
    iframeCode: `<iframe src="/games/tetris.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "← / →", action: "Move Piece" },
      { key: "↑ / W", action: "Rotate" },
      { key: "↓ / S", action: "Soft Drop" },
      { key: "Space", action: "Hard Drop" }
    ]
  },
  {
    id: "neon-2048",
    title: "2048 Neon Watermelon",
    description: "Slide the numbers, double your power, and combine tiles until you unlock the mythical 2048 block.",
    category: "Puzzle",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230c2016'/><rect x='15' y='15' width='70' height='70' rx='12' fill='%2310b981'/><text x='50' y='58' font-size='26' font-family='sans-serif' font-weight='bold' text-anchor='middle' fill='%23064e3b'>2048</text></svg>",
    tags: ["Numbers", "Brain", "Math", "Casual"],
    rating: 4.7,
    plays: 16800,
    author: "Gabriele Cirulli & Owen",
    featured: false,
    iframeSrc: "/games/2048.html",
    iframeCode: `<iframe src="/games/2048.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Arrow Keys / WASD", action: "Slide Tiles" },
      { key: "Swipe", action: "Touch Screen Slide" }
    ]
  },
  {
    id: "brick-smasher",
    title: "Watermelon Breakout",
    description: "Smash layers of juicy neon bricks, bounce the high-velocity orb, and test your paddle coordination.",
    category: "Arcade",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2308160f'/><rect x='15' y='20' width='30' height='12' fill='%23ff2d55'/><rect x='52' y='20' width='30' height='12' fill='%23fb923c'/><circle cx='50' cy='55' r='8' fill='%2310b981'/><rect x='30' y='80' width='40' height='10' fill='%23ff2d55'/></svg>",
    tags: ["Brick", "Breakout", "Paddle", "Action"],
    rating: 4.6,
    plays: 14320,
    author: "Atari Inspired",
    featured: false,
    iframeSrc: "/games/breakout.html",
    iframeCode: `<iframe src="/games/breakout.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse / Touch", action: "Move Paddle" }
    ]
  },
  {
    id: "flappy-melon",
    title: "Flappy Melon Flight",
    description: "Flap your watermelon slice through dangerous bamboo vines and avoid crashing to claim the gold medal.",
    category: "Casual",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23092015'/><text x='50' y='60' font-size='48' text-anchor='middle'>🍉</text></svg>",
    tags: ["Flappy", "Skill", "Hard", "Casual"],
    rating: 4.5,
    plays: 22100,
    author: "Dong Nguyen Homage",
    featured: false,
    iframeSrc: "/games/flappy.html",
    iframeCode: `<iframe src="/games/flappy.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Space / Tap", action: "Flap Wings" }
    ]
  },
  {
    id: "space-defender",
    title: "Space Defender 8-Bit",
    description: "Defend the sector against alien invaders and rogue asteroids in this classic top-down space blaster.",
    category: "Action",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2306110b'/><polygon points='50,20 30,70 70,70' fill='%2310b981'/><circle cx='50' cy='50' r='5' fill='%23ff2d55'/><text x='50' y='92' font-size='14' text-anchor='middle'>👾</text></svg>",
    tags: ["Space", "Shooter", "Retro", "Aliens"],
    rating: 4.8,
    plays: 18900,
    author: "Galactic Studios",
    featured: false,
    iframeSrc: "/games/space.html",
    iframeCode: `<iframe src="/games/space.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "← / → / WASD", action: "Move Starship" },
      { key: "Space", action: "Fire Laser Blaster" }
    ]
  },
  {
    id: "cyber-pong",
    title: "Cyber Pong (1P & 2P)",
    description: "The grandfather of electronic games revamped with neon watermelon aesthetics and 2-player local battle mode.",
    category: "Sports",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2306110b'/><line x1='50' y1='10' x2='50' y2='90' stroke='%2316402a' stroke-dasharray='5,5'/><rect x='15' y='35' width='6' height='30' fill='%2310b981'/><rect x='80' y='45' width='6' height='30' fill='%23ff2d55'/><circle cx='40' cy='50' r='4' fill='%23fff'/></svg>",
    tags: ["2 Player", "Sports", "Arcade", "Multiplayer"],
    rating: 4.7,
    plays: 12400,
    author: "Owen Watermelon",
    featured: false,
    iframeSrc: "/games/pong.html",
    iframeCode: `<iframe src="/games/pong.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "W / S or Mouse", action: "Player 1 Paddle" },
      { key: "↑ / ↓", action: "Player 2 Paddle" }
    ]
  }
];

export { wmLogo, wmThumb, arcadeBanner };
