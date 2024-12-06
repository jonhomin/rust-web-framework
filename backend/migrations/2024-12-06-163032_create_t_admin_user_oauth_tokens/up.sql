CREATE TABLE t_admin_user_oauth_tokens (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  admin_user_id BIGINT NOT NULL,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  access_token_expires_at DATETIME,
  refresh_token_expires_at DATETIME,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  updater_id BIGINT NOT NULL,
  deleted_f BOOLEAN NOT NULL DEFAULT FALSE,
  INDEX idx_admin_user_id (admin_user_id)
);