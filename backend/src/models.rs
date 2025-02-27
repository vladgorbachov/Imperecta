use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Department {
    pub id: String,
    pub name: String,
}

#[derive(Serialize, Deserialize)]
pub struct File {
    pub id: String,
    pub name: String,
    pub file_type: String,
}