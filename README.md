# 📦 API de Produtos - NestJS + MariaDB + Docker

API desenvolvida com **NestJS**, utilizando **MariaDB** como banco de dados e **Docker** para containerização.  
Ela permite **CRUD completo de produtos**, seguindo boas práticas e documentada com **Swagger/OpenAPI**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js 18 + NestJS**
- **TypeORM** (ORM para interação com MariaDB)
- **MariaDB (MySQL)**
- **Swagger/OpenAPI** (Documentação)
- **Docker & Docker Compose**
- **Variáveis de ambiente para configuração flexível**

---

## 📌 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- **[Docker](https://www.docker.com/get-started)**
- **[Docker Compose](https://docs.docker.com/compose/install/)**
- **(Opcional) Node.js 18+ e npm**, caso queira rodar localmente

---

## 🏗️ Configuração e Execução

### 🔹 **Rodando com Docker (Recomendado)**
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/api-produtos.git
   cd api-produtos


2. **Construa e execute os containers:**
   docker-compose up --build

3. **A API estará disponível em:**
  http://localhost:3000/api