/* CreateBookDto */

// Implement validation rules in our CreateBookDto
import { IsString } from 'class-validator';

export class CreateBookDto {
    @IsString()
    readonly isbn: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly publisher: string;

    @IsString()
    readonly publication_year: string;

    @IsString()
    readonly description: string;

    @IsString({ each: true })
    readonly authors: string[];
}




