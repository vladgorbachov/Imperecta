use actix_web::web;

mod finance;
mod sales_marketing;
mod hr;
mod operations;
mod it;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .configure(finance::config)
            .configure(sales_marketing::config)
            .configure(hr::config)
            .configure(operations::config)
            .configure(it::config)
    );
}