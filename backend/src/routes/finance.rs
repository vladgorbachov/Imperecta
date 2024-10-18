use actix_web::{web, HttpResponse, Responder};

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/finance")
            .route("", web::get().to(get_finance_data))
    );
}

async fn get_finance_data() -> impl Responder {
    HttpResponse::Ok().json("Finance data placeholder")
}