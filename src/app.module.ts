import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjercicioUnoController } from './controllers/ejercicio_uno.controller';
import { EjercicioDosController } from './controllers/ejercicio_dos.controller';
import { EjercicioTresController } from './controllers/ejercicio_tres.controller';
import { EjercicioUnoService } from './services/ejercicio_uno.service';
import { EjercicioDosService } from './services/ejercicio_dos.service';
import { EjercicioTresService } from './services/ejercicio_tres.service';

@Module({
  imports: [],
  controllers: [AppController, EjercicioUnoController, EjercicioDosController, EjercicioTresController],
  providers: [AppService, EjercicioUnoService, EjercicioDosService, EjercicioTresService],
})
export class AppModule {}
