use actix_web::web;

mod departments;
mod files;

pub fn init_routes(cfg: &mut web::ServiceConfig) {
    departments::init_routes(cfg);
    files::init_routes(cfg);
}