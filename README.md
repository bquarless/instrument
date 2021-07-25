<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development

 Create Docker Container with Postgres DB
 yarn run start:dev:db
 
 In your Rest Client create book entities using the Post body below:
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
      "authors": ["Ray Bradbury"],
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
 
 

$ yarn run start

# watch mode
$ yarn run start:dev


## Test

```bash
# unit tests
$ yarn run test

Test api's

Get book by isbn
    http://localhost:3000/api/books/1590197348

Find All books
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
