import "./Sample.scss";
import { socialNetworks } from "../utils/socialNetwork";
import SocialIcons from "./SocialIcons";
import { useEffect, useMemo, useRef, useState } from "react";

declare const __APP_VERSION__: string;
declare const __NEW_ICONS__: string[];

const VERSION = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "dev";

// Calculées au build par vite.config.ts (git diff de sourceTypes.ts depuis la
// dernière release) : alimente le filtre « Nouveautés » et les pastilles bleues.
const NEW_ICONS: string[] =
  typeof __NEW_ICONS__ !== "undefined" ? __NEW_ICONS__ : [];

type Entry = {
  key: string;
  name: string;
  color: string;
  category: string;
  isNew: boolean;
};

type Tooltip = { entry: Entry; x: number; y: number };

const prettify = (key: string) =>
  key.charAt(0).toUpperCase() + key.slice(1);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.8-3.8" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M9 6h12M9 12h12M9 18h12" />
    <circle cx="4.5" cy="6" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="4.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="4.5" cy="18" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" />
  </svg>
);

const ContrastIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18M12 3a9 9 0 0 1 0 18" fill="currentColor" stroke="none" />
  </svg>
);

const SwatchIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 21a9 9 0 1 1 9-9c0 2-1.5 3.2-3 3.2h-2.4A2.4 2.4 0 0 0 13.9 19c.4.7.1 2-1.9 2Z" />
    <circle cx="7.8" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="16.2" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);

const Sample = () => {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [darkMode, setDarkMode] = useState(false);
  const [whiteIcons, setWhiteIcons] = useState(false);
  const [networkColorAsBG, setNetworkColorAsBG] = useState(false);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const entries = useMemo<Entry[]>(
    () =>
      Object.keys(socialNetworks)
        .map((key) => ({
          key,
          name: socialNetworks[key].name ?? prettify(key),
          color: socialNetworks[key].color,
          category: socialNetworks[key].category,
          isNew: NEW_ICONS.includes(key),
        }))
        .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" })),
    []
  );

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    entries.forEach((e) => counts.set(e.category, (counts.get(e.category) ?? 0) + 1));
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [entries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      if (filter === "new" && !e.isNew) return false;
      if (filter !== "all" && filter !== "new" && e.category !== filter) return false;
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        e.key.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
      );
    });
  }, [entries, query, filter]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.target instanceof HTMLInputElement) return;
      event.preventDefault();
      searchRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const copyKey = (entry: Entry) => {
    navigator.clipboard?.writeText(entry.key);
    setCopiedKey(entry.key);
    window.setTimeout(() => setCopiedKey(null), 1200);
  };

  const showTooltip = (entry: Entry, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const x = Math.min(Math.max(rect.left + rect.width / 2, 140), window.innerWidth - 140);
    setTooltip({ entry, x, y: rect.bottom + 8 });
  };

  return (
    <div
      className="app"
      data-theme={darkMode ? "dark" : "light"}
      data-whiteicons={whiteIcons}
      data-networkcolorasbg={networkColorAsBG}
    >
      <header className="topbar">
        <div className="logomark">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.6 10.7l6.8-4.4M8.6 13.3l6.8 4.4" />
          </svg>
        </div>
        <span className="wordmark">social-icons</span>
        <span className="version mono">v{VERSION}</span>
        <div className="spacer" />
        <div className="search">
          <SearchIcon />
          <input
            ref={searchRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher une icône, une clé, une catégorie…"
          />
          <span className="kbd mono">/</span>
        </div>
        <div className="segmented">
          <button
            type="button"
            className={view === "grid" ? "seg seg-active" : "seg"}
            title="Vue grille"
            onClick={() => setView("grid")}
          >
            <GridIcon />
          </button>
          <button
            type="button"
            className={view === "table" ? "seg seg-active" : "seg"}
            title="Vue tableau"
            onClick={() => setView("table")}
          >
            <ListIcon />
          </button>
        </div>
        <div className="divider" />
        <button
          type="button"
          className={whiteIcons ? "iconbtn iconbtn-active" : "iconbtn"}
          title="Icônes blanches"
          onClick={() => setWhiteIcons((prev) => !prev)}
        >
          <ContrastIcon />
        </button>
        <button
          type="button"
          className={networkColorAsBG ? "iconbtn iconbtn-active" : "iconbtn"}
          title="Couleur du réseau en fond"
          onClick={() => setNetworkColorAsBG((prev) => !prev)}
        >
          <SwatchIcon />
        </button>
        <button
          type="button"
          className={darkMode ? "iconbtn iconbtn-active" : "iconbtn"}
          title="Mode sombre"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <MoonIcon />
        </button>
      </header>

      <div className="chips">
        <button
          type="button"
          className={filter === "all" ? "chip chip-active" : "chip"}
          onClick={() => setFilter("all")}
        >
          Toutes<span className="chip-count mono">{entries.length}</span>
        </button>
        {NEW_ICONS.length > 0 && (
          <button
            type="button"
            className={filter === "new" ? "chip chip-active" : "chip"}
            onClick={() => setFilter("new")}
          >
            <span className="newdot" />
            Nouveautés<span className="chip-count mono">{NEW_ICONS.length}</span>
          </button>
        )}
        {categories.map(([category, count]) => (
          <button
            key={category}
            type="button"
            className={filter === category ? "chip chip-active" : "chip"}
            onClick={() => setFilter(filter === category ? "all" : category)}
          >
            {category}
            <span className="chip-count mono">{count}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty">Aucune icône ne correspond à « {query} ».</div>
      )}

      {view === "grid" && filtered.length > 0 && (
        <div className="icongrid" onMouseLeave={() => setTooltip(null)}>
          {filtered.map((entry) => (
            <button
              key={entry.key}
              type="button"
              className="tile"
              aria-label={entry.name}
              style={networkColorAsBG ? { backgroundColor: entry.color } : undefined}
              onMouseEnter={(event) => showTooltip(entry, event.currentTarget)}
              onFocus={(event) => showTooltip(entry, event.currentTarget)}
              onBlur={() => setTooltip(null)}
              onClick={() => copyKey(entry)}
            >
              <SocialIcons source={entry.key} />
              {entry.isNew && <span className="newdot tile-newdot" />}
            </button>
          ))}
        </div>
      )}

      {view === "table" && filtered.length > 0 && (
        <div className="table">
          <div className="thead">
            <div className="col-icon">Icône</div>
            <div className="col-name">Nom</div>
            <div className="col-key">Clé</div>
            <div className="col-cat">Catégorie</div>
            <div className="col-color">Couleur</div>
            <div className="col-action" />
          </div>
          {filtered.map((entry) => (
            <div key={entry.key} className="row">
              <div className="col-icon">
                <span
                  className="row-iconbox"
                  style={networkColorAsBG ? { backgroundColor: entry.color } : undefined}
                >
                  <SocialIcons source={entry.key} />
                </span>
              </div>
              <div className="col-name">
                {entry.name}
                {entry.isNew && <span className="pill-new">Nouvelle</span>}
              </div>
              <div className="col-key mono">{entry.key}</div>
              <div className="col-cat">
                <span className="cat-chip">{entry.category}</span>
              </div>
              <div className="col-color">
                <span className="swatch" style={{ backgroundColor: entry.color }} />
                <span className="mono hex">{entry.color}</span>
              </div>
              <div className="col-action">
                <button type="button" className="copybtn" onClick={() => copyKey(entry)}>
                  <CopyIcon />
                  {copiedKey === entry.key ? "Copiée !" : "Copier la clé"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pagefoot">
        {filtered.length !== entries.length && (
          <span>
            {filtered.length} résultat{filtered.length > 1 ? "s" : ""} ·{" "}
          </span>
        )}
        {entries.length} icônes · {categories.length} catégories · @predictalab/social-icons
      </div>

      {tooltip && view === "grid" && (
        <div className="tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          <div className="tooltip-head">
            <span
              className="tooltip-iconbox"
              style={networkColorAsBG ? { backgroundColor: tooltip.entry.color } : undefined}
            >
              <SocialIcons source={tooltip.entry.key} />
            </span>
            <span className="tooltip-titles">
              <span className="tooltip-name">
                {tooltip.entry.name}
                {tooltip.entry.isNew && <span className="pill-new">Nouvelle</span>}
              </span>
              <span className="tooltip-key mono">{tooltip.entry.key}</span>
            </span>
          </div>
          <div className="tooltip-meta">
            <span className="cat-chip">{tooltip.entry.category}</span>
            <span className="colorpill">
              <span className="swatch" style={{ backgroundColor: tooltip.entry.color }} />
              <span className="mono hex">{tooltip.entry.color}</span>
            </span>
          </div>
          <div className="tooltip-foot">
            {copiedKey === tooltip.entry.key ? "Clé copiée !" : "Cliquer pour copier la clé"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sample;
