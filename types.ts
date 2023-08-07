// Interfaces for posts
export interface Author {
    email : any;
    emailVerified : any;
    id : any;
    image : any;
    name : any; 
    followingIDs : string[];
    followedByIDs : string[];
}

interface Like {
    id : string;
    post : Post;
    user : Author;
}

export interface Post {
    id : any;
    author : Author;
    authorId : any;
    content  :any;
    createdAt : any;
    likes : any;
}