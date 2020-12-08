import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './modules/contact/contact.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, ContactModule, ClientesModule],
  //imports: [TypeOrmModule.forRoot(), ClientesModule],
  //imports: [DatabaseModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
