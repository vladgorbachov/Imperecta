use actix_web::{web, HttpResponse, Responder};

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/hr")
            .route("", web::get().to(get_hr_data))
    );
}

async fn get_hr_data() -> impl Responder {
    HttpResponse::Ok().json("HR data placeholder")
}