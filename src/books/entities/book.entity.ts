
/* Book Entity - Enabling Cascading inserts */
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
} from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book {
    @Column({primary: true})
    isbn: string;

    @Column()
    title: string;

    @Column()
    publisher: string;

    @Column()
    publication_year: string;

    @Column()
    description: string;

    @JoinTable()
    @ManyToMany(
        type => Author,
        author => author.books,
        {
            cascade: true,
        },
    )
    authors: Author[];
}
