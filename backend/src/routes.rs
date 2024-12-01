use crate::controllers::auth_controller;
use actix_web::web;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/admin")
            .service(web::scope("/auth").route("/login", web::get().to(auth_controller::login))),
    );
}
