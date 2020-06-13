export class Book {
    constructor(title,author,description,pages){
    this.title=title;
    this.author=author;
    this.description=description;
    this.pages=pages;
    this.currentPage=1;
    this.read=false;
    
}
    readBook(page){
        if(page<1 || page>this.pages){
            return 0;
        }
        else if(page>=1 && page<this.pages){
            this.currentPage=page;
            return 1;
        }
        else if(page==this.pages){
            this.currentPage=page;
            this.read=true;
            return 1;
        }
        
    }
}

export const books = [
    new Book("Harry potter and the deathly hallows","J K Rowling","The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",600,300),
    new Book("lonely streets cry too", "locke smith", "it's horror", 165, 10),
    new Book("The girl in room 105","chetan bhagat","Keshav's investigation",200,150)
];
