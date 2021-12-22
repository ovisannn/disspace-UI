// id int [pk, increment]
// nama_kategori varchar
// descrciption text
// rules text
// header varchar
// color_theme varchar

exports.dummyCategory = {
    id : 123,
    nama_kategori : 'gaming',
    description : "A topic for (almost) anything related to games - video games, board games, card games, etc. (but not sports).",
    rules :[
        {
            no : 1,
            text: "Lorem ipsum dolor sit amet"
        },
        {
            no : 2,
            text: "Lorem ipsum dolor sit amet"
        },
        {
            no : 3,
            text: "Lorem ipsum dolor sit amet"
        },
        {
            no : 4,
            text: "Lorem ipsum dolor sit amet"
        },
        {
            no : 5,
            text: "Lorem ipsum dolor sit amet"
        },
        {
            no : 6,
            text: "Lorem ipsum dolor sit amet"
        },
    ],
    headerPath:'',
    color_theme:'#6B9DFE'
}

