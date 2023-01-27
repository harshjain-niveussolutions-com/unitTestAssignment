const  supertest= require('supertest');
const app =require('../index');



//Get users list test
describe("Get /api/users",()=>{
    describe("User Details if there",()=>{
        test("Should respond with a 200 status code",async ()=>{
            const response = await supertest(app).get('/api/users');
            expect(response._body.length).toBeGreaterThan(0);
            expect(response.status).toEqual(200);
        })
    })

    describe("User Details if not there Errors",()=>{
        test("Should respond with a 400 status code",async ()=>{
            const response = await supertest(app).get('/api/users');
            // expect(response._body.length).toBeLessThan(1);
            expect(response.status).toEqual(400);
        })
    })

});


describe("Post /api/createUsers",()=>{
    describe("Given User Details",()=>{
        test("Should respond with a 200 status code",async ()=>{
            const response = await supertest(app).post('/api/createUser').send({
                
                    "name":"harsh s jain",
                    "number":8812439999,
                    "emailId":"abcdefh@gmail.com",
                    "active":true 
            })
            expect(response.status).toEqual(200);
        })
    })

    describe("Repeat User Details Errors",()=>{
        test("Should respond with a 400 status code",async ()=>{
            const response = await supertest(app).post('/api/createUser').send({
                "name":"harsh s oswall",
                "number":881243,
                "emailId":"abcdefhi@gmail.com",
                "active":true 
            })
            expect(response.status).toEqual(400);
        })
    })

});

describe("Post /api/updateUsers",()=>{
    describe("Update User Details",()=>{
        test("Should respond with a 200 status code",async ()=>{
            const response = await supertest(app).post('/api/updateUser/abcdefhi@gmail.com').send({
                
                    "name":"harsh jain",
                    "number":9877893211,
            })
            expect(response.status).toEqual(200);
        })
    })

    describe("User doesnt exist for updating Errors",()=>{
        test("Should respond with a 501 status code",async ()=>{
            const response = await supertest(app).post('/api/updateUser/acbfh@gmail.com').send({
                    "name":"harsh s jain",
                    "number":9870043211,
                    "emailId":"ac@gmail.com",
                    "active":true 
            })
            expect(response.status).toEqual(501);
        })
    })

});