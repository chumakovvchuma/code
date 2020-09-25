import { CatEntity } from './cats.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private readonly CatRepository;
    constructor(CatRepository: Repository<CatEntity>);
    createCat(data: CreateCatDto): Promise<CatEntity>;
    getCats(): Promise<CatEntity[]>;
}
