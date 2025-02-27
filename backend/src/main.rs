use actix_web::{App, HttpServer};
mod routes;
mod models;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Server running at http://localhost:8080");

    HttpServer::new(|| {
        App::new()
            .configure(routes::init_routes)
    })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}