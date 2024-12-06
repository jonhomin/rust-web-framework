# 基本コマンド用の変数定義
DOCKER_COMPOSE = docker compose
PROJECT_NAME = your-project-name

# Tree表示用の除外パターン
TREE_IGNORE = node_modules|dist|.git|.DS_Store|build|target|Cargo.lock

.PHONY: help build up down restart logs clean ps tree restartf restartb rebuildf rebuildb \
        migrate-create migrate-up migrate-down migrate-redo treef treeb clean-node-modules tree-dir db-shell

# ヘルプコマンド
help:
	@echo "使用可能なコマンド:"
	@echo "Docker関連コマンド:"
	@echo "  make build    - コンテナをビルド"
	@echo "  make up      - コンテナを起動"
	@echo "  make down    - コンテナを停止・削除"
	@echo "  make restart - コンテナを再起動"
	@echo "  make logs    - コンテナのログを表示"
	@echo "  make clean   - 未使用のイメージとボリュームを削除"
	@echo "  make ps      - 実行中のコンテナを表示"
	@echo "フロントエンド/バックエンド操作:"
	@echo "  make restartf  - フロントエンドを再起動"
	@echo "  make restartb  - バックエンドを再起動"
	@echo "  make rebuildf  - フロントエンドをリビルド&再起動"
	@echo "  make rebuildb  - バックエンドをリビルド&再起動"
	@echo "マイグレーション操作:"
	@echo "  make migrate-create NAME=<name> - マイグレーションファイルを作成"
	@echo "  make migrate-up    - マイグレーションを実行"
	@echo "  make migrate-down  - マイグレーションをロールバック"
	@echo "  make migrate-redo  - マイグレーションをやり直し"
	@echo "ツリー表示:"
	@echo "  make tree     - プロジェクト全体のツリー表示"
	@echo "  make treef    - フロントエンドのツリー表示"
	@echo "  make treeb    - バックエンドのツリー表示"
	@echo "  make tree-dir DIR=<path> - 指定ディレクトリのツリー表示"

# 環境変数の読み込みと展開
include .env
export

# Dockerイメージのビルド
build:
	$(DOCKER_COMPOSE) build --no-cache

# コンテナの起動
up:
	$(DOCKER_COMPOSE) up -d

# コンテナの停止と削除
down:
	$(DOCKER_COMPOSE) down

# コンテナの再起動
restart:
	$(DOCKER_COMPOSE) restart

# フロントエンドの再起動
restartf:
	$(DOCKER_COMPOSE) restart frontend

# バックエンドの再起動
restartb:
	$(DOCKER_COMPOSE) restart backend

# フロントエンドのリビルドと再起動
rebuildf:
	$(DOCKER_COMPOSE) build frontend
	$(DOCKER_COMPOSE) up -d frontend

# バックエンドのリビルドと再起動
rebuildb:
	$(DOCKER_COMPOSE) build backend
	$(DOCKER_COMPOSE) up -d backend

# ログの表示
logs:
	$(DOCKER_COMPOSE) logs -f

# クリーンアップ
clean:
	docker system prune -f
	docker volume prune -f

# コンテナの状態確認
ps:
	$(DOCKER_COMPOSE) ps

# フロントエンド用のnode_modulesボリュームをクリア
clean-node-modules:
	docker volume rm $(PROJECT_NAME)_frontend_node_modules

# プロジェクト構造の表示
tree:
	@if command -v tree > /dev/null; then \
		tree -I "$(TREE_IGNORE)" -a -L 4; \
	else \
		echo "treeコマンドがインストールされていません。"; \
		echo "Homebrewでインストールする場合: brew install tree"; \
	fi

# 特定のディレクトリのツリー表示
tree-dir:
	@if [ -z "$(DIR)" ]; then \
		echo "使用方法: make tree-dir DIR=<directory_path>"; \
	elif command -v tree > /dev/null; then \
		tree -I "$(TREE_IGNORE)" -a -L 4 $(DIR); \
	else \
		echo "treeコマンドがインストールされていません。"; \
		echo "Homebrewでインストールする場合: brew install tree"; \
	fi

# フロントエンドのツリー表示
treef:
	@if command -v tree > /dev/null; then \
		tree -I "$(TREE_IGNORE)" -a -L 4 frontend; \
	else \
		echo "treeコマンドが必要です: brew install tree"; \
	fi

# バックエンドのツリー表示
treeb:
	@if command -v tree > /dev/null; then \
		tree -I "$(TREE_IGNORE)" -a -L 4 backend; \
	else \
		echo "treeコマンドが必要です: brew install tree"; \
	fi

# マイグレーションファイルの作成
migrate-create:
	@if [ -z "$(NAME)" ]; then \
		echo "使用方法: make migrate-create NAME=<migration_name>"; \
	else \
		$(DOCKER_COMPOSE) exec backend diesel migration generate $(NAME); \
	fi

# マイグレーション実行
migrate-up:
	$(DOCKER_COMPOSE) exec backend bash -c 'DATABASE_URL=mysql://root:$(DB_ROOT_PASSWORD)@db:3306/$(DB_NAME) diesel migration run'

migrate-down:
	$(DOCKER_COMPOSE) exec backend bash -c 'DATABASE_URL=mysql://root:$(DB_ROOT_PASSWORD)@db:3306/$(DB_NAME) diesel migration revert'

migrate-redo:
	$(DOCKER_COMPOSE) exec backend bash -c 'DATABASE_URL=mysql://root:$(DB_ROOT_PASSWORD)@db:3306/$(DB_NAME) diesel migration redo'

# DBシェルに接続
db-shell:
	$(DOCKER_COMPOSE) exec db mysql -u root -p$(DB_ROOT_PASSWORD) $(DB_NAME)