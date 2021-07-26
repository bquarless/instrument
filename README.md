

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development

 Create Docker Container with Postgres DB
 yarn start:dev:db
 
 Start the application server
 yarn start:dev
 
 In your Rest Client create book entities in Postgres Db using the Post body below:
   {
      "isbn": "0944305008",
      "title": "Omni Audio Experience",
      "publisher": "Bonneville Media Communications",
      "publication_year": "1987",
      "description": "Presents Adaptations With Sound Effects Of Two Stories From Ray Bradbury's The Martian Chronicles. Includes An Interview With Bradbury, A Report On Subliminal Messages, And New Age Music.",
      "authors": ["Bradbury, Ray"]
    }
    
    {
      "isbn": "1112898247",
      "title": "Martian-chronicles",
      "publisher": "Blackstone Audiobooks",
      "publication_year": "1950",
      "description": "not available",
      "authors": ["Ray Bradbury"]
    }
    
    {
      "isbn": "1433232170",
      "title": "The Halloween Tree",
      "publisher": "Blackstone",
      "publication_year": "1993",
      "description": "On A Halloween Night, Eight Boys Are Led On An Incredible Journey Into The Past By The Mysterious Spirit Moundshroud.",
      "authors": [ "Ray Bradbury"]
    }
    
    {
      "isbn": "1590197348",
      "title": "Hitchhiker-s-guide-to-the-galaxy-book-3",
      "publisher": "Audiogo Limited",
      "publication_year": "1993",
      "description": "Guide to hitching",
      "authors": ["Adams","Douglas", "Ray Bradbury"]
    }
 
## Test

```bash
# unit tests
$ yarn test

Test api's

Get book by isbn
    http://localhost:3000/api/books/1590197348

Get All books
    http://localhost:3000/api/books

Create book
    http://localhost:3000/api/books
Post body
   {
      "isbn": "0944305008",
      "title": "Omni Audio Experience",
      "publisher": "Bonneville Media Communications",
      "publication_year": "1987",
      "description": "Presents Adaptations With Sound Effects Of Two Stories From Ray Bradbury's The Martian Chronicles. Includes An Interview With Bradbury, A Report On Subliminal Messages, And New Age Music.",
      "authors": ["Bradbury, Ray"]
    }

Update Book - Patch 
    http://localhost:3000/api/books/1590197348
Body
    {
      "isbn": "1590197348",
      "title": "Hitchhiker-s-guide-to-the-galaxy-book-3",
      "publisher": "Audiogo Limited",
      "publication_year": "1993",
      "description": "Guide to hitching",
      "authors": ["Adams","Douglas", "Steven Jones"]
    }

Delete Book 
    http://localhost:3000/api/books/1590197348


Not Implemented :
    Birthdate in Author entity
    Find by Author
    Static log files
