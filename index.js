'use strict'
const AWS = require('aws-sdk');
const REGION = "ap-southeast-1"

AWS.config.update({ region: REGION });

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: REGION });

    let responseBody;
    let statusCode;

    try {
        const data = JSON.parse(event.body);
        const { Students: students } = data;
        let payload = [];
        students.forEach(student => {
            const { firstName, lastName, age, email } = student;
            payload.push({
                PutRequest: {
                    Item: {
                        firstName,
                        lastName,
                        age,
                        email
                    }
                }
            });
        });

        let params = {
            RequestItems: {
                'StudentsRegistrationDB': payload
            }
        };

        await documentClient.batchWrite(params).promise();

        statusCode = 200;
        responseBody = {
            "Message": `${students.length} Students added successfully!`,
            "Records": students.length,
            "Status": statusCode,
            "Code": "Success"
        };

    } catch (err) {
        console.log("Error --->", err)
        statusCode = 400;
        responseBody = {
            "Code": "Error",
            "Message": `Failed to add students!`,
            "Status": statusCode
        };
    }

    const response = {
        isBase64Encoded: false,
        headers: {
            "Content-Type": "application-json"
        },
        statusCode: statusCode,
        body: JSON.stringify(responseBody)
    }

    return response;
}
