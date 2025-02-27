use actix_web::{web, HttpResponse, Responder};
use crate::models::Department;

async fn get_departments() -> impl Responder {
    let departments = vec![
        Department { id: "hr".to_string(), name: "Human Resources".to_string() },
        Department { id: "finance".to_string(), name: "Finance & Accounting".to_string() },
        Department { id: "sales".to_string(), name: "Sales & Marketing".to_string() },
        Department { id: "production".to_string(), name: "Production & Operations".to_string() },
        Department { id: "rd".to_string(), name: "Research & Development".to_string() },
    ];

    HttpResponse::Ok().json(departments)
}

pub fn init_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::resource("/departments")
            .route(web::get().to(get_departments))
    );
}