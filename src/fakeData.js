import axios from "axios"

export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets: [
        {
            label: "Steps by Kamsi",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)",
        },
        {
            label: "Steps by Dera",
            data: [3000, 5000, 5500, 1200, 11000, 2000, 9000],
            borderColor: "red",
            // backgroundColor: "white"
        },
    ],
}

export const barChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
        {
            label: "Expenses",
            data: [1200, 300, 150, 180, 100],
            backgroundColor: ["red" ,"blue", "green", "yellow", "black"],
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
        }
    ],
}

export const pieChartData = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
    datasets: [
        {
            label: "Time Spent",
            data: [120, 60, 30, 90, 45],
            backgroundColor: ["red", "blue", "green", "yellow", "black"],
            hoverOffset: 4,
        },
    ],
}

export const gpaData = {
    labels: ["Yr 1", "Yr 2", "Yr 3", "Yr 4", "Yr 5",],
    datasets: [
        {
            label: "CGPA Tracking (by % contribution of each year)",
            data: [(97/105), (93/100), (99/105), (95/105), (109/115)],
            borderColor: "blue",
            backgroundColor: "white",
        }
    ]
}

export const timeTableData = [
    {
        day: 'Monday',
        id: 1,
        periods: ['MCE 301' ,'MCE 303', 'MCE 305', 'MCE 309', 'MCE 311']
    },
    {
        day: 'Tuesday',
        id: 2,
        periods: ['MCE 301' ,'MCE 303', 'MCE 305', 'MCE 309', 'MCE 311']
    },
    {
        day: 'Wednesday',
        id: 3,
        periods: ['MCE 301' ,'MCE 303', 'MCE 305', 'MCE 309', 'MCE 311']
    },
    {
        day: 'Thursday',
        id: 4,
        periods: ['MCE 301' ,'MCE 303', 'MCE 305', 'MCE 309', 'MCE 311']
    },
    {
        day: 'Friday',
        id: 5,
        periods: ['MCE 301' ,'MCE 303', 'MCE 305', 'MCE 309', 'MCE 311']
    },
]

export const staffData = [
    {
        name: 'John Doe',
        id: 1,
        title: 'Engr. Dr.',
        email: 'johndoe@gmail.com',
        positions: ['Staff Adviser', '2022/23 Set Course Adviser'],
        degrees: ['PhD', 'M.Sc', 'B.Eng'],
    },
    {
        name: 'Jane Doe',
        id: 2,
        title: '',
        email: 'janedoe@gmail.com',
        positions: ['Department Secretary'],
        degrees: ['B.Eng']
    },
    {
        name: 'Regina Phalange',
        id: 3,
        title: 'Engr.',
        email: 'reginaphalange@gmail.com',
        positions: ['Lecturer', '2021/2022 Set Course Adviser'],
        degrees: ['M.Sc', 'B.Eng'],
    },
    {
        name: 'Ken Adams',
        id: 4,
        title: 'Engr. Dr.',
        email: 'kenadams@gmail.com',
        positions: ['Head of Department'],
        degrees: ['PhD', 'M.Sc', 'B.Eng']
    },
]

export const assessmentData = []

const itemId = 1; // Replace with the desired item ID
        
fetch(`https://freetestapi.com/api/v1/students/${itemId}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

export let student1;

fetch('https://freetestapi.com/api/v1/students/2')
    .then(res => res.json())
    .then((data) => {
        student1 = data;
        console.log(student1);
    })
    .catch(error => console.error('Error: ', error));