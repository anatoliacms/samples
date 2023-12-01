import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AnatoliaCMSModule} from "../../anatolia-admin-api";

const databaseOptions: any = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'nest-crud',
    password: 'nest-crud',
    database: 'nest-crud',
    autoLoadEntities: true,
    synchronize: true
};

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseOptions),
        AnatoliaCMSModule.register({
            database: databaseOptions
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
