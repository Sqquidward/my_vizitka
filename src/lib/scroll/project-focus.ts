import gsap from "gsap";

const FOCUS_RADIUS = 420;
const MIN_SCALE = 0.9;
const MIN_OPACITY = 0.55;
const MAX_BLUR = 3;
const MAX_ROTATE_Y = 6;

interface CardSetters {
  scale: ReturnType<typeof gsap.quickSetter>;
  opacity: ReturnType<typeof gsap.quickSetter>;
  filter: ReturnType<typeof gsap.quickSetter>;
  rotateY: ReturnType<typeof gsap.quickSetter>;
}

const settersCache = new WeakMap<Element, CardSetters>();

function getCardSetters(card: Element): CardSetters {
  let setters = settersCache.get(card);
  if (!setters) {
    setters = {
      scale: gsap.quickSetter(card, "scale"),
      opacity: gsap.quickSetter(card, "opacity"),
      filter: gsap.quickSetter(card, "filter"),
      rotateY: gsap.quickSetter(card, "rotateY"),
    };
    gsap.set(card, { transformOrigin: "center center" });
    settersCache.set(card, setters);
  }
  return setters;
}

function getCardFocus(card: Element, viewportCenter: number): number {
  const rect = card.getBoundingClientRect();
  const cardCenter = rect.left + rect.width / 2;
  const distance = Math.abs(cardCenter - viewportCenter);
  return Math.max(0, 1 - distance / FOCUS_RADIUS);
}

export function getActiveProjectIndex(cards: NodeListOf<Element> | Element[]): number {
  const viewportCenter = window.innerWidth / 2;
  let bestIndex = 0;
  let bestFocus = -1;

  Array.from(cards).forEach((card, index) => {
    const focus = getCardFocus(card, viewportCenter);
    if (focus > bestFocus) {
      bestFocus = focus;
      bestIndex = index;
    }
  });

  return bestIndex;
}

export function updateProjectFocus(cards: NodeListOf<Element> | Element[]): number {
  const viewportCenter = window.innerWidth / 2;
  const cardList = Array.from(cards);
  const activeIndex = getActiveProjectIndex(cardList);

  cardList.forEach((card, index) => {
    const focus = getCardFocus(card, viewportCenter);
    const setters = getCardSetters(card);
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const side = cardCenter < viewportCenter ? 1 : -1;

    setters.scale(MIN_SCALE + focus * (1 - MIN_SCALE));
    setters.opacity(MIN_OPACITY + focus * (1 - MIN_OPACITY));
    setters.filter(`blur(${(1 - focus) * MAX_BLUR}px)`);
    setters.rotateY(side * (1 - focus) * MAX_ROTATE_Y);
    card.classList.toggle("is-focused", index === activeIndex);
  });

  syncProjectVideos(cardList, activeIndex);
  return activeIndex;
}

let lastSyncedIndex = -1;

export function syncProjectVideos(cards: Element[], activeIndex: number) {
  if (activeIndex === lastSyncedIndex) return;
  lastSyncedIndex = activeIndex;

  cards.forEach((card, index) => {
    const video = card.querySelector<HTMLVideoElement>("[data-project-video]");
    if (!video) return;

    if (index === activeIndex) {
      video.currentTime = 0;
      void video.play().catch(() => {});
      return;
    }

    video.pause();
    video.currentTime = 0;
  });
}

export function pauseAllProjectVideos(cards: NodeListOf<Element> | Element[]) {
  lastSyncedIndex = -1;
  Array.from(cards).forEach((card) => {
    const video = card.querySelector<HTMLVideoElement>("[data-project-video]");
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  });
}

export function resetProjectFocus(cards: NodeListOf<Element> | Element[]) {
  lastSyncedIndex = -1;
  Array.from(cards).forEach((card) => {
    card.classList.remove("is-focused");
    gsap.set(card, { clearProps: "scale,opacity,filter,rotateY" });
  });
}
