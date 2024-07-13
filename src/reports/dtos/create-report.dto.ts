import {
  IsString,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
  IsNumber,
} from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  @Min(0)
  @Max(10000000)
  price: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1930)
  @Max(2030)
  year: number;

  @IsNumber()
  @Min(0)
  @Max(2000000)
  mileage: number;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;
}
