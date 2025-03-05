import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produto } from './produto/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt((process.env.DB_PORT ?? '3308'), 10),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'senha123',
      database: process.env.DB_NAME || 'api_produtos',
      entities: [Produto],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProdutoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
