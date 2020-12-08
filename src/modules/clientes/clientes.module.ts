import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './entity/cliente-entity';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteEntity])],
    providers: [ClientesService],
    controllers: [ClientesController]
})
export class ClientesModule {}
