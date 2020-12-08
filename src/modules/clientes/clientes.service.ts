import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClienteEntity } from './entity/cliente-entity';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(ClienteEntity)
        private clientesRepository: Repository<ClienteEntity>
    ){}

    async findAll(): Promise<ClienteEntity[]> {
        console.log('*_* findAll service', await this.clientesRepository.find());
        return await this.clientesRepository.find();
    }
    
    async findOneById(clienteId: number) {
        return await this.clientesRepository.findOne(clienteId);
        /**
         * 
         return await this.clientesRepository.find({
             select: ['nombre', 'apellidos'],
             where: [{'cliente_id': _clienteId}]
         })
         */
    }
}
