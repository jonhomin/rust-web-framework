# 基本コマンド用の変数定義
DOCKER_COMPOSE = docker compose
PROJECT_NAME = your-project-name

# Tree表示用の除外パターン
TREE_IGNORE = node_modules|dist|.git|.DS_Store|build

.PHONY: help build up down restart logs clean ps tree restartf restartb rebuildf rebuildb

# ヘルプコマンド
help:
	@echo "使用可能なコマンド:"
	@echo "  make build    - コンテナをビルド"
	@echo "  make up      - コンテナを起動"
	@echo "  make down    - コンテナを停止・削除"
	@echo "  make restart - コンテナを再起動"
	@echo "  make logs    - コンテナのログを表示"
	@echo "  make clean   - 未使用のイメージとボリュームを削除"
	@echo "  make ps      - 実行中のコンテナを表示"
	@echo "  make tree    - プロジェクト構造を表示（不要なファイルを除外）"

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

# プロジェクト構造の表示（tree -I を使用）
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

treef:
	@if command -v tree > /dev/null; then \
		tree -I "$(TREE_IGNORE)|target|Cargo.lock" -a -L 4 frontend; \
	else \
		echo "treeコマンドが必要です: brew install tree"; \
	fi

treeb:
	@if command -v tree > /dev/null; then \
		tree -I "$(TREE_IGNORE)|target|Cargo.lock" -a -L 4 backend; \
	else \
		echo "treeコマンドが必要です: brew install tree"; \
	fi