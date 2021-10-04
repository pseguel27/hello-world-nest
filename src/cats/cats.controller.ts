import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from '../interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor (private readonly CatsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.CatsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.CatsService.findAll();
    }
}
