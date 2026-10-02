import { useEffect, useState } from "react";
import { assetLoaders, type AssetName } from "../utils/assetLoaders";

// Shared across instances: a logo rendered 50 times is only loaded once.
const cache = new Map<AssetName, string>();

/**
 * Local logo loaded on demand: renders null while the import() resolves (like Iconify),
 * then the <img>. No Suspense, so consumers have nothing to add.
 */
const LocalIcon = ({ file, alt }: { file: AssetName; alt: string }) => {
  const [src, setSrc] = useState<string | undefined>(() => cache.get(file));

  useEffect(() => {
    const cached = cache.get(file);
    if (cached) {
      setSrc(cached);
      return;
    }
    // source changed on the same instance: do not keep showing the previous logo
    setSrc(undefined);
    let cancelled = false;
    assetLoaders[file]()
      .then((mod) => {
        cache.set(file, mod.default);
        if (!cancelled) setSrc(mod.default);
      })
      // chunk failed to load (e.g. mid-deploy): render no icon instead of an unhandled
      // rejection, and skip caching so the next mount retries
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [file]);

  return src ? <img src={src} alt={alt} /> : null;
};

export default LocalIcon;
