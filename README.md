### AWS Student Upload

A simple lambda function to insert list of students into dynamodb and return the count of inserted students.

## Stack

1. NodeJS
2. DynamoDB
3. Api-Gateway
4. S3
5. CloudFormation

## Development

Make sure to keep unique DB*NAME, and this DB_NAME should be consistent in both \_stack.yml* and _index.js_

## Deploy via Script

```
sh run.sh <YOUR_UNIQUE_BUCKET_NAME> <YOUR_STACK_NAME>
```

## Deploy Manually

1. Create your bucket

```
aws s3 mb s3://<YOUR_UNIQUE_BUCKET_NAME>
```

2. Package your stack

```
aws cloudformation package --template-file stack.yml --s3-bucket <YOUR_UNIQUE_BUCKET_NAME> --output-template-file packaged-stack.yaml
```

3. Deploy your stack

```
aws cloudformation deploy --template-file packaged-stack.yaml --stack-name <YOUR_STACK_NAME> --capabilities CAPABILITY_IAM
```

## Demo

Postman collection included with this repo.

## Demo Url [POST]

https://tog7qh4sxg.execute-api.ap-southeast-1.amazonaws.com/dev/import

## Sample JSON Data

```
{
   "Students":[
      {
         "firstName":"Stan",
         "lastName":"Student",
         "age":20,
         "email":"stan@university.com"
      },
      {
         "firstName":"Stew",
         "lastName":"Study",
         "age":23,
         "email":"stew@university.com"
      },
      {
         "firstName":"Paul",
         "lastName":"Cambridge",
    "age":25,
         "email":"paul@university.com"
      }
   ]
}
```
