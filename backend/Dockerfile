FROM rust:1.80.1

WORKDIR /app

COPY Cargo.toml Cargo.lock ./
RUN mkdir src && \
    echo "fn main() {}" > src/main.rs && \
    cargo build && \
    rm -rf src

COPY . .
RUN cargo install cargo-watch

EXPOSE 8080

CMD ["cargo", "watch", "-x", "run"]