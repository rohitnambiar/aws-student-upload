{
echo Creating Bucket $1...
aws s3 mb s3://$1
echo Building...
aws cloudformation package --template-file stack.yml --s3-bucket $1 --output-template-file packaged-stack.yaml
echo Deploying....
aws cloudformation deploy --template-file packaged-stack.yaml --stack-name student-upload-stack --capabilities CAPABILITY_IAM
echo Done
}