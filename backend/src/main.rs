use actix_web::{App, HttpServer};
use backend::routes;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().configure(routes::config))
        .bind(("0.0.0.0", 8080))?
        .run()
        .await
}
