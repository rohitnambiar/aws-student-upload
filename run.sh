{
echo Creating Bucket - $1...
aws s3 mb s3://$1
echo Packaging Stack - $2...
aws cloudformation package --template-file stack.yml --s3-bucket $1 --output-template-file packaged-stack.yaml
echo Deploying Stack - $2...
aws cloudformation deploy --template-file packaged-stack.yaml --stack-name $2 --capabilities CAPABILITY_IAM
echo Done
}
