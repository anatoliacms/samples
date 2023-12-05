import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnatoliaCMSModule } from '../../anatolia-admin-api';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const databaseOptions: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest-crud',
  password: 'nest-crud',
  database: 'nest-crud',
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseOptions),
    AnatoliaCMSModule.register({
      database: databaseOptions,
      workingDirectory: './projects',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
