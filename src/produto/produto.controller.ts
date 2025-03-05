import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService){}

    @ApiOperation({ summary: 'Criar um novo produto' })
    @ApiResponse( { status: 201, description: 'Produto criado com sucesso' })
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            nome: { type: 'string', example: 'Notebook Dell' },
            codigoBarras: { type: 'string', example: '1234567890123' },
            quantidade: { type: 'number', example: 5.5 },
            preco: { type: 'number', example: 3500.99 },
          },
        },
      })
    @Post()
    async criar(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.criar(produto);
    }

    @Get()
    async listarTodos(): Promise<Produto[]>{
        return this.produtoService.listarTodos();
    }

    @Get(':codigo')
    async buscarPorCodigo(@Param('codigo') codigo: string): Promise<Produto | null> {
        return this.produtoService.buscarPorCodigo(codigo);
    }

    @Put(':codigo')
    @ApiOperation( { summary: 'Atualizar um produto'})
    @ApiResponse( { status: 200, description: 'Produto atualizado com sucesso'})
    @ApiResponse({ status: 404, description: 'Produto não encontrado' })
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            nome: { type: 'string', example: 'Notebook Dell XPS' },
            codigoBarras: { type: 'string', example: '1234567890123' },
            quantidade: { type: 'number', example: 5.5 },
            preco: { type: 'number', example: 4200.99 },
          },
        },
      })
    async atualizar(@Param('codigo') codigo: string, @Body() produto: Partial<Produto>): Promise<Produto> {
        return this.produtoService.atualizar(codigo, produto);
    }


    @Delete(':codigo')
    async remover(@Param('codigo') codigo: string): Promise<void> {
        return this.produtoService.remover(codigo);
    }
}