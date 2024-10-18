use actix_web::{web, HttpResponse, Responder};

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/sales-marketing")
            .route("", web::get().to(get_sales_marketing_data))
    );
}

async fn get_sales_marketing_data() -> impl Responder {
    HttpResponse::Ok().json("Sales and Marketing data placeholder")
}