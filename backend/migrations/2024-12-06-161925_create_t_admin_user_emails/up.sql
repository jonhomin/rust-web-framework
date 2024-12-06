CREATE TABLE t_admin_user_emails (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  admin_user_id BIGINT NOT NULL,
  email VARCHAR(255) NOT NULL,
  valid_f BOOLEAN DEFAULT TRUE,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  updater_id BIGINT NOT NULL,
  deleted_f BOOLEAN NOT NULL DEFAULT FALSE,
  INDEX idx_admin_user_id (admin_user_id),
  INDEX idx_email (email)
);