CREATE TABLE m_admin_users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  updater_id BIGINT NOT NULL,
  deleted_f BOOLEAN NOT NULL DEFAULT FALSE,
  INDEX idx_username (username)
);