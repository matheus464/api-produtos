import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos')
export class Produto {

    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @Column({ type: 'varchar', length: 255 })
    nome:TemplateStringsArray;

    @Column({ type: 'varchar', length: 50, nullable: true })
    codigoBarras: string;

    @Column({ type: 'varchar', precision: 10, scale: 2})
    quantidade: number;

    @Column({ type: 'decimal', precision: 10, scale: 2})
    preco: number;
}