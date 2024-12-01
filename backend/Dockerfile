FROM rust:1.80.1

WORKDIR /app

# Install diesel_cli
RUN cargo install diesel_cli --no-default-features --features mysql && \
    echo 'export PATH="$PATH:/usr/local/cargo/bin"' >> ~/.bashrc

# Create bash_profile for interactive shell
RUN echo 'export PATH="$PATH:/usr/local/cargo/bin"' >> ~/.bash_profile

# Install dependencies and cache them
COPY Cargo.toml Cargo.lock ./
RUN mkdir src && \
    echo "fn main() {}" > src/main.rs && \
    cargo build && \
    rm -rf src

COPY . .
RUN cargo install cargo-watch

# Create migrations directory if it doesn't exist
RUN mkdir -p migrations

EXPOSE 8080

# Use bash as shell to ensure .bash_profile is loaded
SHELL ["/bin/bash", "-l", "-c"]
CMD ["cargo", "watch", "-x", "run"]