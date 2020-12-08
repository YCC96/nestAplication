import { Controller, Get, Param } from '@nestjs/common';

import { ClienteEntity } from './entity/cliente-entity';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor(private clientesService: ClientesService) {}

    @Get()
    async findAll(): Promise<ClienteEntity[]> {
        console.log('*_* controller', await this.clientesService.findAll());
        
        return this.clientesService.findAll();
    }
    
    @Get(':clienteId')
    get(@Param('clienteId') clienteId): any {
        console.log('*_* findAll holis');
        return this.clientesService.findOneById(clienteId);
    }
}
