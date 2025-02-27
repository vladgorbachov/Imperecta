use actix_web::{web, HttpResponse, Responder};
use crate::models::File;

async fn get_files(_department_id: web::Path<String>) -> impl Responder {
    let files = vec![
        File { id: "1".to_string(), name: "Document 1.pdf".to_string(), file_type: "file".to_string() },
        File { id: "2".to_string(), name: "Folder 1".to_string(), file_type: "folder".to_string() },
    ];

    HttpResponse::Ok().json(files)
}

pub fn init_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::resource("/files/{department_id}")
            .route(web::get().to(get_files))
    );
}