use actix_web::{web, HttpResponse, Responder};

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/it")
            .route("", web::get().to(get_it_data))
    );
}

async fn get_it_data() -> impl Responder {
    HttpResponse::Ok().json("IT data placeholder")
}