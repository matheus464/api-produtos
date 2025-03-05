import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) {}

    async criar(produto: Produto){
        return this.produtoRepository.save(produto);
    }

    async listarTodos(): Promise<Produto[]>{
        return this.produtoRepository.find();
    }

    async buscarPorCodigo(codigo: string): Promise<Produto | null>{
        return this.produtoRepository.findOneBy({ codigo })
    }

    async atualizar(codigo: string, produto: Partial<Produto>): Promise<Produto> {
        await this.produtoRepository.update(codigo, produto);
        const updatedProduto = await this.produtoRepository.findOneBy({ codigo });
        if (!updatedProduto) {
            throw new Error(`Produto com o codigo ${codigo} não encontrado.`);
        }
        return updatedProduto;
    }
      

    async remover(codigo: string): Promise<void>{
        await this.produtoRepository.delete(codigo);
    }
}