// Destructuring of objects
const course = {
    courseName: "Complte JS Fundamental",
    coursePrice: 999,
    courseInstructor: "Hitesh Sir",
    courseDuration: "6 months"
}

// syntax of destructuring
// Basically we use destructuring to reduce the dot operator use
// to acces the value from of the objects
// We can easyly write in this way

// We have to use the key directly otherwise we can give another name to the key
// That is show in the second example for coursePrice to price
const { courseName, coursePrice: price, courseInstructor: instructor } = course;

console.log(courseName, price, instructor);

// Dedicated example of destructuring that is use in react
const navbar = ({ courseName, coursePrice }) => {
    // write your code here
    console.log(courseName, coursePrice);
}
navbar(course);

// Baisc of JSON
// {
//     "name":"hitesh",
//     "coursename":"Js in hindi",
//     "price":"free"
// }


// Some experiment on array and objects
let userDetails = [
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Michelle",
            last: "Griffin"
        },
        location: {
            street: {
                number: 8839,
                name: "Dogwood Ave"
            },
            city: "South Valley",
            state: "Minnesota",
            country: "United States",
            postcode: 42333,
            coordinates: {
                latitude: "86.3550",
                longitude: "38.0709"
            },
            timezone: {
                offset: "-10:00",
                description: "Hawaii"
            }
        },
        email: "michelle.griffin@example.com",
        login: {
            uuid: "b5a1e2d7-55e8-4e6a-8e2a-87d6c30eeb10",
            username: "purpleleopard541",
            password: "british",
            salt: "u4F3yQq6",
            md5: "5e0895e1e94e0019e4a2778b8a505c3c",
            sha1: "5674ea55eca6b558708a93949723179aa9274f10",
            sha256: "cebb512cacc64fdddf34b11395f1aa838519b442daf642985b0d026850e07b41"
        },
        dob: {
            date: "1991-12-22T05:55:24.742Z",
            age: 31
        },
        registered: {
            date: "2009-11-07T10:16:23.223Z",
            age: 14
        },
        phone: "(309) 960-0897",
        cell: "(232) 820-5097",
        id: {
            name: "SSN",
            value: "034-61-7472"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/76.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg"
        },
        nat: "US"
    }
]