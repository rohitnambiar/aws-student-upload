### AWS Student Upload

## Deploy

```
sh run.sh <YOUR_UNIQUE_BUCKET_NAME>
```

## Deploy

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
