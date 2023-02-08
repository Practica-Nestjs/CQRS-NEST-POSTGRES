import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

import { EnvConfiguration, JoiValidationSchema } from '@config/index';
import { AuthModule } from './auth/auth.module';
import { ConectionDataBaseModule } from './conection-data-base/conection-data-base.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ConectionDataBaseModule,
    AuthModule,
    CqrsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
