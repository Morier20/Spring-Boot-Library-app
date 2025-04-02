'use strict'
const basicURL = "http://localhost:8080";
export async function getAllDataFromDb() {
    try{
        const response = await fetch(`${basicURL}/books`);
        if(!response.ok){
            throw new Error(`${response.status}`);
        }

        return await response.json();
    }
    catch(error){
        console.error(`Error wile geting data from db`);
    }
}
export async function newArrivals() {
    try{
        const response = await fetch(`${basicURL}/arrivals`)
        if(!response.ok){
            throw new Error(`${response.status}`);
        }
        return await response.json();
    }
    catch(error){
        console.error(`Error wile geting data from db`)
    }
}