import type { D1Database } from '@cloudflare/workers-types';

const DAILY_LIMIT = 40;

export const reserveEmailSlot = async (db: D1Database) => {
  const day = new Date().toISOString().slice(0, 10);

  const result = await db
    .prepare(
      `
        INSERT INTO count_track (day, count, limit_notified)
        VALUES (?, 1, 0)
        ON CONFLICT(day) DO UPDATE SET
            count = count + 1
        WHERE count < ?
        RETURNING count
      `
    )
    .bind(day, DAILY_LIMIT)
    .first<{ count: number }>();

  if (result !== null) {
    return {
      limitReached: false,
      shouldNotify: false
    };
  }

  const notification = await db
    .prepare(
      `
        UPDATE count_track
        SET limit_notified = 1
        WHERE day = ?
          AND count >= ?
          AND limit_notified = 0
        RETURNING count
      `
    )
    .bind(day, DAILY_LIMIT)
    .first<{ count: number }>();

  return {
    limitReached: true,
    shouldNotify: notification !== null
  };
};
