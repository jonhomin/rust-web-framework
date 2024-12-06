CREATE TABLE t_admin_user_login_histories (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  admin_user_id BIGINT NOT NULL,
  last_login_at DATETIME,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  updater_id BIGINT NOT NULL,
  deleted_f BOOLEAN NOT NULL DEFAULT FALSE,
  INDEX idx_admin_user_id (admin_user_id)
);