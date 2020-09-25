import { CatEntity } from './cats.entity';
import { CatsService } from './cats.service';
import { inputCat } from './inputs/cat.input';
export declare class CatResolver {
    private readonly catsService;
    constructor(catsService: CatsService);
    cats(): Promise<CatEntity[]>;
    createCat(data: inputCat): Promise<CatEntity>;
}
