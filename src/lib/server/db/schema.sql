CREATE TABLE IF NOT EXISTS count_track (
    day TEXT PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    limit_notified INTEGER NOT NULL DEFAULT 0
        CHECK (limit_notified IN (0, 1))
);
