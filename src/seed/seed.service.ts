import { Injectable } from '@nestjs/common';
import { CAR_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed ';
import { CarsService as BransService, CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ) {}

  populateDB() {
    // CAR_SEED
    // BRAND_SEED
    this.carsService.fillCarsWithSeedData(CAR_SEED);

    this.brandsService.fillCarsWithSeedData(BRAND_SEED);
    return 'Seed executed';
  }
}
