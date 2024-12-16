// const apiUrl = "https://jsonplaceholder.typicode.com";

// export const postData = async (endpoint, data) => {
//     const response = await fetch(`${apiUrl}/${endpoint}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     return response.json();
// };

// export const getData = async (endpoint) => {
//     const response = await fetch(`${apiUrl}/${endpoint}`);
//     return response.json();
// };



// src/services/apiService.js

const apiUrl = "https://jsonplaceholder.typicode.com";

export const postData = async (endpoint, data) => {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const getData = async (endpoint) => {
    const response = await fetch(`${apiUrl}/${endpoint}`);
    return response.json();
};

// Define the getEmployees function
export const getEmployees = async () => {
    const response = await fetch(`${apiUrl}/employees`);
    return response.json();
};

// Define the postEmployee function
export const postEmployee = async (data) => {
    const response = await fetch(`${apiUrl}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};
