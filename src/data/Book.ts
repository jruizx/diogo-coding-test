export class Author {
    name: string | undefined;
}

export class Book {
    id: number | undefined;
    title: string | undefined;
    price: number | undefined;
    authors: Author[] | undefined;
    published: string | undefined;
}