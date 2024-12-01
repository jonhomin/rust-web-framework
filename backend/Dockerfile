FROM rust:1.80.1

WORKDIR /app

RUN cargo install cargo-watch

COPY . .

EXPOSE 8080

CMD ["cargo", "watch", "-x", "run"]