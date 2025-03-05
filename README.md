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

4. **Utilização IA:**
  Realizada utilização da IA para criação da documentação do Swagger e componentização do docker. Por ser uma maneira mais rapida e eficiente. 

5. **Utilização do decimal para quantidade da Entidade Produto**
  Normalmente, o integer é utilizado para quantidades discretas, mas decimal pode ser útil para frações de produtos, como peso em quilos (ex: 0.5kg).