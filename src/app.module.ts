import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AnatoliaCMSModule} from "../../anatolia-admin-api";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'nest-crud',
            password: 'nest-crud',
            database: 'nest-crud',
            autoLoadEntities: true,
            synchronize: true
        }),
        AnatoliaCMSModule.register()
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
