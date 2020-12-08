import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ClienteEntity } from '../clientes/entity/cliente-entity';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'welcome1',
            database: 'nutrinet',
            entities:[
                ClienteEntity
                //'../src/**/*.entity{.ts,.js}'
            ],
            synchronize: false
            //autoLoadEntities: true
        })
    ]
})
export class DatabaseModule {
    constructor(private readonly connection:Connection){}
}
