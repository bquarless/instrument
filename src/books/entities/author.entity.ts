
/* Author Entity*/
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column({charset :'utf8'})
    // birth_date: string;

    @ManyToMany(
        type => Book,
        book => book.authors, // what is "author" within the Book Entity
    )
    books: Book[];
}
