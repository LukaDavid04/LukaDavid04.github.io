import { useEffect, useState } from "react";
import leetcodeLogo from "@/assets/logos/LeetCode_logo_black.png";

const LEETCODE_USERNAME = "LukaDavid04";
const API_URL = `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`;
const PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

const FALLBACK: LeetCodeStats = {
  totalSolved: 39,
  easySolved: 31,
  mediumSolved: 7,
  hardSolved: 1,
  ranking: 2895733,
};

export function LeetCodeCard() {
  const [stats, setStats] = useState<LeetCodeStats>(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(API_URL, { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        if (data?.totalSolved != null) {
          setStats({
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
            ranking: data.ranking,
          });
          setLive(true);
        }
      })
      .catch(() => {
        /* keep fallback */
      });
    return () => controller.abort();
  }, []);

  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md dark:shadow-sm dark:transition-shadow dark:hover:shadow-[0_10px_24px_-20px_rgba(255,255,255,0.12)] dark:hover:ring-1 dark:hover:ring-white/10"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={leetcodeLogo}
              alt="LeetCode"
              className="h-5 w-5 dark:invert"
            />
            <h3 className="text-lg font-semibold tracking-tight">LeetCode</h3>
          </div>
          {live && (
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
              live
            </span>
          )}
        </div>

        <p className="mt-3 text-3xl font-bold tabular-nums">
          {stats.totalSolved}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            solved since Nov.
          </span>
        </p>

        <div className="mt-3 flex gap-3 text-xs">
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            Easy {stats.easySolved}
          </span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
            Med {stats.mediumSolved}
          </span>
          <span className="rounded-full bg-red-100 px-2 py-0.5 font-medium text-red-700 dark:bg-red-500/10 dark:text-red-300">
            Hard {stats.hardSolved}
          </span>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Rank{" "}
          <span className="font-medium text-foreground tabular-nums">
            {stats.ranking.toLocaleString()}
          </span>
        </p>
      </div>
    </a>
  );
}
