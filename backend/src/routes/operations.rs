use actix_web::{web, HttpResponse, Responder};

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/operations")
            .route("", web::get().to(get_operations_data))
    );
}

async fn get_operations_data() -> impl Responder {
    HttpResponse::Ok().json("Operations data placeholder")
}